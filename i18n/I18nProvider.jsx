"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dictionaries } from "./dictionaries";

const I18nContext = createContext({
  lang: "es",
  t: dictionaries.es,
  setLang: () => {},
});

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    let initial = "es";
    try {
      const stored = localStorage.getItem("acropole-lang");
      if (stored === "es" || stored === "en") {
        initial = stored;
      } else if (typeof navigator !== "undefined") {
        initial = navigator.language?.toLowerCase().startsWith("en")
          ? "en"
          : "es";
      }
    } catch (e) {}
    setLang(initial);
    document.documentElement.lang = initial;
  }, []);

  const changeLang = (next) => {
    try {
      localStorage.setItem("acropole-lang", next);
    } catch (e) {}
    document.documentElement.lang = next;
    setLang(next);
  };

  const value = {
    lang,
    t: dictionaries[lang] || dictionaries.es,
    setLang: changeLang,
  };

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export function useT() {
  return useContext(I18nContext).t;
}
