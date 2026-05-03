"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const TranslationContext = createContext(null);

export function TranslationProvider({ children }) {
  const [lang, setLang] = useState("EN");
  const [isTranslating, setIsTranslating] = useState(false);
  const pathname = usePathname(); // ✅ Route change detect karega

  const originalTextsRef = useRef(new Map());
  const cacheRef = useRef(new Map()); // ✅ Cache across navigations
  const currentLangRef = useRef("EN"); // ✅ Latest lang track karo (re-render ke bina)

  const applyTranslation = useCallback(async (targetLang) => {
    const getTextNodes = () => {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName))
              return NodeFilter.FILTER_REJECT;
            if (!node.textContent.trim()) return NodeFilter.FILTER_SKIP;
            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );
      const nodes = [];
      let node;
      while ((node = walker.nextNode())) nodes.push(node);
      return nodes;
    };

    const textNodes = getTextNodes();
    if (textNodes.length === 0) return;

    // ✅ Original texts save karo (fresh page ke liye)
    textNodes.forEach((node) => {
      if (!originalTextsRef.current.has(node)) {
        originalTextsRef.current.set(node, node.textContent.trim());
      }
    });

    // ✅ English — original restore karo
    if (targetLang === "EN") {
      textNodes.forEach((node) => {
        const original = originalTextsRef.current.get(node);
        if (original) node.textContent = original;
      });
      return;
    }

    const texts = textNodes.map(
      (n) => originalTextsRef.current.get(n) || n.textContent.trim()
    );

    // ✅ Sirf uncached texts API pe bhejo
    const uncachedIndexes = [];
    const uncachedTexts = [];

    texts.forEach((text, i) => {
      const key = `${targetLang}:${text}`;
      if (!cacheRef.current.has(key)) {
        uncachedIndexes.push(i);
        uncachedTexts.push(text);
      }
    });

    if (uncachedTexts.length > 0) {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texts: uncachedTexts, targetLang }),
        keepalive: true,
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      // ✅ Cache mein save karo
      uncachedIndexes.forEach((originalIndex, i) => {
        const key = `${targetLang}:${texts[originalIndex]}`;
        cacheRef.current.set(key, data.translated[i]);
      });
    }

    // ✅ DOM update karo
    textNodes.forEach((node, i) => {
      const key = `${targetLang}:${texts[i]}`;
      const translated = cacheRef.current.get(key);
      if (translated) node.textContent = translated;
    });
  }, []);

  // ✅ KEY FIX — pathname change hote hi re-translate karo
  useEffect(() => {
    if (currentLangRef.current === "EN") return; // English hai — kuch nahi karna

    // Naya page load hone ka wait karo phir translate
    const timer = setTimeout(() => {
      originalTextsRef.current.clear(); // Naye page ke fresh nodes ke liye
      applyTranslation(currentLangRef.current);
    }, 100); // ✅ DOM settle hone do

    return () => clearTimeout(timer);
  }, [pathname, applyTranslation]); // ✅ Har route change pe trigger

  const translatePage = useCallback(async (targetLang) => {
    setIsTranslating(true);
    try {
      await applyTranslation(targetLang);
      currentLangRef.current = targetLang; // ✅ Ref update
      setLang(targetLang);

      // ✅ localStorage — page refresh pe bhi yaad rahe
      localStorage.setItem("preferred-lang", targetLang);
    } catch (err) {
      console.error("Translation error:", err);
      alert("Translation failed. Please try again.");
    } finally {
      setIsTranslating(false);
    }
  }, [applyTranslation]);

  // ✅ Page refresh pe bhi language yaad rahe
  useEffect(() => {
    const saved = localStorage.getItem("preferred-lang");
    if (saved && saved !== "EN") {
      currentLangRef.current = saved;
      setLang(saved);
      setTimeout(() => applyTranslation(saved), 100);
    }
  }, [applyTranslation]);

  return (
    <TranslationContext.Provider value={{ lang, isTranslating, translatePage }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used inside <TranslationProvider>");
  return ctx;
}