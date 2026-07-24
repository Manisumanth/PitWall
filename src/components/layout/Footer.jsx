import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">

        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">

          {/* Logo */}

          <div>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Pit<span className="text-red-600">Wall</span>
            </h2>

            <p className="mt-2 text-sm text-gray-400 sm:text-base">
              Your AI Powered Formula 1 Dashboard
            </p>

          </div>

          {/* Navigation */}

          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400 sm:gap-8 sm:text-base">

            <Link
              to="/"
              className="transition hover:text-red-500"
            >
              Home
            </Link>

            <Link
              to="/live"
              className="transition hover:text-red-500"
            >
              Live
            </Link>

            <Link
              to="/calendar"
              className="transition hover:text-red-500"
            >
              Calendar
            </Link>

            <Link
              to="/standings"
              className="transition hover:text-red-500"
            >
              Standings
            </Link>

          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-500 sm:mt-10 sm:text-sm">
          © 2026 PitWall. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;