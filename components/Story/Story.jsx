"use client";

import { Quote, ExternalLink, Instagram } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./Story.module.css";

export default function Story() {
  const t = useT();
  return (
    <section className={`section section--alt ${styles.section}`} id="historia">
      <div className="container">
        <div className={styles.layout}>
          <aside className={styles.side}>
            <span className="eyebrow">{t.story.eyebrow}</span>
            <h2>{t.story.title}</h2>
            <p className={styles.intro}>{t.story.intro}</p>

            <a
              className={styles.founder}
              href="https://www.instagram.com/cristmarin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.story.founder}
            >
              <span className={styles.avatar} aria-hidden="true">
                CM
              </span>
              <div>
                <p className={styles.name}>{t.story.founder}</p>
                <p className={styles.role}>
                  <Instagram size={12} />
                  {t.story.role}
                </p>
              </div>
            </a>

            <a
              className={styles.source}
              href="https://primerreporte.com/desde-venezuela-a-loja-el-renacer-de-acropole-fit-center-un-espacio-para-mujeres-valientes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.story.source}
              <ExternalLink size={14} />
            </a>
          </aside>

          <article className={styles.body}>
            <Quote className={styles.quoteIcon} size={32} aria-hidden="true" />

            <p>{t.story.p1}</p>
            <p>{t.story.p2}</p>

            <blockquote className={styles.quote}>
              &ldquo;{t.story.quote1}&rdquo;
            </blockquote>

            <p>{t.story.p3}</p>

            <blockquote className={styles.quote}>
              &ldquo;{t.story.quote2}&rdquo;
            </blockquote>

            <p>{t.story.p4}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
