import { NextResponse } from "next/server";

const langCodes = {
  KO: "ko",
  JA: "ja",
  ZH: "zh",
  HI: "hi",
};

function shouldSkip(text) {
  const t = text.trim();
  if (!t) return true;
  if (/^\d+$/.test(t)) return true;
  if (/^[\d\s\+\-\$\%\,\.]+$/.test(t)) return true;
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)) return true;
  if (/^https?:\/\//.test(t)) return true;
  if (t.length <= 1) return true;
  return false;
}

function normalizeText(text) {
  // ALL CAPS ko sentence case mein karo
  if (text === text.toUpperCase() && /[A-Z]{2,}/.test(text)) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  return text;
}

export async function POST(request) {
  try {
    const { texts, targetLang } = await request.json();
    const target = langCodes[targetLang] || "ko";

    // ✅ Skip + normalize track karo
    const skipIndexes = new Set();
    const textsToTranslate = [];

    texts.forEach((text, i) => {
      if (shouldSkip(text)) {
        skipIndexes.add(i);
      } else {
        textsToTranslate.push(normalizeText(text));
      }
    });

    if (textsToTranslate.length === 0) {
      return NextResponse.json({ translated: texts });
    }

    // ✅ Saare texts ek saath — single API call
    const joined = textsToTranslate.join("\n||||\n");

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&q=${encodeURIComponent(joined)}`;

    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(10000),
    });

    const data = await res.json();

    // ✅ Response parse karo
    const translatedJoined = data[0]
      .map((item) => item[0])
      .filter(Boolean)
      .join("");

    const translatedParts = translatedJoined.split(/\n?\|\|\|\|\n?/);

    // ✅ Original order mein wapas map karo
    let partIndex = 0;
    const finalTranslated = texts.map((text, i) => {
      if (skipIndexes.has(i)) return text;
      return translatedParts[partIndex++] || text;
    });

    return NextResponse.json({ translated: finalTranslated });
  } catch (err) {
    console.error("Translation error:", err);
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}