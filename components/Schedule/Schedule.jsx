"use client";

import { Info, ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./Schedule.module.css";

const RESERVA_URL =
  "https://reservaclase.com/acropolefitcenter/index.php?menu=clase&id_clase=7059&dia=0";

const slots = [
  {
    time: "09:45",
    cells: {
      0: [{ key: "poleSport" }],
      1: [{ key: "funcional" }],
      2: [{ key: "poleSport" }],
      3: [{ key: "funcional" }],
      4: [{ key: "funcional" }],
      5: [{ key: "poleSport", at: "10:00" }],
    },
  },
  {
    time: "10:30",
    cells: {
      4: [{ key: "poleSport" }],
      5: [{ key: "flex", at: "11:00" }],
    },
  },
  {
    time: "18:15",
    cells: {
      0: [{ key: "poleSport" }],
      1: [{ key: "poleSport" }],
      2: [{ key: "poleFlow" }, { key: "funcional" }],
      3: [{ key: "poleSport" }],
      4: [{ key: "poleFlow" }, { key: "funcional" }],
    },
  },
  {
    time: "19:15",
    cells: {
      0: [{ key: "poleSport" }],
      1: [{ key: "poleSport" }, { key: "flex" }],
      3: [{ key: "poleSport" }, { key: "flex" }],
    },
  },
];

const legendOrder = ["poleSport", "poleFlow", "funcional", "flex"];

export default function Schedule() {
  const t = useT();
  return (
    <section className={`section section--alt ${styles.section}`} id="horario">
      <div className="container">
        <div className={`section-title ${styles.titleBlock}`}>
          <span className="eyebrow">{t.schedule.eyebrow}</span>
          <h2>{t.schedule.title}</h2>
          <p>{t.schedule.intro}</p>
        </div>

        <div className={styles.legend}>
          {legendOrder.map((k) => (
            <span key={k} className={styles.legendItem}>
              <span className={styles.dot} data-type={k} aria-hidden="true" />
              {t.schedule.legend[k]}
            </span>
          ))}
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.timeHead} aria-label="Hora" />
                {t.schedule.days.map((d) => (
                  <th key={d} className={styles.dayHead}>
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slots.map((slot) => (
                <tr key={slot.time}>
                  <th className={styles.timeCell} scope="row">
                    {slot.time}
                  </th>
                  {t.schedule.days.map((d, dayIndex) => {
                    const items = slot.cells[dayIndex];
                    return (
                      <td key={d} className={styles.cell}>
                        {items
                          ? items.map((c, i) => (
                              <span
                                key={i}
                                className={styles.class}
                                data-type={c.key}
                              >
                                {c.at && (
                                  <span className={styles.classTime}>
                                    {c.at}
                                  </span>
                                )}
                                {t.schedule.legend[c.key]}
                              </span>
                            ))
                          : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.notice}>
          <span className={styles.noticeIcon} aria-hidden="true">
            <Info size={18} />
          </span>
          <div>
            <p>
              {t.schedule.notice.before}{" "}
              <a
                className={styles.noticePhone}
                href="https://wa.me/593983835505"
                target="_blank"
                rel="noopener noreferrer"
              >
                +593 98 383 5505
              </a>
              {t.schedule.notice.after}
            </p>
            <a
              className={styles.noticeLink}
              href={RESERVA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.schedule.notice.cta}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
