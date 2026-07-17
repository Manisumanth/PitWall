import { Radio, Play, ArrowRight } from "lucide-react";

function RadioCheck() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-red-600/20 p-3">
            <Radio className="text-red-500" size={32} />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">
              Radio Check
            </h2>

            <p className="mt-2 text-gray-400">
              Listen to the latest Formula 1 team radios.
            </p>
          </div>

        </div>

        <div className="mt-10 space-y-5">

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Max Verstappen
                </h3>

                <p className="mt-2 text-gray-400">
                  "My tyres are gone."
                </p>

              </div>

              <button className="rounded-full bg-red-600 p-4 transition hover:bg-red-700">
                <Play size={20} className="text-white" />
              </button>

            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Lewis Hamilton
                </h3>

                <p className="mt-2 text-gray-400">
                  "Box this lap."
                </p>

              </div>

              <button className="rounded-full bg-red-600 p-4 transition hover:bg-red-700">
                <Play size={20} className="text-white" />
              </button>

            </div>

          </div>

        </div>

        <button className="mt-10 flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">

          View All Radios

          <ArrowRight size={18} />

        </button>

      </div>

    </section>
  );
}

export default RadioCheck;