import React from "react";
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
    <div className="bg-gray-100 p-4 text-sm flex justify-between">
      <span className="text-gray-400 flex-grow text-left">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-400"
          }
        >
          Главная
        </NavLink>
        {breadcrumbs.length > 0 && " / "}
        {breadcrumbs}
      </span>
      <button className="text-yellow-400 text-3xl md:hidden">☰</button>
    </div>
  );
};

export default Breadcrumbs;