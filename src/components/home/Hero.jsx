import { motion } from "framer-motion";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[180px]" />
      <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-red-700/10 blur-[150px]" />
      <div className="absolute right-0 bottom-20 h-[350px] w-[350px] rounded-full bg-red-500/10 blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >

          <span className="inline-block rounded-full border border-red-600/50 bg-red-600/10 px-5 py-2 text-sm font-semibold text-red-500 backdrop-blur-md">
            AI Powered Formula 1 Dashboard
          </span>

          <h1 className="mt-8 text-7xl font-black leading-tight text-white">
            Experience Formula 1
            <br />
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
              Like Never Before.
            </span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-400">
            Live races, AI race engineer, driver radio,
            telemetry, tyre strategies and everything
            happening on the Formula 1 circuit in one place.
          </p>

          <div className="mt-12 flex gap-5">
            <Button text="Watch Live" />
            <Button text="Race Calendar" />
          </div>

          <div className="mt-14 flex gap-14">

            <div>
              <h2 className="text-4xl font-bold text-red-500">24</h2>
              <p className="text-gray-500">Grand Prix</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-red-500">20</h2>
              <p className="text-gray-500">Drivers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-red-500">10</h2>
              <p className="text-gray-500">Teams</p>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.img
            src="/hero.png"
            alt="Formula 1 Car"
            className="w-[780px] drop-shadow-[0_0_120px_rgba(220,38,38,0.45)]"
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