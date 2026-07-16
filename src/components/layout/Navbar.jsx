function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-[#0B0B0D]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏁</span>
          <h1 className="text-2xl font-bold text-red-600">
            PitWall
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden gap-8 text-gray-300 md:flex">
          <li className="cursor-pointer hover:text-red-600">Home</li>
          <li className="cursor-pointer hover:text-red-600">Live</li>
          <li className="cursor-pointer hover:text-red-600">Calendar</li>
          <li className="cursor-pointer hover:text-red-600">Standings</li>
          <li className="cursor-pointer hover:text-red-600">News</li>
        </ul>

        {/* Live Indicator */}
        <div className="flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-sm font-semibold">
          <span className="h-2 w-2 rounded-full bg-white"></span>
          LIVE
        </div>

      </div>
    </nav>
  );
}

export default Navbar;