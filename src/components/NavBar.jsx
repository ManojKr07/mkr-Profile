import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyImage from "../assets/manoj_photo_soft.jpg";
import ToggleTheme from "./Toggle";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 dark:bg-black/20 flex items-center justify-between h-16 px-6 sm:px-10 transition-all duration-300"
      style={{ fontFamily: "Cambria, serif" }}
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src={MyImage}
          alt="Profile"
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-gray-300 dark:border-gray-600"
        />
        <h1 className="text-lg sm:text-xl font-extrabold text-black dark:text-white transition-colors duration-700">
          MANOJ K R
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-lg font-bold text-black dark:text-white transition-colors duration-700">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link>
        <Link to="/resume" className="hover:text-yellow-400 transition">Resume</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        <ToggleTheme />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <ToggleTheme />
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl transition-colors duration-700">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/90 dark:bg-black/90 flex flex-col items-center gap-4 py-4 text-lg font-bold text-black dark:text-white transition-colors duration-700 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
