"use client";

import { useTranslation } from "@/components/context/TranslationContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";

const WHITE_TEXT_ROUTES = [
  "/",
  "/about",
  "/solutions/solutions",
  "/solutions/pkl-solutions",
  "/solutions/biometric-authentication-solutions",
  "/company/history",
  "/company/overview",
  "/biometric-products/products",
];

const navLinks = [
  { label: "Company",            href: "/company/history" },
  { label: "Core Technology",    href: "/coretech/p2n2"   },
  { label: "Biometric Products", href: "/biometric-products/products" },
  { label: "Solutions",          href: "/solutions/solutions" },
  { label: "News & Media",       href: "/news" },
];

const FlagEN = () => (
  <div style={{
    width: "20px", height: "20px", borderRadius: "50%",
    overflow: "hidden", flexShrink: 0,
    border: "1px solid rgba(128,128,128,0.25)"
  }}>
    <svg width="20" height="20" viewBox="8 0 44 30" preserveAspectRatio="xMidYMid slice" style={{ display: "block", width: "100%", height: "100%" }}>
      <rect width="60" height="30" fill="#b22234" />
      <g fill="#fff">
        <rect y="2" width="60" height="2" />
        <rect y="6" width="60" height="2" />
        <rect y="10" width="60" height="2" />
        <rect y="14" width="60" height="2" />
        <rect y="18" width="60" height="2" />
        <rect y="22" width="60" height="2" />
        <rect y="26" width="60" height="2" />
      </g>
      <rect width="25" height="14" fill="#3c3b6e" />
    </svg>
  </div>
);

const FlagKO = () => (
  <div style={{
    width: "20px", height: "20px", borderRadius: "50%",
    overflow: "hidden", flexShrink: 0,
    border: "1px solid rgba(128,128,128,0.25)"
  }}>
    <svg width="20" height="20" viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" style={{ display: "block", width: "100%", height: "100%" }}>
      <rect width="60" height="40" fill="white" />
      <circle cx="30" cy="20" r="10" fill="red" />
      <path d="M30 10 A10 10 0 0 0 30 30" fill="blue" />
    </svg>
  </div>
);

const ArrowIcon = ({ isWhite }) => (
  <svg width="17" height="9" viewBox="0 0 17 9" fill="none">
    <path
      d="M16.281 1.28104L8.78104 8.78104C8.71139 8.85077 8.62867 8.90609 8.53762 8.94384C8.44657 8.98158 8.34898 9.00101 8.25042 9.00101C8.15186 9.00101 8.05426 8.98158 7.96321 8.94384C7.87216 8.90609 7.78945 8.85077 7.71979 8.78104L0.219792 1.28104C0.0790615 1.14031 0 0.94944 0 0.750417C0 0.551394 0.0790615 0.360522 0.219792 0.219792C0.360523 0.0790612 0.551394 0 0.750417 0C0.94944 0 1.14031 0.0790612 1.28104 0.219792L8.25042 7.1901L15.2198 0.219792C15.2895 0.150109 15.3722 0.0948337 15.4632 0.0571218C15.5543 0.0194098 15.6519 0 15.7504 0C15.849 0 15.9465 0.0194098 16.0376 0.0571218C16.1286 0.0948337 16.2114 0.150109 16.281 0.219792C16.3507 0.289474 16.406 0.3722 16.4437 0.463245C16.4814 0.554289 16.5008 0.651871 16.5008 0.750417C16.5008 0.848963 16.4814 0.946545 16.4437 1.03759C16.406 1.12863 16.3507 1.21136 16.281 1.28104Z"
      fill={isWhite ? "white" : "black"}
    />
  </svg>
);

const languages = [
  { code: "EN", component: <FlagEN /> },
  { code: "KO", component: <FlagKO /> },
];

