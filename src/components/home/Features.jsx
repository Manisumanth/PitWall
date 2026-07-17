import {
  Activity,
  Bot,
  Radio,
  BarChart3,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Activity size={34} className="text-red-500" />,
      title: "Live Telemetry",
      description:
        "Track every driver's lap times, tyre strategy, DRS, sectors and live race data.",
    },
    {
      icon: <Bot size={34} className="text-red-500" />,
      title: "Race Engineer",
      description:
        "Ask AI anything about Formula 1, teams, drivers, strategies and race history.",
    },
    {
      icon: <Radio size={34} className="text-red-500" />,
      title: "Radio Check",
      description:
        "Listen to the latest team radios with AI explanations and transcripts.",
    },
    {
      icon: <BarChart3 size={34} className="text-red-500" />,
      title: "AI Analytics",
      description:
        "Race predictions, tyre degradation, pit strategy and performance insights.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <h2 className="text-center text-5xl font-bold text-white">
        Why <span className="text-red-600">PitWall?</span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
        Everything a Formula 1 fan needs, powered by AI and live race data.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_30px_rgba(225,6,0,0.35)]"
          >
            {feature.icon}

            <h3 className="mt-6 text-2xl font-semibold text-white">
              {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;