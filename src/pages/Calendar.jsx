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

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-12">

        {/* Header */}

        <h1 className="mb-2 text-3xl font-black sm:text-4xl lg:text-5xl">
          Formula 1 Calendar
        </h1>

        <p className="mb-8 text-sm text-gray-400 sm:mb-10 sm:text-base">
          Official Formula 1 Schedule ({new Date().getFullYear()})
        </p>

        {loading ? (
          <div className="flex justify-center py-20">
            <h2 className="animate-pulse text-lg sm:text-xl">
              Loading Calendar...
            </h2>
          </div>
        ) : (
          <div className="space-y-5">

            {races.map((race) => (

              <GlassCard key={race.round}>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                  {/* Race Details */}

                  <div>

                    <p className="mb-2 text-sm font-bold text-red-500 sm:text-base">
                      ROUND {race.round}
                    </p>

                    <h2 className="text-xl font-bold sm:text-2xl">
                      {race.name}
                    </h2>

                    <p className="mt-2 text-sm text-gray-400 sm:text-base">
                      {race.location}, {race.country}
                    </p>

                  </div>

                  {/* Date */}

                  <div className="text-left sm:text-right">

                    <p className="text-lg font-semibold">
                      {race.race.split(" ")[0]}
                    </p>

                    <p className="text-sm text-red-500">
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