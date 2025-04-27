import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();

  // Генерация хлебных крошек
  const breadcrumbs = location.pathname
    .split('/')
    .filter((path) => path)
    .map((path, index, arr) => {
      const to = `/${arr.slice(0, index + 1).join('/')}`;
      return (
        <span key={to} className="text-gray-400">
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
            }
          >
            {path}
          </NavLink>
          {index < arr.length - 1 && ' / '}
        </span>
      );
    });

  return (
    <div>
      {/* Навигационное меню */}
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              О себе
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Проекты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/love"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Саша
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
              }
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Хлебные крошки */}
      <div className="bg-gray-100 p-4 text-sm">
        <span className="text-gray-400">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-yellow-400' : 'hover:text-yellow-400'
            }
          >
            Главная
          </NavLink>
        </span>
        {breadcrumbs.length > 0 && ' / '}
        {breadcrumbs}
      </div>
    </div>
  );
};

export default Menu;