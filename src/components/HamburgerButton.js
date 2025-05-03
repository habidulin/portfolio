import React from "react";

const HamburgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="fixed top-4 right-4 z-50 text-yellow-400 text-3xl md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      ☰
    </button>
  );
};

export default HamburgerButton;