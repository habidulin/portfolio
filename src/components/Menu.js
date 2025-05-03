import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import HorizontalMenu from "./HorizontalMenu";
import Breadcrumbs from "./Breadcrumbs";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Кнопка-гамбургер */}
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Боковое меню */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 bg-opacity-90 text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <button
          className="text-yellow-400 mb-4"
          onClick={() => setIsOpen(false)}
        >
          ✕ Закрыть
        </button>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
              onClick={() => setIsOpen(false)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
              onClick={() => setIsOpen(false)}
            >
              О себе
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
              onClick={() => setIsOpen(false)}
            >
              Проекты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/love"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
              onClick={() => setIsOpen(false)}
            >
              Саша
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Горизонтальное меню */}
      <HorizontalMenu />

      {/* Хлебные крошки */}
      <Breadcrumbs />
    </div>
  );
};

export default Menu;