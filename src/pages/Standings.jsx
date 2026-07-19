import GlassCard from "../components/ui/GlassCard";

const standings = [
  ["Lando Norris", "McLaren", 264],
  ["Max Verstappen", "Red Bull", 251],
  ["Charles Leclerc", "Ferrari", 217],
  ["Oscar Piastri", "McLaren", 204],
  ["George Russell", "Mercedes", 180],
];

function Standings() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-6xl px-8 py-12">

        <h1 className="mb-10 text-5xl font-black">
          Driver Standings
        </h1>

        <div className="space-y-5">

          {standings.map((driver, index) => (

            <GlassCard key={driver[0]}>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-6">

                  <span className="text-3xl font-black text-red-500">
                    P{index + 1}
                  </span>

                  <div>

                    <h2 className="text-xl font-bold">
                      {driver[0]}
                    </h2>

                    <p className="text-gray-400">
                      {driver[1]}
                    </p>

                  </div>

                </div>

                <span className="text-3xl font-bold">
                  {driver[2]}
                </span>

              </div>

            </GlassCard>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Standings;