const Navbar = function () {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  const langDesktopRef = useRef(null);
  const langMobileRef  = useRef(null);

  const { lang, isTranslating, translatePage } = useTranslation();

  const selectedLang = lang === "EN"
    ? { code: "EN", component: <FlagEN /> }
    : { code: "KO", component: <FlagKO /> };

  useEffect(() => {
    const white = WHITE_TEXT_ROUTES.some((route) =>
      route === "/" ? pathname === "/" : pathname === route
    );
    setIsWhite(white);
  }, [pathname]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // ✅ Click outside se menu close
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (e.target.closest("button[aria-label='Toggle menu']")) return;
      if (e.target.closest("a")) return;
      // ✅ Language selector pe click ho to menu band mat karo
      if (langDesktopRef.current?.contains(e.target)) return;
      if (langMobileRef.current?.contains(e.target)) return;
      setMenuOpen(false);
    };

    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 10);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const handleLangSelect = async (langCode) => {
    setIsOpen(false);
    setIsMobileOpen(false);
    await translatePage(langCode);
  };

  return (
    <>
      {isTranslating && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.5)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "16px",
        }}>
          <div style={{
            width: "40px", height: "40px", borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.3)",
            borderTopColor: "#fff",
            animation: "spin 0.8s linear infinite",
          }} />
          <p style={{ color: "#fff", fontSize: "16px", margin: 0 }}>Translating...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      <header className={styles["header-section"]}>
        <div className={styles["header-section-wrapper"]}>

          {/* LEFT — Logo */}
          <div className={styles["header-section-left"]}>
            <Link
              href="/"
              className={`${styles["header-section-left-img"]} ${!isWhite ? styles["logo-black"] : ""}`}
            >
              <Image src="/images/logo.png" fill={true} alt="Logo" />
            </Link>
          </div>

          {/* CENTER — Nav Links */}
          <nav className={styles["header-section-center"]}>
            <ul className={styles["nav-links"]}>
              {navLinks.map((link) => (
                <li key={link.href} className={isActive(link.href) ? styles["active-li"] : ""}>
                  <Link
                    href={link.href}
                    className={isWhite ? styles["nav-link-white"] : styles["nav-link-black"]}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT — Language + Hamburger */}
          <div className={styles["header-section-right"]}>

            {/* Desktop Language Selector */}
            <div className={styles["lang-selector-desktop"]} ref={langDesktopRef}>
              <div
                className={styles["lang-selector"]}
                onClick={() => !isTranslating && setIsOpen(!isOpen)}
              >
                {selectedLang.component}
                <span className={isWhite ? styles["lang-text-white"] : styles["lang-text-black"]}>
                  {isTranslating ? "..." : selectedLang.code}
                </span>
                <ArrowIcon isWhite={isWhite} />

                {isOpen && !isTranslating && (
                  <div className={styles["lang-dropdown"]}>
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className={styles["lang-option"]}
                        onClick={(e) => { e.stopPropagation(); handleLangSelect(lang.code); }}
                      >
                        {lang.component}
                        <span>{lang.code}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Hamburger */}
            <button
              className={`${styles["hamburger"]} ${isWhite ? styles["hamburger-white"] : styles["hamburger-black"]} ${menuOpen ? styles["hamburger-active"] : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span></span><span></span><span></span>
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles["mobile-menu"]} ${menuOpen ? styles["mobile-menu-open"] : ""} ${isWhite ? styles["mobile-menu-transparent"] : styles["mobile-menu-white"]}`}>
        <ul className={styles["mobile-nav-links"]}>
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`${styles["mobile-nav-item"]} ${menuOpen ? styles["mobile-nav-item-visible"] : ""}`}
              style={{ transitionDelay: menuOpen ? `${0.08 * index + 0.15}s` : "0s" }}
            >
              <Link
                href={link.href}
                className={`${styles["mobile-nav-link"]} ${isActive(link.href) ? styles["mobile-nav-link-active"] : ""} ${isWhite ? styles["mobile-link-white"] : styles["mobile-link-black"]}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Language Selector */}
        <div
          className={`${styles["lang-selector-mobile"]} ${menuOpen ? styles["mobile-nav-item-visible"] : ""}`}
          ref={langMobileRef}
          style={{ transitionDelay: menuOpen ? `${0.08 * navLinks.length + 0.15}s` : "0s" }}
        >
          <div
            className={styles["lang-selector"]}
            onClick={() => !isTranslating && setIsMobileOpen(!isMobileOpen)}
          >
            {selectedLang.component}
            <span
              className={isWhite ? styles["mobile-link-white"] : styles["mobile-link-black"]}
              style={{ fontFamily: "NeueHaasGroteskLight", fontSize: "1.14rem" }}
            >
              {isTranslating ? "..." : selectedLang.code}
            </span>
            <ArrowIcon isWhite={isWhite} />

            {isMobileOpen && !isTranslating && (
              <div className={styles["lang-dropdown"]}>
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={styles["lang-option"]}
                    onClick={(e) => { e.stopPropagation(); handleLangSelect(lang.code); }}
                  >
                    {lang.component}
                    <span>{lang.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;