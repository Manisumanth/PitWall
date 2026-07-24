import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDrivers } from "../services/backendService";
import GlassCard from "../components/ui/GlassCard";

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDrivers() {
      try {
        const data = await getDrivers();
        setDrivers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDrivers();
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-12">

        {/* Heading */}

        <h1 className="mb-2 text-3xl font-black sm:text-4xl lg:text-5xl">
          Formula 1 Drivers
        </h1>

        <p className="mb-8 text-sm text-gray-400 sm:mb-10 sm:text-base">
          Official Driver List
        </p>

        {loading ? (
          <div className="flex justify-center py-20">
            <h2 className="text-lg sm:text-xl animate-pulse">
              Loading Drivers...
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {drivers.map((driver) => (
              <Link
                key={driver.number}
                to={`/drivers/${driver.code}`}
                className="block"
              >
                <GlassCard>

                  <div className="space-y-3">

                    <div className="flex items-center justify-between">

                      <h2 className="text-xl font-bold sm:text-2xl">
                        {driver.code}
                      </h2>

                      <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold sm:text-sm">
                        #{driver.number}
                      </span>

                    </div>

                    <h3 className="text-lg font-semibold sm:text-xl">
                      {driver.first_name} {driver.last_name}
                    </h3>

                    <p className="text-sm text-gray-400 sm:text-base">
                      {driver.team}
                    </p>

                    <p className="text-sm text-red-500 sm:text-base">
                      {driver.country}
                    </p>

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

export default Drivers;