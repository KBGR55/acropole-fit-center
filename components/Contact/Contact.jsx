import {
  MapPin,
  Phone,
  Instagram,
  CalendarCheck,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import styles from "./Contact.module.css";

const RESERVA_URL =
  "https://reservaclase.com/acropolefitcenter/index.php?menu=clase&id_clase=7059&dia=0";

export default function Contact() {
  return (
    <section className={`section ${styles.section}`} id="contacto">
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.intro}>
            <span className="eyebrow">Visítanos</span>
            <h2>Tu primera clase te está esperando.</h2>
            <p>
              Acércate o escríbenos. Si ya eres alumna, reserva directo en la
              app. Si vas a empezar, cuéntanos por Instagram y te orientamos.
            </p>
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
                <h3>Reservar clase</h3>
                <p>App para alumnas activas</p>
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
                <h3>Dónde estamos</h3>
                <p>10 de Agosto, Centro</p>
                <p>Loja 110150, Ecuador</p>
              </div>
            </div>

            <a
              className={styles.tile}
              href="tel:+593983835505"
            >
              <span
                className={`${styles.tileIcon} ${styles.iconGreen}`}
                aria-hidden="true"
              >
                <Phone size={22} />
              </span>
              <div>
                <h3>Llámanos</h3>
                <p>+593 983 835 505</p>
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
                <h3>Instagram</h3>
                <p>@acropolefitcenter</p>
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
                <h3>Escríbenos</h3>
                <p>acropolefitcenterloja@gmail.com</p>
              </div>
              <ArrowUpRight className={styles.arrow} size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
