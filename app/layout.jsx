import { Poppins, Quicksand } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata = {
  title: "Acropole Fit Center · Pole Dance, Pole Sport y Flexibilidad en Loja",
  description:
    "Studio de Pole Dance, Pole Sport, entrenamiento funcional y flexibilidad para mujeres en Loja, Ecuador. Espacio de bienestar, comunidad y empoderamiento.",
  keywords: [
    "Pole Dance Loja",
    "Pole Sport Ecuador",
    "Flexibilidad",
    "Entrenamiento funcional mujeres",
    "Acropole Fit Center",
  ],
  openGraph: {
    title: "Acropole Fit Center",
    description:
      "Studio para mujeres en Loja: Pole Dance, Pole Sport, funcionales y flexibilidad.",
    locale: "es_EC",
    type: "website",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('acropole-theme');
    var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefers ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${quicksand.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
