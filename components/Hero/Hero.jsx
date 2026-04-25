import { ArrowRight, MapPin } from "lucide-react";
import styles from "./Hero.module.css";

const RESERVA_URL =
  "https://reservaclase.com/acropolefitcenter/index.php?menu=clase&id_clase=7059&dia=0";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.glowOne} aria-hidden="true" />
      <div className={styles.glowTwo} aria-hidden="true" />
      <div className={styles.glowThree} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>
          Mueve tu cuerpo,
          <span className={styles.titleAccent}> despierta tu fuerza.</span>
        </h1>

        <p className={styles.lead}>
          Pole Dance, Pole Sport, entrenamiento funcional y flexibilidad. Un
          espacio donde el cuerpo no se juzga, se celebra.
        </p>

        <div className={styles.actions}>
          <a
            className={styles.primary}
            href={RESERVA_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar mi clase
            <ArrowRight size={18} />
          </a>
          <a className={styles.secondary} href="#disciplinas">
            Conocer disciplinas
          </a>
        </div>

        <a
          className={styles.meta}
          href="https://share.google/nMFdpZGmNPa151lxY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={16} />
          <span>10 de Agosto, Centro · Loja, Ecuador</span>
        </a>
      </div>
    </section>
  );
}
