"use client";

import { createContext, useContext, useState } from "react";

// ── Translations ──────────────────────────────────────────────
export const translations = {
  EN: {
    company:           "Company",
    coreTechnology:    "Core Technology",
    biometricProducts: "Biometric Products",
    solutions:         "Solutions",
    newsMedia:         "News & Media",
    // add more page-level keys here as needed
  },
  KO: {
    company:           "회사 소개",
    coreTechnology:    "핵심 기술",
    biometricProducts: "생체 인식 제품",
    solutions:         "솔루션",
    newsMedia:         "뉴스 & 미디어",
  },
  JA: {
    company:           "会社概要",
    coreTechnology:    "コア技術",
    biometricProducts: "生体認証製品",
    solutions:         "ソリューション",
    newsMedia:         "ニュース & メディア",
  },
  ZH: {
    company:           "公司概况",
    coreTechnology:    "核心技术",
    biometricProducts: "生物识别产品",
    solutions:         "解决方案",
    newsMedia:         "新闻 & 媒体",
  },
};

export const languageOptions = [
  { code: "EN", label: "English",  flag: "/images/flag-us.png" },
  { code: "KO", label: "한국어",    flag: "/images/flag-kr.png" },
  { code: "JA", label: "日本語",    flag: "/images/flag-jp.png" },
  { code: "ZH", label: "中文",      flag: "/images/flag-cn.png" },
];

// ── Context ───────────────────────────────────────────────────
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("EN");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}