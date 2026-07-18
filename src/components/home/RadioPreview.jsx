import { motion } from "framer-motion";
import { Radio } from "lucide-react";

const radios = [
  {
    driver: "Max Verstappen",
    team: "Red Bull",
    message: `"Tyres are starting to drop off."`,
  },
  {
    driver: "Lando Norris",
    team: "McLaren",
    message: `"Let's keep pushing. Pace feels strong."`,
  },
  {
    driver: "Charles Leclerc",
    team: "Ferrari",
    message: `"How many laps to the next stop?"`,
  },
];

function RadioPreview() {
  return (
    <section className="bg-[#080808] px-8 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-5xl font-bold">
          Latest <span className="text-red-600">Radio Check</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
          Listen to team radio messages with live transcripts during every Formula 1 session.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {radios.map((radio, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="mb-6 flex items-center gap-3">

                <div className="rounded-full bg-red-600 p-3">
                  <Radio size={20} />
                </div>

                <div>

                  <h3 className="font-bold">
                    {radio.driver}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {radio.team}
                  </p>

                </div>

              </div>

              <p className="italic text-gray-300">
                {radio.message}
              </p>

              <button className="mt-8 w-full rounded-xl border border-red-600 bg-red-600/10 py-3 font-semibold transition hover:bg-red-600">
                ▶ Play Radio
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default RadioPreview;