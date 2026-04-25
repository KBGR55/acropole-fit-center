import {
  Activity,
  Zap,
  Brain,
  Sparkles,
  Heart,
  ShieldCheck,
} from "lucide-react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    icon: Activity,
    title: "Más movilidad",
    text: "Ganas rango articular, te mueves con soltura y previenes lesiones en tu día a día.",
  },
  {
    icon: Zap,
    title: "Mejor rendimiento",
    text: "Más agilidad, potencia y coordinación, dentro y fuera del studio.",
  },
  {
    icon: Brain,
    title: "Mente en calma",
    text: "Bajan el estrés y la ansiedad. Te conectas con tu respiración y tu presente.",
  },
  {
    icon: Sparkles,
    title: "Postura y estética",
    text: "Alineación más alta, hombros abiertos. Te sentís más segura en tu propia piel.",
  },
  {
    icon: Heart,
    title: "Salud cardiovascular",
    text: "Corazón más fuerte, mejor circulación y mayor energía durante el día.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza real",
    text: "Cada figura nueva es un recordatorio de todo lo que tu cuerpo es capaz.",
  },
];

const accents = ["pink", "cyan", "green"];

export default function Benefits() {
  return (
    <section className={`section ${styles.section}`} id="beneficios">
      <div className={`container ${styles.layout}`}>
        <aside className={styles.aside}>
          <span className="eyebrow">Beneficios</span>
          <h2>
            Cuerpo fuerte,
            <br />
            mente liviana.
          </h2>
          <p>
            La ciencia del ejercicio respalda lo que aquí ya sabemos: moverte
            con regularidad cambia cómo te sientes — por dentro y por fuera.
          </p>
        </aside>

        <ol className={styles.list}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            const accent = accents[i % accents.length];
            return (
              <li key={b.title} className={styles.item} data-accent={accent}>
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
