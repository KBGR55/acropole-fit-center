"use client";

import Image from "next/image";
import { Instagram, Music2, MapPin, Mail } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.col}>
          <a href="#top" className={styles.brand} aria-label="Acropole Fit Center">
            <Image
              src="/logos/logo.png"
              alt="Acropole Fit Center"
              width={3300}
              height={1980}
              className={styles.brandLogo}
            />
          </a>
          <p className={styles.tagline}>{t.footer.tagline}</p>
        </div>

        <div className={styles.col}>
          <h4>{t.footer.site}</h4>
          <ul>
            <li><a href="#sobre">{t.footer.links.sobre}</a></li>
            <li><a href="#disciplinas">{t.footer.links.disciplinas}</a></li>
            <li><a href="#beneficios">{t.footer.links.beneficios}</a></li>
            <li><a href="#planes">{t.footer.links.planes}</a></li>
            <li><a href="#horario">{t.footer.links.horario}</a></li>
            <li><a href="#historia">{t.footer.links.historia}</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>{t.footer.visit}</h4>
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
          <p>© {year} Acropole Fit Center · {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
