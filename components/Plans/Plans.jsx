"use client";

import { Check, Sparkle } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./Plans.module.css";

const WHATSAPP_NUMBER = "593983835505";
const prices = { beginner: "35", "half-week": "45", full: "60" };
const featuredId = "half-week";

export default function Plans() {
  const t = useT();

  const buildLink = (plan) => {
    const message = t.plans.waMessage(plan.name, prices[plan.id]);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className={`section ${styles.section}`} id="planes">
      <div className="container">
        <div className={`section-title ${styles.titleBlock}`}>
          <span className="eyebrow">{t.plans.eyebrow}</span>
          <h2>{t.plans.title}</h2>
          <p>{t.plans.intro}</p>
        </div>

        <div className={styles.grid}>
          {t.plans.items.map((p) => {
            const featured = p.id === featuredId;
            return (
              <article
                key={p.id}
                className={`${styles.plan} ${featured ? styles.featured : ""}`}
              >
                {featured && (
                  <span className={styles.badge}>
                    <Sparkle size={12} />
                    {t.plans.badge}
                  </span>
                )}

                <h3 className={styles.name}>{p.name}</h3>

                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.amount}>{prices[p.id]}</span>
                  <span className={styles.period}>{t.plans.period}</span>
                </div>

                <ul className={styles.features}>
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check size={16} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className={styles.cta}
                  href={buildLink(p)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.plans.cta}
                </a>
              </article>
            );
          })}
        </div>

        <p className={styles.note}>
          {t.plans.note}{" "}
          <a
            href="https://wa.me/593983835505"
            target="_blank"
            rel="noopener noreferrer"
          >
            +593 983 835 505
          </a>{" "}
          {t.plans.noteEnd}
        </p>
      </div>
    </section>
  );
}
