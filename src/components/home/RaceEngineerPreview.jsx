import { motion } from "framer-motion";
import { Bot, Sparkles, ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";

function RaceEngineerPreview() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8 lg:py-32">

      {/* Background Glow */}
      <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-red-600/10 blur-[120px] sm:right-20 sm:top-20 sm:h-72 sm:w-72 sm:blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-4 py-2 text-xs font-semibold text-red-500 sm:px-5 sm:text-sm">

            <Sparkles size={16} />

            AI RACE ENGINEER

          </div>

          <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:mt-8 lg:text-5xl">

            Ask Anything
            <br />

            About Formula 1.

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">

            From race strategy and tyre choices to
            driver comparisons, regulations and
            championship battles, PitWall's AI Race
            Engineer provides intelligent answers
            instantly.

          </p>

          <Link
            to="/ai"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700 lg:mt-10"
          >
            Try AI Race Engineer
            <ArrowRight size={18} />
          </Link>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="absolute inset-0 rounded-[35px] bg-red-600/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] shadow-[0_0_70px_rgba(220,38,38,0.15)]">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white sm:h-12 sm:w-12">

                  <Bot size={22} />

                </div>

                <div>

                  <h3 className="font-bold text-sm sm:text-base">
                    AI Race Engineer
                  </h3>

                  <p className="text-xs text-green-400 sm:text-sm">
                    ● Online
                  </p>

                </div>

              </div>

            </div>

            {/* Messages */}

            <div className="space-y-5 p-4 sm:space-y-6 sm:p-6">

              <div className="flex justify-end">

                <div className="max-w-[75%] rounded-2xl rounded-br-md bg-red-600 px-4 py-3 text-sm sm:max-w-xs sm:px-5">

                  Why did Ferrari pit early?

                </div>

              </div>

              <div className="flex">

                <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/5 px-4 py-3 text-sm text-gray-300 sm:max-w-sm sm:px-5">

                  Ferrari attempted an undercut to gain
                  track position before Norris entered
                  the pit lane.

                </div>

              </div>

              <div className="flex justify-end">

                <div className="max-w-[75%] rounded-2xl rounded-br-md bg-red-600 px-4 py-3 text-sm sm:max-w-xs sm:px-5">

                  Compare Verstappen and Norris.

                </div>

              </div>

              <div className="flex">

                <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/5 px-4 py-3 text-sm text-gray-300 sm:max-w-sm sm:px-5">

                  Verstappen leads in victories while
                  Norris has shown exceptional qualifying
                  pace this season.

                </div>

              </div>

            </div>

            {/* Input */}

            <div className="border-t border-white/10 p-4 sm:p-5">

              <div className="flex items-center justify-between rounded-full bg-white/5 px-5 py-3 text-sm text-gray-500 sm:px-6 sm:py-4">

                Ask anything about Formula 1...

                <Send size={18} />

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default RaceEngineerPreview;