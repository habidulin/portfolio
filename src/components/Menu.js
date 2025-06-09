import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import HorizontalMenu from "./HorizontalMenu";
import Breadcrumbs from "./Breadcrumbs";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Боковое меню */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 bg-opacity-90 text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-yellow-400 text-3xl"
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
                Главная
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
                Навыки
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
                О себе
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
                Проекты
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/love"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 text-xl" : "hover:text-yellow-400 text-xl"
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
                  isActive ? "text-yellow-400 text-xl" : "hover:text-yellow-400 text-xl"
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

      {/* Кнопка-гамбургер */}
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Menu;