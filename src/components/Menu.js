import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для управления меню
  const location = useLocation();

  // Генерация хлебных крошек
  const breadcrumbs = location.pathname
    .split("/")
    .filter((path) => path)
    .map((path, index, arr) => {
      const to = `/${arr.slice(0, index + 1).join("/")}`;
      return (
        <span key={to} className="text-gray-400">
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            {path}
          </NavLink>
          {index < arr.length - 1 && " / "}
        </span>
      );
    });

  return (
    <div>
      {/* Кнопка-гамбургер */}
      <button
        className="fixed top-4 left-4 z-50 text-yellow-400 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Боковое меню */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 bg-opacity-90 text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
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

      {/* Хлебные крошки */}
      <div className="bg-gray-100 p-4 text-sm">
        <span className="text-gray-400">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            Главная
          </NavLink>
        </span>
        {breadcrumbs.length > 0 && " / "}
        {breadcrumbs}
      </div>
    </div>
  );
};

export default Menu;