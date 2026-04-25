import { Quote, ExternalLink, Instagram } from "lucide-react";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <section className={`section section--alt ${styles.section}`} id="historia">
      <div className="container">
        <div className={styles.layout}>
          <aside className={styles.side}>
            <span className="eyebrow">Nuestra historia</span>
            <h2>De Venezuela a Loja: el renacer de Acropole.</h2>
            <p className={styles.intro}>
              Una historia de migración, reinvención y mujeres valientes.
              Detrás de cada clase hay un sueño que se sembró en 2014 y volvió
              a florecer en tierra ecuatoriana.
            </p>

            <a
              className={styles.founder}
              href="https://www.instagram.com/cristmarin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cristina Marín Peroza en Instagram"
            >
              <span className={styles.avatar} aria-hidden="true">
                CM
              </span>
              <div>
                <p className={styles.name}>Cristina Marín Peroza</p>
                <p className={styles.role}>
                  <Instagram size={12} />
                  Fundadora
                </p>
              </div>
            </a>

            <a
              className={styles.source}
              href="https://primerreporte.com/desde-venezuela-a-loja-el-renacer-de-acropole-fit-center-un-espacio-para-mujeres-valientes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer el artículo completo
              <ExternalLink size={14} />
            </a>
          </aside>

          <article className={styles.body}>
            <Quote className={styles.quoteIcon} size={32} aria-hidden="true" />

            <p>
              Cristina Marín no solo emprendió un viaje migratorio: trazó una
              ruta de reinvención que ha tocado la vida de muchas mujeres. Su
              historia comenzó en Venezuela en 2014, cuando fundó Acropole Fit
              Center pensando exclusivamente en el bienestar físico y emocional
              femenino.
            </p>

            <p>
              Lo que en sus inicios fue un espacio de entrenamiento, se
              transformó en un refugio de empoderamiento. Acropole nació con un
              propósito claro: ayudar a las mujeres a mejorar la relación
              consigo mismas, amar sus cuerpos y empoderarse desde lo físico,
              lo emocional y lo social.
            </p>

            <blockquote className={styles.quote}>
              &ldquo;No se trata solo de ejercicios, sino de conectar con tu
              esencia y reconstruirte desde el amor propio.&rdquo;
            </blockquote>

            <p>
              La pandemia marcó un duro revés y las puertas de la sede original
              en Venezuela se cerraron. En 2022, Cristina migró a Loja y
              decidió revivir Acropole con la misma pasión de siempre.
            </p>

            <blockquote className={styles.quote}>
              &ldquo;Fue como volver a sembrar una semilla en tierra fértil.
              Loja nos ha recibido con mucho cariño.&rdquo;
            </blockquote>

            <p>
              Hoy, Acropole es una comunidad donde el cuerpo no se juzga: se
              celebra. Mujeres de diferentes edades y contextos llegan al
              studio buscando moverse y se quedan por la sororidad y el amor
              propio que encuentran.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
