import React, { } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

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
    <div className="bg-gray-100 bg-opacity-80 p-1 text-sm flex justify-between items-center h-14 md:relative top-0 left-0 w-full relative">
      <span className="text-gray-400 flex-grow text-left flex items-center space-x-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }
        >
          <img src="/logo512.png" alt="Главная" className="w-6 h-6" />
        </NavLink>
        {breadcrumbs.length > 0 && <span className="mx-2">&gt;</span>}
        {breadcrumbs}
      </span>
    </div>
  );
};

export default Breadcrumbs;