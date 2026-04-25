import { Check, Sparkle } from "lucide-react";
import styles from "./Plans.module.css";

const WHATSAPP_NUMBER = "593983835505";

const buildWhatsAppLink = (plan) => {
  const message = `¡Hola! Me interesa el plan *${plan.name}* ($${plan.price}/mes). ¿Me pueden dar más información?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const plans = [
  {
    id: "beginner",
    name: "Beginner",
    price: "35",
    features: [
      "Una actividad a escoger",
      "8 clases mensuales",
      "Entrenamientos personalizados",
    ],
  },
  {
    id: "half-week",
    name: "Half Week",
    price: "45",
    featured: true,
    features: [
      "Tres actividades a escoger",
      "12 clases mensuales",
      "Entrenamientos personalizados",
      "Recetario saludable",
    ],
  },
  {
    id: "full",
    name: "Plan Full",
    price: "60",
    features: [
      "Cuatro actividades a escoger",
      "20 clases mensuales",
      "Entrenamientos personalizados",
      "Recetario saludable",
    ],
  },
];

export default function Plans() {
  return (
    <section className={`section ${styles.section}`} id="planes">
      <div className="container">
        <div className={`section-title ${styles.titleBlock}`}>
          <span className="eyebrow">Planes mensuales</span>
          <h2>Elige el ritmo que te acompaña.</h2>
          <p>
            Tres formas de sumarte. Sin contratos largos, con la libertad de
            cambiar cuando quieras.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((p) => (
            <article
              key={p.id}
              className={`${styles.plan} ${p.featured ? styles.featured : ""}`}
            >
              {p.featured && (
                <span className={styles.badge}>
                  <Sparkle size={12} />
                  Más elegido
                </span>
              )}

              <h3 className={styles.name}>{p.name}</h3>

              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>{p.price}</span>
                <span className={styles.period}>/mes</span>
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
                href={buildWhatsAppLink(p)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Empezar ahora
              </a>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          ¿Dudas sobre cuál te conviene? Escríbenos al{" "}
          <a href="https://wa.me/593983835505" target="_blank" rel="noopener noreferrer">
            +593 983 835 505
          </a>{" "}
          y te ayudamos.
        </p>
      </div>
    </section>
  );
}
