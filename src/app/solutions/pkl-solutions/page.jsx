"use client"

import Cqframework from "@/components/solutions/pkl-solutions/cqframework/cqframework";
import Cqkms from "@/components/solutions/pkl-solutions/cqkms/cqkms";
import Heropk from "@/components/solutions/pkl-solutions/heropk/heropk";
import Safelcert from "@/components/solutions/pkl-solutions/safelcert/safelcert";
import Tagsbar from "@/components/solutions/pkl-solutions/tagsbar/tagsbar";
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
      <Heropk />
      <Tagsbar />

      <div
        ref={containerRef}
        className={styles["about-flex-wrapper"]}
      >
        <div className={styles["stack-card"]}>
          <Cqkms />
        </div>
        <div className={styles["stack-card"]}>
          <Safelcert />
        </div>
        <div className={styles["stack-card"]}>
          <Cqframework/>
        </div>
      </div>
    </>
  )
}

export default Biometrisolutions;