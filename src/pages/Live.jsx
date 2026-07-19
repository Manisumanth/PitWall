import { useEffect, useState } from "react";
import { getCurrentSession } from "../services/raceService";
import GlassCard from "../components/ui/GlassCard";

function Live() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function loadSession() {
      try {
        const data = await getCurrentSession();
        setSession(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadSession();
  }, []);

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
        Loading Live Session...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-black">
              Live Race Center
            </h1>

            <p className="mt-2 text-gray-400">
              Powered by OpenF1
            </p>

          </div>

          <div className="rounded-full bg-red-600 px-5 py-2 font-bold">
            ● LIVE
          </div>

        </div>

        <GlassCard>

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <p className="text-gray-400">
                Current Session
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {session.session_name}
              </h2>

            </div>

            <div>

              <p className="text-gray-400">
                Circuit
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {session.circuit_short_name}
              </h2>

            </div>

            <div>

              <p className="text-gray-400">
                Country
              </p>

              <h2 className="mt-2 text-2xl">
                {session.country_name}
              </h2>

            </div>

            <div>

              <p className="text-gray-400">
                Session Start
              </p>

              <h2 className="mt-2 text-2xl">
                {new Date(session.date_start).toLocaleString()}
              </h2>

            </div>

          </div>

        </GlassCard>

      </div>

    </div>
  );
}

export default Live;