"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { ko } from "../locales/ko";
import { en } from "../locales/en";

type Lang = "ko" | "en";
type Texts = typeof ko;

const LanguageContext = createContext<{ lang: Lang; t: Texts; toggle: () => void }>({
  lang: "ko",
  t: ko,
  toggle: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "ko") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "ko" ? "en" : "ko";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  const t = lang === "ko" ? ko : en;

  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}
