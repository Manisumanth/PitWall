function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-8 py-12">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h2 className="text-3xl font-bold">
              Pit<span className="text-red-600">Wall</span>
            </h2>

            <p className="mt-2 text-gray-400">
              Your AI Powered Formula 1 Dashboard
            </p>
          </div>

          <div className="flex gap-8 text-gray-400">
            <a href="/" className="hover:text-red-500">Home</a>
            <a href="/live" className="hover:text-red-500">Live</a>
            <a href="/calendar" className="hover:text-red-500">Calendar</a>
            <a href="/standings" className="hover:text-red-500">Standings</a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500">
          © 2026 PitWall. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;