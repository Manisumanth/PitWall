import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getDriverStandings,
  getConstructorStandings,
} from "../services/backendService";
import GlassCard from "../components/ui/GlassCard";

function Standings() {
  const [driverStandings, setDriverStandings] = useState([]);
  const [constructorStandings, setConstructorStandings] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStandings() {
      try {
        const [drivers, constructors] = await Promise.all([
          getDriverStandings(),
          getConstructorStandings(),
        ]);

        setDriverStandings(drivers);
        setConstructorStandings(constructors);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadStandings();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center">
        <h2 className="text-2xl font-bold">Loading Standings...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="text-5xl font-black">
          Championship Standings
        </h1>

        <p className="mt-3 mb-12 text-gray-400">
          Current Formula 1 World Championship
        </p>

        {/* DRIVER STANDINGS */}

        <h2 className="mb-6 text-3xl font-bold text-red-500">
          Driver Championship
        </h2>

        <div className="space-y-5">

          {driverStandings.map((driver) => (

            <Link
              key={driver.code}
              to={`/drivers/${driver.code}`}
              className="block"
            >

              <GlassCard>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-6">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-xl font-bold">
                      {driver.position}
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {driver.driver}
                      </h3>

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

        {/* CONSTRUCTOR STANDINGS */}

        <h2 className="mt-20 mb-6 text-3xl font-bold text-red-500">
          Constructor Championship
        </h2>

        <div className="space-y-5">

          {constructorStandings.map((team) => (

            <GlassCard key={team.team}>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-6">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black text-xl font-bold">
                    {team.position}
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {team.team}
                    </h3>

                    <p className="text-gray-400">
                      Constructor
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <h2 className="text-3xl font-black">
                    {team.points}
                  </h2>

                  <p className="text-gray-400">
                    {team.wins} Wins
                  </p>

                </div>

              </div>

            </GlassCard>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Standings;