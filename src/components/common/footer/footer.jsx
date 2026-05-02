"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./footer.module.css";

gsap.registerPlugin(ScrollTrigger);

const TOP_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/coretech/p2n2", label: "Core Technology" },
  { href: "/biometric-products/products", label: "Biometric Products" },
  { href: "/solutions/solutions", label: "Our Solutions" },
];

const Footer = function () {
  const pathname     = usePathname();
  const wrapperRef   = useRef(null);
  const topLinksRef  = useRef([]);
  const leftRef      = useRef(null);
  const logoRef      = useRef(null);
  const rightRef     = useRef(null);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1160;

    // Immediately hide everything before paint
    gsap.set(topLinksRef.current, { opacity: 0, y: 60 });
    gsap.set(leftRef.current,      { opacity: 0, x: isMobile ? 0 : -60, y: isMobile ? 40 : 0 });
    gsap.set(logoRef.current,      { opacity: 0, scale: 0.82, filter: "blur(6px)" });
    gsap.set(rightRef.current,     { opacity: 0, x: isMobile ? 0 : 60,  y: isMobile ? 40 : 0 });
    gsap.set(bottomBarRef.current, { opacity: 0, y: 28 });

    const ctx = gsap.context(() => {

      // ── Top links: slow staggered rise ──
      gsap.to(topLinksRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // ── Left block ──
      gsap.to(leftRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 95%",
          once: true,
        },
      });

      // ── Logo: slow unblur + scale ──
      gsap.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 95%",
          once: true,
        },
      });

      // ── Right block ──
      gsap.to(rightRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 95%",
          once: true,
        },
      });

      // ── Bottom bar ──
      gsap.to(bottomBarRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: bottomBarRef.current,
          start: "top 100%",
          once: true,
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <section ref={wrapperRef} className={styles["footer-wrapper"]}>

      {/* TOP */}
      <div className={styles["footer-top"]}>
        {TOP_LINKS.map((item, i) => (
          <Link
            key={item.href}
            ref={(el) => (topLinksRef.current[i] = el)}
            href={item.href}
            className={styles["footer-top-links"]}
          >
            <span>{item.label}</span>
            <span>↗</span>
          </Link>
        ))}
      </div>

      {/* BOTTOM */}
      <div className={styles["footer-bottom"]}>
        <div className={styles["footer-content"]}>

          {/* LEFT */}
          <div ref={leftRef} className={styles["footer-left"]}>
            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>CEO</span>
              <span className={styles["footer-left-value"]}>Youngkuk Kim, Sangjoon Lee</span>
            </div>
            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>Head Office</span>
              <a
                href="https://maps.google.com/?q=#1011-1015,+Building+C,+H+Business+Park,+26+Beopwon-ro+9-gil,+Songpa-gu,+Seoul+05836,+South+Korea"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer-left-value"]}
              >
                #1011-1015, Building C, H Business Park, 26 Beopwon-ro 9-gil, Songpa-gu, Seoul 05836, South Korea
              </a>
            </div>
            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>Business Registration Number</span>
              <a
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2708702480"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer-left-value"]}
              >
                270-87-02480
              </a>
            </div>
            <div className={styles["footer-left-item"]}>
              <span className={styles["footer-left-label"]}>E-commerce Registration</span>
              <span className={styles["footer-left-value"]}>2023-SeoulSongpa-1127</span>
            </div>
          </div>

          {/* CENTER (LOGO) */}
          <div ref={logoRef} className={styles["footer-center"]}>
            <Link href="/">
              <Image
                src="/images/footer/footer-logo.png"
                alt="Footer Logo"
                width={300}
                height={50}
                priority
                className={styles["footer-logo"]}
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div ref={rightRef} className={styles["footer-right"]}>
            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Telephone</span>
              <a href="tel:18991959" className={styles["footer-right-value"]}>+82 1899 1959</a>
            </div>
            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Customer Support</span>
              <a href="tel:16681873" className={styles["footer-right-value"]}>+82 1668 1873</a>
            </div>
            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Fax</span>
              <a href="tel:+82262818777" className={styles["footer-right-value"]}>+82 2 6281 8777</a>
            </div>
            <div className={styles["footer-right-item"]}>
              <span className={styles["footer-right-label"]}>Sales Inquiries</span>
              <a href="mailto:sales@etunnel.net" className={styles["footer-right-value"]}>sales@etunnel.net</a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div ref={bottomBarRef} className={styles["footer-bar"]}>
          <span>Copyright © ETUNNEL All rights reserved.</span>
          <div>
            <Link href="/privacy-policy"><span>Privacy Policy</span></Link>
            <Link href="/contact"><span>Customer Inquiry</span></Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;