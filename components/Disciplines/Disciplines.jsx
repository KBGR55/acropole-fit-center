import { Flame, Trophy, Dumbbell, Feather, BadgeCheck } from "lucide-react";
import styles from "./Disciplines.module.css";

const disciplines = [
  {
    id: "pole-dance",
    name: "Pole Dance",
    icon: Flame,
    accent: "pink",
    short: "Fuerza, expresión y feminidad en movimiento.",
    description:
      "Una disciplina artística y atlética sobre barra que combina coreografía, técnica y musicalidad. Trabaja todo el cuerpo: brazos, espalda, abdomen y piernas; al tiempo que invita a explorar tu lenguaje corporal.",
    sport:
      "Reconocido como deporte por la International Pole Sports Federation, con federaciones nacionales y campeonatos en más de 40 países.",
  },
  {
    id: "pole-sport",
    name: "Pole Sport",
    icon: Trophy,
    accent: "cyan",
    short: "Versión deportiva, técnica y de competencia.",
    description:
      "Enfocado en elementos atléticos: fuerza, escaladas, giros, inversiones y figuras de flexibilidad sobre la barra. Se evalúa con criterios técnicos y de ejecución, igual que la gimnasia.",
    sport:
      "Pole Sport es observador de la GAISF (Global Association of International Sports Federations) desde 2017, paso clave hacia el reconocimiento olímpico.",
  },
  {
    id: "funcionales",
    name: "Entrenamiento Funcional",
    icon: Dumbbell,
    accent: "green",
    short: "Fuerza para la vida diaria, a cualquier edad.",
    description:
      "Movimientos que imitan acciones cotidianas para mejorar fuerza, equilibrio y resistencia. Adaptamos cada clase, con énfasis especial en mujeres adultas y de la tercera edad.",
    sport:
      "Avalado por organizaciones como ACSM y NSCA como pilar del entrenamiento moderno por su impacto en salud cardiovascular y prevención de caídas.",
  },
  {
    id: "flexibilidad",
    name: "Flexibilidad",
    icon: Feather,
    accent: "pink",
    short: "Rango de movimiento, postura y ligereza.",
    description:
      "Sesiones progresivas de movilidad articular y elongación. Mejoran rendimiento en otras disciplinas, alivian tensión muscular y previenen lesiones.",
    sport:
      "La flexibilidad es uno de los cinco componentes de la aptitud física definidos por la Organización Mundial de la Salud, junto a fuerza, resistencia, composición corporal y velocidad.",
  },
];

export default function Disciplines() {
  return (
    <section
      className={`section section--alt ${styles.section}`}
      id="disciplinas"
    >
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Disciplinas</span>
          <h2>Movimiento que te transforma.</h2>
          <p>
            Cuatro caminos distintos para encontrar tu fuerza. Ninguno requiere
            experiencia previa: solo ganas de empezar.
          </p>
        </div>

        <div className={styles.list}>
          {disciplines.map((d, i) => {
            const Icon = d.icon;
            return (
              <article
                key={d.id}
                className={styles.row}
                data-accent={d.accent}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={styles.head}>
                  <span className={styles.icon}>
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3>{d.name}</h3>
                    <p className={styles.short}>{d.short}</p>
                  </div>
                </div>

                <p className={styles.body}>{d.description}</p>

                <p className={styles.sport}>
                  <BadgeCheck size={16} />
                  <span>{d.sport}</span>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
