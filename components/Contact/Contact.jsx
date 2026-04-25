"use client";

import {
  MapPin,
  Phone,
  Instagram,
  CalendarCheck,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./Contact.module.css";

const RESERVA_URL =
  "https://reservaclase.com/acropolefitcenter/index.php?menu=clase&id_clase=7059&dia=0";

export default function Contact() {
  const t = useT();
  return (
    <section className={`section ${styles.section}`} id="contacto">
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.intro}</p>
          </div>

          <div className={styles.grid}>
            <a
              className={`${styles.tile} ${styles.tilePrimary}`}
              href={RESERVA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.tileIcon}>
                <CalendarCheck size={22} />
              </span>
              <div>
                <h3>{t.contact.reserve.title}</h3>
                <p>{t.contact.reserve.subtitle}</p>
              </div>
              <ArrowUpRight className={styles.arrow} size={18} />
            </a>

            <div className={styles.tile}>
              <span
                className={`${styles.tileIcon} ${styles.iconCyan}`}
                aria-hidden="true"
              >
                <MapPin size={22} />
              </span>
              <div>
                <h3>{t.contact.location.title}</h3>
                <p>{t.contact.location.line1}</p>
                <p>{t.contact.location.line2}</p>
              </div>
            </div>

            <a className={styles.tile} href="tel:+593983835505">
              <span
                className={`${styles.tileIcon} ${styles.iconGreen}`}
                aria-hidden="true"
              >
                <Phone size={22} />
              </span>
              <div>
                <h3>{t.contact.phone.title}</h3>
                <p>{t.contact.phone.subtitle}</p>
              </div>
              <ArrowUpRight className={styles.arrow} size={18} />
            </a>

            <a
              className={styles.tile}
              href="https://www.instagram.com/acropolefitcenter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className={`${styles.tileIcon} ${styles.iconPink}`}
                aria-hidden="true"
              >
                <Instagram size={22} />
              </span>
              <div>
                <h3>{t.contact.instagram.title}</h3>
                <p>{t.contact.instagram.subtitle}</p>
              </div>
              <ArrowUpRight className={styles.arrow} size={18} />
            </a>

            <a
              className={`${styles.tile} ${styles.tileWide}`}
              href="mailto:acropolefitcenterloja@gmail.com"
            >
              <span
                className={`${styles.tileIcon} ${styles.iconCyan}`}
                aria-hidden="true"
              >
                <Mail size={22} />
              </span>
              <div>
                <h3>{t.contact.email.title}</h3>
                <p>{t.contact.email.subtitle}</p>
              </div>
              <ArrowUpRight className={styles.arrow} size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
