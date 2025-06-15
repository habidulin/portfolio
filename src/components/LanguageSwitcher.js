import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={e => i18n.changeLanguage(e.target.value)}
      className="border rounded px-2 py-1 bg-gray-800 text-white"
    >
      <option value="ua">Українська</option>
      <option value="ru">Русский</option>
      <option value="de">Deutsch</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;