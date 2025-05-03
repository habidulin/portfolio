import React from "react";
import { NavLink } from "react-router-dom";

const HorizontalMenu = () => {
  return (
    <nav className="hidden md:flex justify-center space-x-4 bg-gray-800 text-white p-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        Главная
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        О себе
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        Проекты
      </NavLink>
      <NavLink
        to="/love"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        Саша
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        Контакты
      </NavLink>
    </nav>
  );
};

export default HorizontalMenu;