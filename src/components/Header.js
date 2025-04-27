import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ name = "Maksym" }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Привет, я {name}!</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              Обо мне
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              Проекты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;