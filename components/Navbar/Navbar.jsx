"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import { useT } from "@/i18n/I18nProvider";
import styles from "./Navbar.module.css";

const RESERVA_URL =
  "https://reservaclase.com/acropolefitcenter/index.php?menu=clase&id_clase=7059&dia=0";

export default function Navbar() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#disciplinas", label: t.nav.disciplinas },
    { href: "#planes", label: t.nav.planes },
    { href: "#horario", label: t.nav.horario },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="Acropole Fit Center">
          <Image
            src="/logos/logo.png"
            alt="Acropole Fit Center"
            width={3300}
            height={1980}
            className={styles.brandLogo}
            priority
          />
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          <ul className={styles.list}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.toggles}>
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <a
            className={styles.cta}
            href={RESERVA_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.reservar}
          </a>
        </nav>

        <button
          className={styles.toggle}
          aria-label={open ? t.nav.cerrarMenu : t.nav.abrirMenu}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
