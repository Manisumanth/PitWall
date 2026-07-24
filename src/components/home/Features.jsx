import { motion } from "framer-motion";
import {
  Radio,
  Bot,
  Flag,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: <Flag size={34} />,
    title: "Live Race Tracking",
    desc: "Watch every Formula 1 session with live timing, positions and race updates.",
  },
  {
    icon: <Radio size={34} />,
    title: "Radio Check",
    desc: "Listen to the latest team radio messages with AI-generated transcripts.",
  },
  {
    icon: <Bot size={34} />,
    title: "Race Engineer",
    desc: "Ask our AI anything about races, teams, strategies or Formula 1 history.",
  },
  {
    icon: <Activity size={34} />,
    title: "Telemetry",
    desc: "View tyres, sectors, gaps, pit stops and race analytics in real time.",
  },
];

function Features() {
  return (
    <section className="bg-[#080808] px-5 py-20 text-white sm:px-8 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
          Why <span className="text-red-600">PitWall</span>?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl px-2 text-center text-base leading-7 text-gray-400 sm:mt-5 sm:text-lg">
          Everything a Formula 1 fan needs in one premium dashboard.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:gap-8">

          {features.map((feature, index) => (

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
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-600/10 sm:p-8"
            >

              <div className="mb-5 text-red-500">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold sm:text-2xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400 sm:mt-4 sm:text-base sm:leading-8">
                {feature.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;