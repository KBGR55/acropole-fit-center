"use client";

import { ArrowRight } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./Hero.module.css";

const RESERVA_URL =
  "https://reservaclase.com/acropolefitcenter/index.php?menu=clase&id_clase=7059&dia=0";

export default function Hero() {
  const t = useT();
  return (
    <section className={styles.hero} id="top">
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />
      <div className={styles.glowThree} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>
          {t.hero.titleA}
          <span className={styles.titleAccent}> {t.hero.titleB}</span>
        </h1>

        <p className={styles.lead}>{t.hero.lead}</p>

        <div className={styles.actions}>
          <a
            className={styles.primary}
            href={RESERVA_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.cta1}
            <ArrowRight size={18} />
          </a>
          <a className={styles.secondary} href="#disciplinas">
            {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
