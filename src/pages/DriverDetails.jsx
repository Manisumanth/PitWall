import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard";

function DriverDetails() {
  const { driverCode } = useParams();

  const [driver, setDriver] = useState(null);

  useEffect(() => {
    async function loadDriver() {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/drivers/${driverCode}`
        );

        const data = await response.json();
        setDriver(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadDriver();
  }, [driverCode]);

  if (!driver) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
        Loading Driver...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-8 py-12">

        <p className="text-red-500 font-bold tracking-widest">
          DRIVER PROFILE
        </p>

        <h1 className="mt-3 text-5xl font-black">
          {driver.first_name} {driver.last_name}
        </h1>

        <p className="mt-3 text-xl text-gray-400">
          #{driver.number} • {driver.team} • {driver.country}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <GlassCard>
            <h2 className="mb-6 text-2xl font-bold">
              Season Statistics
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="text-gray-400">Championship Position</span>
                <span>{driver.championship_position ?? "--"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Points</span>
                <span>{driver.points ?? "--"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Wins</span>
                <span>{driver.wins ?? "--"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Podiums</span>
                <span>{driver.podiums ?? "--"}</span>
              </div>

            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="mb-6 text-2xl font-bold">
              Session Information
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="text-gray-400">Driver Code</span>
                <span>{driver.code}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Fastest Lap</span>
                <span>{driver.fastest_lap}</span>
              </div>

            </div>
          </GlassCard>

        </div>

        <div className="mt-8">
          <GlassCard>

            <h2 className="mb-6 text-2xl font-bold">
              Recent Race Results
            </h2>

            {driver.recent_results?.length ? (
              <div className="space-y-4">
                {driver.recent_results.map((race, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-white/10 pb-3"
                  >
                    <span>{race.race}</span>
                    <span className="font-bold">{race.position}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No race results available.
              </p>
            )}

          </GlassCard>
        </div>

      </div>
    </div>
  );
}

export default DriverDetails;