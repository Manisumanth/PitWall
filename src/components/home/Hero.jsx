import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080808]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[150px] sm:blur-[180px]" />
      <div className="absolute left-0 top-40 h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] rounded-full bg-red-600/10 blur-[120px] sm:blur-[150px]" />
      <div className="absolute right-0 bottom-20 h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] rounded-full bg-red-500/10 blur-[120px] sm:blur-[150px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:justify-between lg:gap-14">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >

          <span className="inline-block rounded-full border border-red-600/40 bg-red-600/10 px-4 py-2 text-xs font-semibold text-red-500 sm:px-5 sm:text-sm">
            THE MODERN F1 EXPERIENCE
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:mt-8 sm:text-5xl lg:text-7xl">
            Your Ultimate
            <br />

            <span className="bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
              Formula 1 Companion.
            </span>

          </h1>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8 lg:text-xl">
            Follow every race weekend with live sessions,
            championship standings, driver insights,
            team statistics and an AI Race Engineer —
            all in one premium platform.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:flex-row sm:justify-center lg:justify-start">

            <Link
              to="/live"
              className="w-full rounded-full bg-red-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-red-700 sm:w-auto"
            >
              Watch Live
            </Link>

            <Link
              to="/calendar"
              className="w-full rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center font-semibold text-white transition hover:border-red-600 hover:bg-white/10 sm:w-auto"
            >
              Race Calendar
            </Link>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex w-full justify-center"
        >

          <motion.img
            src="/hero.png"
            alt="Formula 1 Car"
            className="w-full max-w-[340px] sm:max-w-[500px] lg:max-w-[760px] drop-shadow-[0_0_120px_rgba(220,38,38,0.45)]"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;