"use client";

import { Heart, Users, Flower2 } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./About.module.css";

export default function About() {
  const t = useT();
  return (
    <section className={`section ${styles.section}`} id="sobre">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2>{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <ul className={styles.points}>
            <li>
              <span className={`${styles.icon} ${styles.iconPink}`}>
                <Heart size={20} />
              </span>
              <div>
                <h3>{t.about.points.love.title}</h3>
                <p>{t.about.points.love.text}</p>
              </div>
            </li>
            <li>
              <span className={`${styles.icon} ${styles.iconCyan}`}>
                <Users size={20} />
              </span>
              <div>
                <h3>{t.about.points.community.title}</h3>
                <p>{t.about.points.community.text}</p>
              </div>
            </li>
            <li>
              <span className={`${styles.icon} ${styles.iconGreen}`}>
                <Flower2 size={20} />
              </span>
              <div>
                <h3>{t.about.points.wellness.title}</h3>
                <p>{t.about.points.wellness.text}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
