import { useState } from "react";
import { Menu, X, Bot } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-red-500 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">

          <img
            src="/logo.png"
            alt="PitWall"
            className="h-7 sm:h-9"
          />

          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Pit<span className="text-red-600">Wall</span>
          </h1>

        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-10 lg:flex">

          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/live" className={navLinkClass}>
              Live
            </NavLink>
          </li>

          <li>
            <NavLink to="/calendar" className={navLinkClass}>
              Calendar
            </NavLink>
          </li>

          <li>
            <NavLink to="/standings" className={navLinkClass}>
              Standings
            </NavLink>
          </li>

          <li>
            <NavLink to="/drivers" className={navLinkClass}>
              Drivers
            </NavLink>
          </li>

          <li>
            <NavLink to="/teams" className={navLinkClass}>
              Teams
            </NavLink>
          </li>

        </ul>

        {/* Desktop AI Button */}
        <div className="hidden lg:flex">

          <Link
            to="/ai"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            <Bot size={18} />
            Race Engineer
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">

          <div className="flex flex-col gap-1 px-5 py-5 text-base">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              Home
            </NavLink>

            <NavLink
              to="/live"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              Live
            </NavLink>

            <NavLink
              to="/calendar"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              Calendar
            </NavLink>

            <NavLink
              to="/standings"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              Standings
            </NavLink>

            <NavLink
              to="/drivers"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              Drivers
            </NavLink>

            <NavLink
              to="/teams"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              Teams
            </NavLink>

            <Link
              to="/ai"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 py-3 font-semibold text-white transition duration-300 hover:from-red-700 hover:to-red-600"
            >
              <Bot size={18} />
              Race Engineer
            </Link>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;