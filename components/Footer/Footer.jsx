"use client";

import { Instagram, Music2, MapPin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.col}>
          <a href="#top" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true" />
            <span>Acropole Fit Center</span>
          </a>
          <p className={styles.tagline}>
            Studio para mujeres en Loja. Pole Dance, Pole Sport, funcionales y
            flexibilidad.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Sitio</h4>
          <ul>
            <li><a href="#sobre">Sobre nosotras</a></li>
            <li><a href="#disciplinas">Disciplinas</a></li>
            <li><a href="#beneficios">Beneficios</a></li>
            <li><a href="#planes">Planes</a></li>
            <li><a href="#horario">Horario</a></li>
            <li><a href="#historia">Historia</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Visítanos</h4>
          <p className={styles.address}>
            <MapPin size={14} /> 10 de Agosto, Centro · Loja 110150
          </p>
          <p className={styles.address}>
            <Mail size={14} />
            <a href="mailto:acropolefitcenterloja@gmail.com">
              acropolefitcenterloja@gmail.com
            </a>
          </p>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/acropolefitcenter/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@acropolefitcenter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <Music2 size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} Acropole Fit Center · Hecho con cariño en Loja.</p>
        </div>
      </div>
    </footer>
  );
}
