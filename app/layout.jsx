import { Poppins, Quicksand } from "next/font/google";
import { I18nProvider } from "@/i18n/I18nProvider";
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

const SITE_URL = "https://acropole-fit-center.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Acropole Fit Center | Pole Dance y Pole Sport en Loja, Ecuador",
    template: "%s | Acropole Fit Center Loja",
  },
  description:
    "Academia de Pole Dance, Pole Sport, entrenamiento funcional y flexibilidad para mujeres en Loja, Ecuador. Clases en el centro de Loja. Reserva tu primera clase hoy.",
  keywords: [
    "Pole Dance Loja",
    "Pole Sport Ecuador",
    "Academia pole dance Ecuador",
    "Clases de pole en Loja",
    "Entrenamiento funcional mujeres Loja",
    "Flexibilidad Loja",
    "Gimnasio mujeres Loja",
    "Acropole Fit Center",
    "Studio fitness Loja",
    "Pole dance cerca de mí Loja",
  ],
  authors: [{ name: "Acropole Fit Center" }],
  creator: "Acropole Fit Center",
  publisher: "Acropole Fit Center",
  category: "fitness",
  alternates: {
    canonical: "/",
    languages: {
      "es-EC": "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Acropole Fit Center",
    title: "Acropole Fit Center · Pole Dance, Pole Sport y Flexibilidad en Loja",
    description:
      "Studio para mujeres en Loja, Ecuador. Pole Dance, Pole Sport, funcional y flexibilidad. Reserva tu primera clase.",
    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Acropole Fit Center — Loja, Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acropole Fit Center · Pole Dance en Loja",
    description:
      "Pole Dance, Pole Sport, funcional y flexibilidad para mujeres en Loja, Ecuador.",
    images: ["/logos/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    // Cuando registres el sitio en Google Search Console, pega aquí el código:
    // google: "TU_CODIGO_DE_VERIFICACION",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "@id": `${SITE_URL}/#business`,
  name: "Acropole Fit Center",
  alternateName: "Acropole Fit Center Loja",
  description:
    "Studio de Pole Dance, Pole Sport, entrenamiento funcional y flexibilidad para mujeres en Loja, Ecuador.",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo.png`,
  image: `${SITE_URL}/logos/logo.png`,
  telephone: "+593983835505",
  email: "acropolefitcenterloja@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: ["Cash", "Credit Card"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "10 de Agosto, Centro",
    addressLocality: "Loja",
    addressRegion: "Loja",
    postalCode: "110150",
    addressCountry: "EC",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.99313,
    longitude: -79.20422,
  },
  hasMap: "https://maps.app.goo.gl/5VAcgbMU332iGj7u5",
  areaServed: {
    "@type": "City",
    name: "Loja",
    containedInPlace: {
      "@type": "Country",
      name: "Ecuador",
    },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/acropolefitcenter/",
    "https://www.tiktok.com/@acropolefitcenter",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Pole Dance" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Pole Sport" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Entrenamiento Funcional" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Flexibilidad" },
    },
  ],
  founder: {
    "@type": "Person",
    name: "Cristina Marín Peroza",
    image: `${SITE_URL}/cristina.jpeg`,
    sameAs: "https://www.instagram.com/cristmarin/",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Acropole Fit Center",
  inLanguage: "es-EC",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-EC" className={`${poppins.variable} ${quicksand.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
