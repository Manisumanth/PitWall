import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTeams } from "../services/backendService";
import GlassCard from "../components/ui/GlassCard";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTeams() {
      try {
        const data = await getTeams();
        setTeams(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadTeams();
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-12">

        {/* Heading */}

        <h1 className="mb-2 text-3xl font-black sm:text-4xl lg:text-5xl">
          Formula 1 Teams
        </h1>

        <p className="mb-8 text-sm text-gray-400 sm:mb-10 sm:text-base">
          Current Constructor Line-up
        </p>

        {loading ? (
          <div className="flex justify-center py-20">
            <h2 className="animate-pulse text-lg sm:text-xl">
              Loading Teams...
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">

            {teams.map((team) => (

              <Link
                key={team.team}
                to={`/teams/${encodeURIComponent(team.team)}`}
                className="block"
              >

                <GlassCard>

                  <h2 className="text-2xl font-bold break-words sm:text-3xl">
                    {team.team}
                  </h2>

                  <div className="mt-5 space-y-3 sm:mt-6">

                    {team.drivers.map((driver) => (

                      <div
                        key={driver}
                        className="rounded-xl bg-white/5 p-3 text-sm transition-colors duration-300 hover:bg-white/10 sm:p-4 sm:text-base"
                      >
                        {driver}
                      </div>

                    ))}

                  </div>

                </GlassCard>

              </Link>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Teams;