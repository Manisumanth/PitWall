import { Bot, ArrowRight } from "lucide-react";

function RaceEngineer() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-28">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-red-600/20 p-3">
            <Bot className="text-red-500" size={32} />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">
              Race Engineer
            </h2>

            <p className="mt-2 text-gray-400">
              Your AI Formula 1 assistant.
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-6">

          <p className="text-gray-400">
            Ask anything...
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-full border border-white/10 px-5 py-3 text-white transition hover:border-red-600 hover:bg-red-600/20">
              Why did Ferrari pit early?
            </button>

            <button className="rounded-full border border-white/10 px-5 py-3 text-white transition hover:border-red-600 hover:bg-red-600/20">
              Who has the fastest pace?
            </button>

            <button className="rounded-full border border-white/10 px-5 py-3 text-white transition hover:border-red-600 hover:bg-red-600/20">
              Explain DRS
            </button>

            <button className="rounded-full border border-white/10 px-5 py-3 text-white transition hover:border-red-600 hover:bg-red-600/20">
              Predict today's winner
            </button>

          </div>

          <button className="mt-10 flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">

            Start Chatting

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
}

export default RaceEngineer;