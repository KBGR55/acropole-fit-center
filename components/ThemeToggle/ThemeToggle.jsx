"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const t = useT();
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("acropole-theme", next);
    } catch (e) {}
    setTheme(next);
  };

  const isDark = theme === "dark";
  const label = isDark ? t.toggle.light : t.toggle.dark;

  return (
    <button
      className={styles.toggle}
      onClick={toggle}
      aria-label={label}
      title={label}
      suppressHydrationWarning
    >
      {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
    </button>
  );
}
