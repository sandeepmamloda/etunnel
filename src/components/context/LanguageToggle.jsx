"use client";

// ✅ Yeh component apne existing Navbar mein
// purane language selector ki jagah lagao — bas itna!

import { useTranslation } from "@/components/context/TranslationContext";
import Image from "next/image";
import { useState } from "react";
import styles from "../navbar/navbar.module.css"; // apna existing CSS

const languageOptions = [
  { code: "EN", label: "English", flag: "/images/flag-us.png" },
  { code: "KO", label: "한국어",   flag: "/images/flag-kr.png" },
];

const ArrowIcon = ({ isWhite }) => (
  <svg width="17" height="9" viewBox="0 0 17 9" fill="none">
    <path
      d="M16.281 1.28104L8.78104 8.78104C8.71139 8.85077 8.62867 8.90609 8.53762 8.94384C8.44657 8.98158 8.34898 9.00101 8.25042 9.00101C8.15186 9.00101 8.05426 8.98158 7.96321 8.94384C7.87216 8.90609 7.78945 8.85077 7.71979 8.78104L0.219792 1.28104C0.0790615 1.14031 0 0.94944 0 0.750417C0 0.551394 0.0790615 0.360522 0.219792 0.219792C0.360523 0.0790612 0.551394 0 0.750417 0C0.94944 0 1.14031 0.0790612 1.28104 0.219792L8.25042 7.1901L15.2198 0.219792C15.2895 0.150109 15.3722 0.0948337 15.4632 0.0571218C15.5543 0.0194098 15.6519 0 15.7504 0C15.849 0 15.9465 0.0194098 16.0376 0.0571218C16.1286 0.0948337 16.2114 0.150109 16.281 0.219792C16.3507 0.289474 16.406 0.3722 16.4437 0.463245C16.4814 0.554289 16.5008 0.651871 16.5008 0.750417C16.5008 0.848963 16.4814 0.946545 16.4437 1.03759C16.406 1.12863 16.3507 1.21136 16.281 1.28104Z"
      fill={isWhite ? "white" : "black"}
    />
  </svg>
);

export default function LanguageToggle({ isWhite = true, isMobile = false }) {
  const { lang, isTranslating, translatePage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const current = languageOptions.find((l) => l.code === lang) || languageOptions[0];

  const handleSelect = async (option) => {
    setIsOpen(false);
    if (option.code === lang) return;
    await translatePage(option.code);
  };

  return (
    <div className={styles["lang-selector"]} onClick={() => !isTranslating && setIsOpen(!isOpen)}>

      {/* Current language flag */}
      <Image
        src={current.flag}
        width={20} height={20}
        alt={current.label}
        style={{ borderRadius: "2px", objectFit: "cover" }}
      />

      {/* Current language code */}
      <span className={
        isMobile
          ? (isWhite ? styles["mobile-link-white"] : styles["mobile-link-black"])
          : (isWhite ? styles["lang-text-white"]   : styles["lang-text-black"])
      }
        style={isMobile ? { fontFamily: "NeueHaasGroteskLight", fontSize: "1.14rem" } : {}}
      >
        {isTranslating ? "..." : current.code}
      </span>

      <ArrowIcon isWhite={isWhite} />

      {/* Dropdown */}
      {isOpen && !isTranslating && (
        <div className={styles["lang-dropdown"]}>
          {languageOptions.map((option) => (
            <div
              key={option.code}
              className={styles["lang-option"]}
              onClick={(e) => { e.stopPropagation(); handleSelect(option); }}
            >
              <Image
                src={option.flag}
                width={20} height={20}
                alt={option.label}
                style={{ borderRadius: "2px", objectFit: "cover" }}
              />
              <span>{option.code}</span>
            </div>
          ))}
        </div>
      )}

      {/* Translating overlay */}
      {isTranslating && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: "12px",
        }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.3)",
            borderTopColor: "#fff",
            animation: "spin 0.8s linear infinite",
          }} />
          <p style={{ color: "#fff", fontSize: "15px", margin: 0 }}>Translating...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
    </div>
  );
}