import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "../translations";

export const useLanguage = () => {
  const {  language, toggleLanguage } = useContext(LanguageContext);

  return {
    lang :language,
    toggleLanguage,
    t: translations[language],
  };
};
