"use client";
import { useEffect, useRef } from "react";
import styles from "./contact.module.css";

const Contactform = function () {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const scene = document.getElementById("scene");
    const wrapper = wrapperRef.current;
    let tX = 0, tY = 0, cX = 0, cY = 0;
    let rafId;

    const onMouseMove = (e) => {
      const r = wrapper.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      tX = x * 10;
      tY = -y * 8;
    };

    const onMouseLeave = () => {
      tX = 0;
      tY = 0;
    };

    function tick() {
      cX += (tX - cX) * 0.07;
      cY += (tY - cY) * 0.07;
      wrapper.style.transform = `rotateY(${cX}deg) rotateX(${cY}deg)`;
      rafId = requestAnimationFrame(tick);
    }

    scene.addEventListener("mousemove", onMouseMove);
    scene.addEventListener("mouseleave", onMouseLeave);
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      scene.removeEventListener("mousemove", onMouseMove);
      scene.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const handleSubmit = () => {
    const btn = document.getElementById("submitBtn");
    const txt = document.getElementById("btnText");
    const ok = document.getElementById("successMsg");
    if (!btn || !txt || !ok) return;
    txt.textContent = "Sending...";
    btn.disabled = true;
    setTimeout(() => {
      btn.style.display = "none";
      ok.style.display = "block";
    }, 1000);
  };

  return (
    <div className={styles.section} id="scene">
      <div className={styles.container}>

        {/* ── LEFT: ETUNNEL content ── */}
        <div className={styles.contentSide}>
          <div className={styles.etag}>
            <span className={styles.etagDot} />
            <span className={styles.etagLabel}>ETUNNEL Security</span>
          </div>

          <div className={styles.contentTitle}>
            Biometric systems built to{" "}
            <span>eliminate fraud</span>
          </div>

          <p className={styles.contentBody}>
            ETUNNEL&apos;s biometric systems are designed to prevent{" "}
            <strong>impersonation and fraud</strong>. Technologies such as{" "}
            <strong>finger vein recognition</strong> require a live human
            presence, making spoofing, duplication, or replay attacks
            extremely difficult.
          </p>

          <div className={styles.features}>
            <div className={styles.feat}>
              <div className={styles.featIcon}>
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                  <path d="M8 2C5.2 2 3 4.2 3 7c0 2 1.1 3.7 2.7 4.6L5 14h6l-.7-2.4C11.9 10.7 13 9 13 7c0-2.8-2.2-5-5-5z" stroke="#e06010" strokeWidth="1.2" />
                  <path d="M6 7c0-1.1.9-2 2-2s2 .9 2 2" stroke="#e06010" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className={styles.featText}>
                <strong>Finger Vein Recognition</strong>
                Reads the unique vein pattern inside your finger — impossible to replicate externally.
              </div>
            </div>

            <div className={styles.feat}>
              <div className={styles.featIcon}>
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                  <circle cx="8" cy="8" r="5" stroke="#e06010" strokeWidth="1.2" />
                  <path d="M8 5v3l2 2" stroke="#e06010" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className={styles.featText}>
                <strong>Live Presence Detection</strong>
                Only a live human can authenticate — replay and spoofing attacks are blocked at hardware level.
              </div>
            </div>

            <div className={styles.feat}>
              <div className={styles.featIcon}>
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                  <rect x="3" y="6" width="10" height="8" rx="2" stroke="#e06010" strokeWidth="1.2" />
                  <path d="M5 6V5a3 3 0 016 0v1" stroke="#e06010" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className={styles.featText}>
                <strong>Anti-Spoofing Architecture</strong>
                Duplication and replay attacks are structurally prevented by the biometric capture pipeline.
              </div>
            </div>
          </div>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <div className={styles.statNum}>99.9%</div>
              <div className={styles.statLbl}>Accuracy rate</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>0%</div>
              <div className={styles.statLbl}>Spoof success rate</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>&lt;1s</div>
              <div className={styles.statLbl}>Auth speed</div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form card ── */}
        <div className={styles.formSide}>
          <div className={styles.cardWrapper} ref={wrapperRef}>
            <div className={styles.card}>
              <div className={styles.chip}>
                <span className={styles.chipDot} />
                We&apos;re listening
              </div>
              <h3 className={styles.cardTitle}>
                Contact <em>Us</em>
              </h3>
              <p className={styles.cardSub}>We&apos;ll get back to you within 24 hours.</p>
              <div className={styles.divider} />

              <div className={styles.row2}>
                <div className={styles.fg}>
                  <label className={styles.label}>First Name</label>
                  <input className={styles.input} type="text" placeholder="Rahul" />
                </div>
                <div className={styles.fg}>
                  <label className={styles.label}>Last Name</label>
                  <input className={styles.input} type="text" placeholder="Sharma" />
                </div>
              </div>

              <div className={styles.fg}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" placeholder="rahul@company.com" />
              </div>
              <div className={styles.fg}>
                <label className={styles.label}>Company</label>
                <input className={styles.input} type="text" placeholder="Your organization" />
              </div>
              <div className={styles.fg}>
                <label className={styles.label}>Inquiry Type</label>
                <select className={styles.select}>
                  <option value="">Select...</option>
                  <option>Product Demo — ST-100V</option>
                  <option>Technical Integration</option>
                  <option>Partnership &amp; Reseller</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className={styles.fg}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} placeholder="Describe your requirements..." />
              </div>

              <button className={styles.btn} id="submitBtn" onClick={handleSubmit}>
                <span id="btnText">Send Message →</span>
              </button>
              <p className={styles.success} id="successMsg">
                Message received — we&apos;ll be in touch shortly.
              </p>

              <div className={styles.footerRow}>
                <span className={styles.badge}>🔒 Secure</span>
                <span className={styles.badge}>🛡 Confidential</span>
                <span className={styles.badge}>✉ No Spam</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contactform;