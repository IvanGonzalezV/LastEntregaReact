import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../../assets/logoheader.jpg";

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Ferragamo",
    href: "/productos/ferragamo",
  },
  {
    label: "Hugo Boss",
    href: "/productos/hugoboss",
  },
  {
    label: "Ermenegildo Zegna",
    href: "/productos/zegna",
  },
  {
    label: "Santoni",
    href: "/productos/santoni",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-black to-gray-400">
      <div className="container mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-35 h-16 mb-4" />
          <div className="hidden md:flex items-center">
            <NavLink to="/" className="text-lg uppercase font-semibold text-white ml-4">
              Inicio
            </NavLink>
            <nav className="flex gap-5 ml-4">
              {links.slice(1).map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (
                    `text-lg uppercase font-semibold ${isActive ? "text-lime-400" : "text-white"}`)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-lime-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
          <nav className="text-white text-lg">
            <NavLink
              to="/"
              className="block py-2 px-4"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </NavLink>
            {links.slice(1).map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-4"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="hidden md:block">
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
