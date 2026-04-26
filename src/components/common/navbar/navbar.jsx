"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

const WHITE_TEXT_ROUTES = ["/", "/products", "/solutions", "/news"];

const navLinks = [
  { label: "Company",            href: "/companyoverview" },
  { label: "Core Technology",    href: "/coretech/p2n2"   },
  { label: "Biometric Products", href: "/products"         },
  { label: "Solutions",          href: "/solutions"        },
  { label: "News & Media",       href: "/news"             },
];

const FlagEN = () => (
  <svg width="20" height="20" viewBox="0 0 60 30">
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
);

const FlagKO = () => (
  <svg width="20" height="20" viewBox="0 0 60 40">
    <rect width="60" height="40" fill="white" />
    <circle cx="30" cy="20" r="10" fill="red" />
    <path d="M30 10 A10 10 0 0 0 30 30" fill="blue" />
  </svg>
);

const ArrowIcon = ({ isWhite }) => (
  <svg width="17" height="9" viewBox="0 0 17 9" fill="none">
    <path
      d="M16.281 1.28104L8.78104 8.78104C8.71139 8.85077 8.62867 8.90609 8.53762 8.94384C8.44657 8.98158 8.34898 9.00101 8.25042 9.00101C8.15186 9.00101 8.05426 8.98158 7.96321 8.94384C7.87216 8.90609 7.78945 8.85077 7.71979 8.78104L0.219792 1.28104C0.0790615 1.14031 0 0.94944 0 0.750417C0 0.551394 0.0790615 0.360522 0.219792 0.219792C0.360523 0.0790612 0.551394 0 0.750417 0C0.94944 0 1.14031 0.0790612 1.28104 0.219792L8.25042 7.1901L15.2198 0.219792C15.2895 0.150109 15.3722 0.0948337 15.4632 0.0571218C15.5543 0.0194098 15.6519 0 15.7504 0C15.849 0 15.9465 0.0194098 16.0376 0.0571218C16.1286 0.0948337 16.2114 0.150109 16.281 0.219792C16.3507 0.289474 16.406 0.3722 16.4437 0.463245C16.4814 0.554289 16.5008 0.651871 16.5008 0.750417C16.5008 0.848963 16.4814 0.946545 16.4437 1.03759C16.406 1.12863 16.3507 1.21136 16.281 1.28104Z"
      fill={isWhite ? "white" : "black"}
    />
  </svg>
);

const Navbar = function () {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    code: "EN",
    component: <FlagEN />,
  });

  // ✅ Server pe hamesha false (black) — client pe mount ke baad update
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    const white = WHITE_TEXT_ROUTES.some((route) =>
      route === "/" ? pathname === "/" : pathname.startsWith(route)
    );
    setIsWhite(white);
  }, [pathname]); // pathname change hone pe update hoga

  const languages = [
    { code: "EN", component: <FlagEN /> },
    { code: "KO", component: <FlagKO /> },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className={styles["header-section"]}>
      <div className={styles["header-section-wrapper"]}>

        {/* LEFT — Logo */}
        <div className={styles["header-section-left"]}>
          <Link
            href="/"
            className={`${styles["header-section-left-img"]} ${
              !isWhite ? styles["logo-black"] : ""
            }`}
          >
            <Image src="/images/logo.png" fill={true} alt="Logo" />
          </Link>
        </div>

        {/* CENTER — Nav Links */}
        <nav className={styles["header-section-center"]}>
          <ul className={styles["nav-links"]}>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={isActive(link.href) ? styles["active-li"] : ""}
              >
                <Link
                  href={link.href}
                  className={
                    isWhite
                      ? styles["nav-link-white"]
                      : styles["nav-link-black"]
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT — Language + Hamburger */}
        <div className={styles["header-section-right"]}>

          {/* Language Selector */}
          <div
            className={styles["lang-selector"]}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedLang.component}
            <span
              className={
                isWhite ? styles["lang-text-white"] : styles["lang-text-black"]
              }
            >
              {selectedLang.code}
            </span>
            <ArrowIcon isWhite={isWhite} />

            {isOpen && (
              <div className={styles["lang-dropdown"]}>
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={styles["lang-option"]}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsOpen(false);
                    }}
                  >
                    {lang.component}
                    <span>{lang.code}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <div
            className={`${styles["hamburger"]} ${
              isWhite ? styles["hamburger-white"] : styles["hamburger-black"]
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;