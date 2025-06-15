import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const HorizontalMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex justify-center items-center space-x-8 bg-gray-800 text-white p-1">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-400 flex items-center" : "hover:text-yellow-400 flex items-center"
        }
      >
        <img src="/logo512.png" alt={t("menu.welcome")} className="w-8 h-8 mr-8" />
        <span>{t("menu.welcome")}</span>
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        {t("menu.skills")}
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        {t("menu.projects")}
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        {t("menu.about")}
      </NavLink>
      {/* <NavLink
        to="/love"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        {t("menu.love")}
      </NavLink> */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        {t("menu.contact")}
      </NavLink>
      <LanguageSwitcher />
    </nav>
  );
};

export default HorizontalMenu;
