import { Info, ArrowUpRight } from "lucide-react";
import styles from "./Schedule.module.css";

const RESERVA_URL =
  "https://reservaclase.com/acropolefitcenter/index.php?menu=clase&id_clase=7059&dia=0";

const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

const slots = [
  {
    time: "09:45",
    cells: {
      Lun: [{ name: "Pole Sport", type: "poleSport" }],
      Mar: [{ name: "Funcional", type: "funcional" }],
      "Mié": [{ name: "Pole Sport", type: "poleSport" }],
      Jue: [{ name: "Funcional", type: "funcional" }],
      Vie: [{ name: "Funcional", type: "funcional" }],
      "Sáb": [{ name: "Pole Sport", type: "poleSport", at: "10:00" }],
    },
  },
  {
    time: "10:30",
    cells: {
      Vie: [{ name: "Pole Sport", type: "poleSport" }],
      "Sáb": [{ name: "Flexibilidad", type: "flex", at: "11:00" }],
    },
  },
  {
    time: "18:15",
    cells: {
      Lun: [{ name: "Pole Sport", type: "poleSport" }],
      Mar: [{ name: "Pole Sport", type: "poleSport" }],
      "Mié": [
        { name: "Pole Flow", type: "poleFlow" },
        { name: "Funcional", type: "funcional" },
      ],
      Jue: [{ name: "Pole Sport", type: "poleSport" }],
      Vie: [
        { name: "Pole Flow", type: "poleFlow" },
        { name: "Funcional", type: "funcional" },
      ],
    },
  },
  {
    time: "19:15",
    cells: {
      Lun: [{ name: "Pole Sport", type: "poleSport" }],
      Mar: [
        { name: "Pole Sport", type: "poleSport" },
        { name: "Flexibilidad", type: "flex" },
      ],
      Jue: [
        { name: "Pole Sport", type: "poleSport" },
        { name: "Flexibilidad", type: "flex" },
      ],
    },
  },
];

const legend = [
  { label: "Pole Sport", type: "poleSport" },
  { label: "Pole Flow", type: "poleFlow" },
  { label: "Funcional", type: "funcional" },
  { label: "Flexibilidad", type: "flex" },
];

export default function Schedule() {
  return (
    <section className={`section section--alt ${styles.section}`} id="horario">
      <div className="container">
        <div className={`section-title ${styles.titleBlock}`}>
          <span className="eyebrow">Horario</span>
          <h2>Encuentra tu hora ideal.</h2>
          <p>
            Clases de mañana y de tarde-noche, de lunes a sábado. Elegí el
            horario que mejor se acomode a tu día.
          </p>
        </div>

        <div className={styles.legend}>
          {legend.map((l) => (
            <span key={l.type} className={styles.legendItem}>
              <span
                className={styles.dot}
                data-type={l.type}
                aria-hidden="true"
              />
              {l.label}
            </span>
          ))}
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.timeHead} aria-label="Hora" />
                {days.map((d) => (
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
                  {days.map((d) => {
                    const items = slot.cells[d];
                    return (
                      <td key={d} className={styles.cell}>
                        {items
                          ? items.map((c, i) => (
                              <span
                                key={i}
                                className={styles.class}
                                data-type={c.type}
                              >
                                {c.at && (
                                  <span className={styles.classTime}>
                                    {c.at}
                                  </span>
                                )}
                                {c.name}
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
              Los horarios pueden variar según la disponibilidad de las
              instructoras. Antes de venir, revisa la disponibilidad real en
              nuestra app de reservas. En caso de no tener acceso a la web,
              escribe al{" "}
              <a
                className={styles.noticePhone}
                href="https://wa.me/593983835505"
                target="_blank"
                rel="noopener noreferrer"
              >
                +593 98 383 5505
              </a>
              .
            </p>
            <a
              className={styles.noticeLink}
              href={RESERVA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Revisar disponibilidad
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
