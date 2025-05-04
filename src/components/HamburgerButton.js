import React from "react";

const HamburgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="fixed top-1 right-4 text-yellow-400 text-4xl md:hidden flex items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      ☰
    </button>
  );
};

export default HamburgerButton;