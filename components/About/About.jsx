import { Heart, Users, Flower2 } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.section}`} id="sobre">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className="eyebrow">Sobre Acropole</span>
            <h2>Descubre tu mejor versión, a tu ritmo.</h2>
            <p>
              Más que un studio, somos una comunidad. Nuestras clases están
              diseñadas para mujeres que buscan moverse, sentirse fuertes y
              reencontrarse consigo mismas. Aquí no se compite con nadie, se
              celebra cada paso.
            </p>
            <p>
              Trabajamos cuerpo, mente y emoción a través de Pole Dance, Pole
              Sport, funcionales y flexibilidad, en un ambiente seguro y
              cercano.
            </p>
          </div>

          <ul className={styles.points}>
            <li>
              <span className={`${styles.icon} ${styles.iconPink}`}>
                <Heart size={20} />
              </span>
              <div>
                <h3>Amor propio</h3>
                <p>
                  Reconectar con tu cuerpo desde el respeto, sin juicios ni
                  comparaciones.
                </p>
              </div>
            </li>
            <li>
              <span className={`${styles.icon} ${styles.iconCyan}`}>
                <Users size={20} />
              </span>
              <div>
                <h3>Comunidad de mujeres</h3>
                <p>
                  Un círculo donde apoyarse, aprender y crecer juntas con
                  sororidad real.
                </p>
              </div>
            </li>
            <li>
              <span className={`${styles.icon} ${styles.iconGreen}`}>
                <Flower2 size={20} />
              </span>
              <div>
                <h3>Bienestar integral</h3>
                <p>
                  Movimiento que cuida la postura, alivia el estrés y eleva la
                  energía.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
