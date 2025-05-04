import React from "react";
import { NavLink } from "react-router-dom";

const HorizontalMenu = () => {
  return (
    <nav className="hidden md:flex justify-center items-center space-x-8 bg-gray-800 text-white p-1">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-400" : "hover:text-yellow-400"
        }
      >
        <img src="/logo512.png" alt="Главная" className="w-12 h-12" />
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