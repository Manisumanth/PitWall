import GlassCard from "../components/ui/GlassCard";

const teams = [
  ["McLaren", "Mercedes", 468],
  ["Red Bull Racing", "Honda RBPT", 441],
  ["Ferrari", "Ferrari", 394],
  ["Mercedes", "Mercedes", 332],
  ["Aston Martin", "Mercedes", 142],
];

function Teams() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="mb-2 text-5xl font-black">
          Constructors
        </h1>

        <p className="mb-10 text-gray-400">
          Team championship standings.
        </p>

        <div className="space-y-5">

          {teams.map((team, index) => (

            <GlassCard key={team[0]}>

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-red-500">
                    P{index + 1}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    {team[0]}
                  </h2>

                  <p className="text-gray-400">
                    {team[1]}
                  </p>

                </div>

                <div className="text-4xl font-black">
                  {team[2]}
                </div>

              </div>

            </GlassCard>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Teams;