import React from "react";
import PropTypes from "prop-types"; // Импорт PropTypes

const HamburgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="fixed top-1 right-4 text-yellow-400 text-5xl md:hidden flex items-center z-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      ☰
    </button>
  );
};

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default HamburgerButton;