"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Heroabout from "@/components/about/heroabout/heroabout"
import Tagsbar from "@/components/about/tagsbar/tagsbar"
import Companyoverview from "@/components/about/companyoverview/companyoverview"
import Companyhistory from "@/components/about/companyhistory/companyhistory"
import Familysite from "@/components/about/familysite/familysite"
import styles from "./page.module.css"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
  const cards = gsap.utils.toArray(
    containerRef.current.querySelectorAll(`.${styles["stack-card"]}`)
  )

  cards.forEach((card, i) => {
    if (i === 0) return

    gsap.to(cards[i - 1], {
      scale: 0.85,
      y: "0",
      borderRadius: "2vw",
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "top top",
        scrub: 1.5,
      },
    })
  })

  return () => ScrollTrigger.getAll().forEach(t => t.kill())
}, [])

  return (
    <>
      <Heroabout />
      <Tagsbar />

      <div
        ref={containerRef}
        className={styles["about-flex-wrapper"]}
      >
        <div className={styles["stack-card"]}>
          <Companyoverview />
        </div>
        <div className={styles["stack-card"]}>
          <Companyhistory />
        </div>
        <div className={styles["stack-card"]}>
          <Familysite />
        </div>
      </div>
    </>
  )
}

export default About;