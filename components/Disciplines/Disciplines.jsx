"use client";

import { Flame, Trophy, Dumbbell, Feather, BadgeCheck } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./Disciplines.module.css";

const meta = [
  { id: "poleDance", icon: Flame, accent: "pink" },
  { id: "poleSport", icon: Trophy, accent: "cyan" },
  { id: "funcional", icon: Dumbbell, accent: "green" },
  { id: "flex", icon: Feather, accent: "pink" },
];

export default function Disciplines() {
  const t = useT();
  return (
    <section
      className={`section section--alt ${styles.section}`}
      id="disciplinas"
    >
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">{t.disciplines.eyebrow}</span>
          <h2>{t.disciplines.title}</h2>
          <p>{t.disciplines.intro}</p>
        </div>

        <div className={styles.list} role="list">
          {meta.map((m, i) => {
            const Icon = m.icon;
            const d = t.disciplines.items[m.id];
            return (
              <article
                key={m.id}
                className={styles.row}
                data-accent={m.accent}
                role="listitem"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={styles.head}>
                  <span className={styles.icon}>
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3>{d.name}</h3>
                    <p className={styles.short}>{d.short}</p>
                  </div>
                </div>

                <p className={styles.body}>{d.description}</p>

                <p className={styles.sport}>
                  <BadgeCheck size={16} />
                  <span>{d.sport}</span>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
