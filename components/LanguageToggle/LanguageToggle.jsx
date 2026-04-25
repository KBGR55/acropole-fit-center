"use client";

import { Globe } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import styles from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const { lang, setLang, t } = useI18n();
  const next = lang === "es" ? "en" : "es";

  return (
    <button
      className={styles.toggle}
      onClick={() => setLang(next)}
      aria-label={t.toggle.switchLang}
      title={t.toggle.switchLang}
    >
      <Globe size={16} />
      <span>{lang === "es" ? "EN" : "ES"}</span>
    </button>
  );
}
