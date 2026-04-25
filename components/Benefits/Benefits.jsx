"use client";

import {
  Activity,
  Zap,
  Brain,
  Sparkles,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./Benefits.module.css";

const icons = [Activity, Zap, Brain, Sparkles, Heart, ShieldCheck];
const accents = ["pink", "cyan", "green"];

export default function Benefits() {
  const t = useT();
  return (
    <section className={`section ${styles.section}`} id="beneficios">
      <div className={`container ${styles.layout}`}>
        <aside className={styles.aside}>
          <span className="eyebrow">{t.benefits.eyebrow}</span>
          <h2>
            {t.benefits.titleA}
            <br />
            {t.benefits.titleB}
          </h2>
          <p>{t.benefits.intro}</p>
        </aside>

        <ol className={styles.list}>
          {t.benefits.items.map((b, i) => {
            const Icon = icons[i];
            const accent = accents[i % accents.length];
            return (
              <li key={i} className={styles.item} data-accent={accent}>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.icon}>
                  <Icon size={20} />
                </span>
                <div className={styles.copy}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
