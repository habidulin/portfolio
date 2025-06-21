import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Header = ({ name = "Maksym" }) => {
  const { t } = useTranslation();

  return (
    <header className="bg-blue-500 text-white p-2">
      <h1 className="text-2xl font-bold mb-4">{t("header_greeting", { name })}</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              {t("menu.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              {t("menu.projects")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }
            >
              {t("menu.contact")}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;