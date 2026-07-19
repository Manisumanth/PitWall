import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDriverStandings } from "../services/backendService";
import GlassCard from "../components/ui/GlassCard";

function Standings() {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStandings() {
      try {
        const data = await getDriverStandings();
        setStandings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadStandings();
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="mb-2 text-5xl font-black">
          Driver Championship
        </h1>

        <p className="mb-10 text-gray-400">
          Current Formula 1 World Championship Standings
        </p>

        {loading ? (
          <h2 className="text-xl">Loading...</h2>
        ) : (
          <div className="space-y-5">

            {standings.map((driver) => (

              <Link
                key={driver.code}
                to={`/drivers/${driver.code}`}
                className="block"
              >

                <GlassCard>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-6">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-bold">
                        {driver.position}
                      </div>

                      <div>

                        <h2 className="text-2xl font-bold">
                          {driver.driver}
                        </h2>

                        <p className="text-gray-400">
                          {driver.team}
                        </p>

                      </div>

                    </div>

                    <div className="text-right">

                      <h2 className="text-3xl font-black">
                        {driver.points}
                      </h2>

                      <p className="text-gray-400">
                        {driver.wins} Wins
                      </p>

                    </div>

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

export default Standings;