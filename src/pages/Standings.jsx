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
      <div className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
        <h2 className="animate-pulse text-xl font-bold sm:text-2xl">
          Loading Standings...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-12">

        {/* Header */}

        <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
          Championship Standings
        </h1>

        <p className="mt-3 mb-10 text-sm text-gray-400 sm:mb-12 sm:text-base">
          Current Formula 1 World Championship
        </p>

        {/* DRIVER STANDINGS */}

        <h2 className="mb-6 text-2xl font-bold text-red-500 sm:text-3xl">
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

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-4 sm:gap-6">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-lg font-bold sm:h-14 sm:w-14 sm:text-xl">
                      {driver.position}
                    </div>

                    <div>

                      <h3 className="text-lg font-bold sm:text-2xl">
                        {driver.driver}
                      </h3>

                      <p className="text-sm text-gray-400 sm:text-base">
                        {driver.team}
                      </p>

                    </div>

                  </div>

                  <div className="text-left sm:text-right">

                    <h2 className="text-2xl font-black sm:text-3xl">
                      {driver.points}
                    </h2>

                    <p className="text-sm text-gray-400">
                      {driver.wins} Wins
                    </p>

                  </div>

                </div>

              </GlassCard>

            </Link>

          ))}

        </div>

        {/* CONSTRUCTOR STANDINGS */}

        <h2 className="mt-16 mb-6 text-2xl font-bold text-red-500 sm:mt-20 sm:text-3xl">
          Constructor Championship
        </h2>

        <div className="space-y-5">

          {constructorStandings.map((team) => (

            <GlassCard key={team.team}>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4 sm:gap-6">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-black sm:h-14 sm:w-14 sm:text-xl">
                    {team.position}
                  </div>

                  <div>

                    <h3 className="text-lg font-bold break-words sm:text-2xl">
                      {team.team}
                    </h3>

                    <p className="text-sm text-gray-400">
                      Constructor
                    </p>

                  </div>

                </div>

                <div className="text-left sm:text-right">

                  <h2 className="text-2xl font-black sm:text-3xl">
                    {team.points}
                  </h2>

                  <p className="text-sm text-gray-400">
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