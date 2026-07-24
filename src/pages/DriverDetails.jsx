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
        <h2 className="animate-pulse text-lg sm:text-xl">
          Loading Driver...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-12">

        {/* Header */}

        <p className="text-sm font-bold tracking-[0.25em] text-red-500">
          DRIVER PROFILE
        </p>

        <h1 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
          {driver.first_name} {driver.last_name}
        </h1>

        <p className="mt-3 text-base text-gray-400 sm:text-lg lg:text-xl">
          #{driver.number} • {driver.team} • {driver.country}
        </p>

        {/* Cards */}

        <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8">

          {/* Season Statistics */}

          <GlassCard>
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">
              Season Statistics
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-400 sm:text-base">
                  Championship Position
                </span>
                <span className="font-semibold">
                  {driver.championship_position}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-400 sm:text-base">
                  Points
                </span>
                <span className="font-semibold">
                  {driver.points}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-400 sm:text-base">
                  Wins
                </span>
                <span className="font-semibold">
                  {driver.wins}
                </span>
              </div>

            </div>
          </GlassCard>

          {/* Driver Information */}

          <GlassCard>
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">
              Driver Information
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-400 sm:text-base">
                  Driver Number
                </span>
                <span className="font-semibold">
                  #{driver.number}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-400 sm:text-base">
                  Driver Code
                </span>
                <span className="font-semibold">
                  {driver.code}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-400 sm:text-base">
                  Team
                </span>
                <span className="text-right font-semibold">
                  {driver.team}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="whitespace-nowrap text-sm text-gray-400 sm:text-base">
                  Country
                </span>
                <span className="break-words text-right font-semibold">
                  {driver.country || "N/A"}
                </span>
              </div>

            </div>
          </GlassCard>

        </div>

      </div>
    </div>
  );
}

export default DriverDetails;