import GlassCard from "../components/ui/GlassCard";

const drivers = [
  {
    number: 4,
    name: "Lando Norris",
    team: "McLaren",
    country: "🇬🇧 United Kingdom",
  },
  {
    number: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    country: "🇳🇱 Netherlands",
  },
  {
    number: 16,
    name: "Charles Leclerc",
    team: "Ferrari",
    country: "🇲🇨 Monaco",
  },
  {
    number: 81,
    name: "Oscar Piastri",
    team: "McLaren",
    country: "🇦🇺 Australia",
  },
  {
    number: 63,
    name: "George Russell",
    team: "Mercedes",
    country: "🇬🇧 United Kingdom",
  },
];

function Drivers() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="mb-2 text-5xl font-black">
          Drivers
        </h1>

        <p className="mb-10 text-gray-400">
          Formula 1 driver lineup.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {drivers.map((driver) => (

            <GlassCard key={driver.number}>

              <div className="mb-6 text-5xl font-black text-red-500">
                #{driver.number}
              </div>

              <h2 className="text-2xl font-bold">
                {driver.name}
              </h2>

              <p className="mt-2 text-gray-400">
                {driver.team}
              </p>

              <p className="mt-5">
                {driver.country}
              </p>

            </GlassCard>

          ))}

        </div>

      </div>
    </div>
  );
}

export default Drivers;