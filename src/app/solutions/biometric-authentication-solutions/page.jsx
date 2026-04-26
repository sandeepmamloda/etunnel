"use client"

import Gknotwallet from "@/components/solutions/biometric-authentication-solutions/gknotwallet/gknotwallet";
import Herobiometric from "@/components/solutions/biometric-authentication-solutions/herobiometric/herobiometric";
import Idverificationsolutions from "@/components/solutions/biometric-authentication-solutions/idverificationsolutions/idverificationsolutions";
import Pclogin from "@/components/solutions/biometric-authentication-solutions/pclogin/pclogin";
import Smartidproject from "@/components/solutions/biometric-authentication-solutions/smartidproject/smartidproject";
import Tagsbar from "@/components/solutions/solutions/tagsbar/tagsbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger)

const Biometrisolutions = function () {
  const containerRef = useRef(null)

  useEffect(() => {
    const cards = gsap.utils.toArray(
      containerRef.current.querySelectorAll(`.${styles["stack-card"]}`)
    )

    cards.forEach((card, i) => {
      if (i === 0) return

      gsap.to(cards[i - 1], {
        scale: 0.85,
        y: "-5vh",
        borderRadius: "2vw",
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 20%",
          scrub: 1.5,
        },
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <>
      <Herobiometric />
      <Tagsbar />

      <div
        ref={containerRef}
        className={styles["about-flex-wrapper"]}
      >
        <div className={styles["stack-card"]}>
          <Smartidproject />
        </div>
        <div className={styles["stack-card"]}>
          <Pclogin />
        </div>
        <div className={styles["stack-card"]}>
            <Idverificationsolutions/>
        </div>
        <div className={styles["stack-card"]}>
            <Gknotwallet/>
        </div>
      </div>
    </>
  )
}

export default Biometrisolutions;