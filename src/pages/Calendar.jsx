import GlassCard from "../components/ui/GlassCard";

const races = [
  {
    round: 14,
    name: "Belgian Grand Prix",
    circuit: "Spa-Francorchamps",
    date: "27 Jul 2026",
    status: "NEXT",
  },
  {
    round: 15,
    name: "Hungarian Grand Prix",
    circuit: "Hungaroring",
    date: "03 Aug 2026",
    status: "UPCOMING",
  },
  {
    round: 16,
    name: "Dutch Grand Prix",
    circuit: "Zandvoort",
    date: "31 Aug 2026",
    status: "UPCOMING",
  },
  {
    round: 17,
    name: "Italian Grand Prix",
    circuit: "Monza",
    date: "07 Sep 2026",
    status: "UPCOMING",
  },
];

function Calendar() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="mb-2 text-5xl font-black">
          Race Calendar
        </h1>

        <p className="mb-10 text-gray-400">
          Complete Formula 1 season schedule.
        </p>

        <div className="space-y-6">

          {races.map((race) => (

            <GlassCard key={race.round}>

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-red-500">
                    ROUND {race.round}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    {race.name}
                  </h2>

                  <p className="mt-1 text-gray-400">
                    {race.circuit}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-xl font-semibold">
                    {race.date}
                  </p>

                  <span className="mt-3 inline-block rounded-full bg-red-600/20 px-4 py-2 text-red-400">
                    {race.status}
                  </span>

                </div>

              </div>

            </GlassCard>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Calendar;