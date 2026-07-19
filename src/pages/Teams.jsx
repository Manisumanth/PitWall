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
      <div className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="mb-2 text-5xl font-black">
          Formula 1 Teams
        </h1>

        <p className="mb-10 text-gray-400">
          Current Constructor Line-up
        </p>

        {loading ? (
          <h2 className="text-xl">Loading...</h2>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">

            {teams.map((team) => (

              <Link
                key={team.team}
                to={`/teams/${encodeURIComponent(team.team)}`}
                className="block"
              >

                <GlassCard>

                  <h2 className="text-3xl font-bold">
                    {team.team}
                  </h2>

                  <div className="mt-6 space-y-3">

                    {team.drivers.map((driver) => (

                      <div
                        key={driver}
                        className="rounded-xl bg-white/5 p-4"
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