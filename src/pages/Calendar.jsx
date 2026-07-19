import { useEffect, useState } from "react";
import { getCalendar } from "../services/backendService";
import GlassCard from "../components/ui/GlassCard";

function Calendar() {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCalendar() {
      try {
        const data = await getCalendar();
        setRaces(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadCalendar();
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-8 py-12">

        <h1 className="mb-2 text-5xl font-black">
          Formula 1 Calendar
        </h1>

        <p className="mb-10 text-gray-400">
          Official Formula 1 Schedule ({new Date().getFullYear()})
        </p>

        {loading ? (
          <h2 className="text-xl">Loading...</h2>
        ) : (
          <div className="space-y-5">

            {races.map((race) => (

              <GlassCard key={race.round}>

                <div className="flex items-center justify-between">

                  <div>

                    <p className="mb-2 text-red-500 font-bold">
                      ROUND {race.round}
                    </p>

                    <h2 className="text-2xl font-bold">
                      {race.name}
                    </h2>

                    <p className="mt-2 text-gray-400">
                      {race.location}, {race.country}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="font-semibold">
                      {race.race.split(" ")[0]}
                    </p>

                    <p className="text-red-500">
                      Race Day
                    </p>

                  </div>

                </div>

              </GlassCard>

            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Calendar;