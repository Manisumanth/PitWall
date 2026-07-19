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
      <div className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="mb-2 text-5xl font-black">
          Formula 1 Drivers
        </h1>

        <p className="mb-10 text-gray-400">
          Official Driver List
        </p>

        {loading ? (
          <h2 className="text-xl">Loading...</h2>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {drivers.map((driver) => (
              <Link
                key={driver.number}
                to={`/drivers/${driver.code}`}
                className="block"
              >
                <GlassCard>

                  <div className="space-y-3">

                    <div className="flex items-center justify-between">

                      <h2 className="text-2xl font-bold">
                        {driver.code}
                      </h2>

                      <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold">
                        #{driver.number}
                      </span>

                    </div>

                    <h3 className="text-xl">
                      {driver.first_name} {driver.last_name}
                    </h3>

                    <p className="text-gray-400">
                      {driver.team}
                    </p>

                    <p className="text-red-500">
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