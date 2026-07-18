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
    <section className="bg-[#080808] px-8 py-28 text-white">

      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-5xl font-bold">
          Why <span className="text-red-600">PitWall</span>?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-400">
          Everything a Formula 1 fan needs in one premium dashboard.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

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
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
            >

              <div className="mb-6 text-red-500">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
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