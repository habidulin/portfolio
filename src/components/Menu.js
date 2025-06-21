import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import HorizontalMenu from "./HorizontalMenu";
import Breadcrumbs from "./Breadcrumbs";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      {/* Боковое меню (мобильная версия) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 bg-opacity-90 text-white p-2 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-yellow-400 text-5xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <ul className="space-y-4 mt-16 flex flex-col items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 text-xl" : "hover:text-yellow-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("menu.welcome")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 text-xl" : "hover:text-yellow-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("menu.skills")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 text-xl" : "hover:text-yellow-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("menu.projects")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 text-xl" : "hover:text-yellow-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("menu.about")}
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/love"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 text-xl" : "hover:text-yellow-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("menu.love")}
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 text-xl" : "hover:text-yellow-400 text-xl"
              }
              onClick={() => setIsOpen(false)}
            >
              {t("menu.contact")}
            </NavLink>
          </li>
        </ul>
        {/* Переключатель языка под контактами */}
        <div className="mt-4 flex justify-center">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Горизонтальное меню (десктоп) */}
      <HorizontalMenu />

      {/* Хлебные крошки */}
      <Breadcrumbs />

      {/* Кнопка-гамбургер */}
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Menu;