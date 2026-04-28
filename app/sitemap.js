const SITE_URL = "https://acropole-fit-center.vercel.app";

export default function sitemap() {
  const lastModified = new Date();
  const sections = [
    "",
    "#sobre",
    "#disciplinas",
    "#beneficios",
    "#planes",
    "#horario",
    "#historia",
    "#contacto",
  ];

  return sections.map((hash) => ({
    url: `${SITE_URL}/${hash}`,
    lastModified,
    changeFrequency: hash === "" ? "weekly" : "monthly",
    priority: hash === "" ? 1.0 : 0.7,
  }));
}
