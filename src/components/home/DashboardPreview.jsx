import { motion } from "framer-motion";
import {
  Activity,
  Flag,
  Cloud,
  Timer,
  Trophy,
  Radio,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function DashboardPreview() {
  return (
    <section className="bg-[#080808] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <span className="rounded-full border border-red-600/40 bg-red-600/10 px-5 py-2 text-sm font-semibold text-red-500">
            LIVE CONTROL CENTER
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Everything You Need
            <span className="text-red-600"> During Race Weekend</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
            Follow every Formula 1 session with live timing, weather,
            race control, standings and AI-powered insights from one dashboard.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: .3 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          {/* Header */}

          <div className="flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 animate-pulse rounded-full bg-red-600" />

                <span className="font-semibold text-red-500">
                  LIVE SESSION
                </span>

              </div>

              <h3 className="mt-3 text-3xl font-bold">
                Belgian Grand Prix
              </h3>

              <p className="mt-2 text-gray-400">
                Practice • Qualifying • Race • Live Timing
              </p>

            </div>

            <div className="rounded-2xl bg-red-600 px-6 py-4 text-center">

              <Timer className="mx-auto mb-2" />

              <p className="text-sm">
                Session Live
              </p>

            </div>

          </div>

          {/* Widgets */}

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">

              <Activity className="mb-4 text-red-500" />

              <h4 className="font-bold">
                Live Timing
              </h4>

              <p className="mt-3 text-gray-400">
                Real-time lap times and gaps.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">

              <Cloud className="mb-4 text-red-500" />

              <h4 className="font-bold">
                Weather
              </h4>

              <p className="mt-3 text-gray-400">
                Air, track temperature and rain updates.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">

              <Flag className="mb-4 text-red-500" />

              <h4 className="font-bold">
                Race Control
              </h4>

              <p className="mt-3 text-gray-400">
                Flags, incidents and FIA messages.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">

              <Radio className="mb-4 text-red-500" />

              <h4 className="font-bold">
                Team Radio
              </h4>

              <p className="mt-3 text-gray-400">
                Listen to team communications.
              </p>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-white/10 bg-black/30 p-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

              <div className="rounded-full bg-red-600 p-4">

                <Trophy />

              </div>

              <div>

                <h4 className="text-xl font-bold">
                  Championship Standings
                </h4>

                <p className="text-gray-400">
                  Drivers • Constructors • Live Updates
                </p>

              </div>

            </div>

            <Link
              to="/live"
              className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
            >
              Open Dashboard

              <ChevronRight size={18} />

            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default DashboardPreview;