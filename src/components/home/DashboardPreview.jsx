import { motion } from "framer-motion";
import { Radio, Cloud, Flag } from "lucide-react";

function DashboardPreview() {
  return (
    <section className="bg-[#080808] px-8 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-4 text-center text-5xl font-bold">
          Live Dashboard
        </h2>

        <p className="mb-16 text-center text-gray-400">
          Experience Formula 1 like a race engineer.
        </p>

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl"
        >

          {/* Header */}

          <div className="mb-8 flex items-center justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 animate-pulse rounded-full bg-red-600"></div>

                <span className="text-red-500 font-semibold">
                  LIVE SESSION
                </span>

              </div>

              <h3 className="mt-3 text-3xl font-bold">
                Belgian Grand Prix
              </h3>

            </div>

            <span className="rounded-full bg-red-600 px-4 py-2 font-semibold">
              Lap 34 / 44
            </span>

          </div>

          {/* Widgets */}

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 p-5">

              <h4 className="mb-5 font-bold">
                Driver Positions
              </h4>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>P1 Norris</span>
                  <span>+0.000</span>
                </div>

                <div className="flex justify-between">
                  <span>P2 Verstappen</span>
                  <span>+1.284</span>
                </div>

                <div className="flex justify-between">
                  <span>P3 Leclerc</span>
                  <span>+3.821</span>
                </div>

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 p-5">

              <Cloud className="mb-4 text-red-500" />

              <h4 className="mb-5 font-bold">
                Weather
              </h4>

              <p>Track: 41°C</p>
              <p>Air: 27°C</p>
              <p>Humidity: 60%</p>

            </div>

            <div className="rounded-2xl border border-white/10 p-5">

              <Flag className="mb-4 text-green-500" />

              <h4 className="mb-5 font-bold">
                Track Status
              </h4>

              <p className="text-green-400">
                Green Flag
              </p>

              <p>DRS Enabled</p>

            </div>

          </div>

          {/* Radio */}

          <div className="mt-8 rounded-2xl border border-white/10 p-5">

            <div className="mb-4 flex items-center gap-3">

              <Radio className="text-red-500" />

              <h4 className="font-bold">
                Latest Radio
              </h4>

            </div>

            <p className="italic text-gray-400">
              "Box this lap, box this lap."
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default DashboardPreview;