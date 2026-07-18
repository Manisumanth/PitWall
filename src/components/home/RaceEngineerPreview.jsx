import { Bot, Send } from "lucide-react";
import { motion } from "framer-motion";

function RaceEngineerPreview() {
  return (
    <section className="bg-[#080808] px-8 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-5xl font-bold">
          Meet Your
          <span className="text-red-600"> Race Engineer</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
          Your AI assistant that understands Formula 1 strategy,
          history, live races and every driver on the grid.
        </p>

        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <div className="mb-8 flex items-center gap-3">

            <div className="rounded-full bg-red-600 p-3">
              <Bot />
            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Race Engineer
              </h3>

              <p className="text-sm text-green-400">
                ● Online
              </p>

            </div>

          </div>

          <div className="space-y-5">

            <div className="max-w-xl rounded-2xl bg-white/10 p-5">
              Why did McLaren pit Norris so early?
            </div>

            <div className="ml-auto max-w-2xl rounded-2xl bg-red-600/20 p-5">
              McLaren attempted an undercut strategy. Pitting earlier
              allowed Norris to use fresh tyres and gain time while
              Verstappen remained on worn tyres.
            </div>

          </div>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-3">

            <input
              type="text"
              placeholder="Ask anything about Formula 1..."
              className="flex-1 bg-transparent outline-none placeholder:text-gray-500"
            />

            <button className="rounded-xl bg-red-600 p-3 transition hover:bg-red-500">
              <Send size={18} />
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default RaceEngineerPreview;