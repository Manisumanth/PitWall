import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DriverDetails() {
  const { driverCode } = useParams();

  const [driver, setDriver] = useState(null);

  useEffect(() => {
    async function loadDriver() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/drivers/${driverCode}`
      );

      const data = await response.json();

      setDriver(data);
    }

    loadDriver();
  }, [driverCode]);

  if (!driver) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-6xl px-8 py-12">

        <p className="text-red-500 font-bold">
          DRIVER PROFILE
        </p>

        <h1 className="mt-2 text-6xl font-black">
          {driver.first_name} {driver.last_name}
        </h1>

        <p className="mt-3 text-2xl text-gray-400">
          {driver.team}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Driver Information
            </h2>

            <div className="space-y-4">

              <p>
                <strong>Number:</strong> #{driver.number}
              </p>

              <p>
                <strong>Code:</strong> {driver.code}
              </p>

              <p>
                <strong>Country:</strong> {driver.country}
              </p>

              <p>
                <strong>Team:</strong> {driver.team}
              </p>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="mb-6 text-2xl font-bold">
              Session Statistics
            </h2>

            <div className="space-y-4">

              <p>
                <strong>Fastest Lap:</strong> {driver.fastest_lap}
              </p>

              <p>
                More statistics coming soon...
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DriverDetails;