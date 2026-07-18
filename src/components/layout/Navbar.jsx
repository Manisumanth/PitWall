import { Flag, Radio, Bot } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `group relative text-lg transition ${
      isActive
        ? "text-red-500 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PitWall"
            className="h-8"
          />

          <h1 className="text-2xl font-bold tracking-wide text-white">
            Pit<span className="text-red-600">Wall</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-10">

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

        {/* Right */}
        <div className="flex items-center gap-4">

          <button className="flex items-center gap-2 rounded-full border border-red-600/50 bg-red-600/5 px-5 py-2 text-white transition hover:bg-red-600/20">
            <Radio size={16} />
            Radio Check
          </button>

          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-2 font-semibold text-white shadow-lg shadow-red-600/30 transition hover:scale-105">
            <Bot size={16} />
            Race Engineer
          </button>

          <div className="flex items-center gap-2 rounded-full border border-green-500/50 bg-green-500/5 px-4 py-2 text-green-400">
            <Flag size={15} />
            LIVE
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;