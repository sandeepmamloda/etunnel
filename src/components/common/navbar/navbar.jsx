"use client";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Company",            href: "/companyoverview" },
  { label: "Core Technology",    href: "/coretech/p2n2" },
  { label: "Biometric Products", href: "/products" },
  { label: "Solutions",          href: "/solutions" },
  { label: "News & Media",       href: "/news" },
];

/* ── Animation variants ── */
const headerVariants = {
  hidden:  { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const logoVariants = {
  hidden:  { scale: 0.75, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const navContainerVariants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
};

const navItemVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ── Component ── */
const Navbar = function () {
  return (
    <>
      <motion.header
        className={styles["header-section"]}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles["header-section-wrapper"]}>

          {/* LEFT — Logo */}
          <motion.div
            className={styles["header-section-left"]}
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={styles["header-section-left-img"]}>
              <Image
                className={styles["img"]}
                src="/images/logo.png"
                fill={true}
                alt="Logo"
              />
            </div>
          </motion.div>

          {/* CENTER — Nav Links */}
          <nav className={styles["header-section-center"]}>
            <motion.ul
              className={styles["nav-links"]}
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={navItemVariants}>
                  <Link href={link.href} className={styles["nav-link"]}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* RIGHT — Language + Hamburger */}
          <motion.div
            className={styles["header-section-right"]}
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Language Selector */}
            <div className={styles["lang-selector"]}>
              <Image
                src="/images/flag-us.png"
                width={20}
                height={20}
                alt="EN"
                className={styles["flag-icon"]}
              />
              <span className={styles["lang-text"]}>EN</span>
              <span className={styles["lang-arrow"]}>∨</span>
            </div>

            {/* Hamburger */}
            <div className={styles["hamburger"]}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;