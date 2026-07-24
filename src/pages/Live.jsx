import { useEffect, useState } from "react";
import {
  getLiveSession,
  getWeather,
  getTiming,
  getRaceControl,
} from "../services/backendService";

import GlassCard from "../components/ui/GlassCard";
import WeatherCard from "../components/ui/WeatherCard";
import RaceCountdown from "../components/ui/RaceCountdown";
import TimingTable from "../components/ui/TimingTable";
import RaceControlCard from "../components/ui/RaceControlCard";

function Live() {
  const [session, setSession] = useState(null);
  const [weather, setWeather] = useState(null);
  const [timing, setTiming] = useState(null);
  const [raceControl, setRaceControl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  async function loadData() {
    try {
      const [sessionData, weatherData, timingData, raceControlData] =
        await Promise.allSettled([
          getLiveSession(),
          getWeather(),
          getTiming(),
          getRaceControl(),
        ]);

      if (sessionData.status === "fulfilled") setSession(sessionData.value);
      if (weatherData.status === "fulfilled") setWeather(weatherData.value);
      if (timingData.status === "fulfilled") setTiming(timingData.value);
      if (raceControlData.status === "fulfilled")
        setRaceControl(raceControlData.value);

      setLastUpdated(new Date());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();

    const interval = setInterval(loadData, 10000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
        <h2 className="animate-pulse text-xl font-bold sm:text-2xl">
          Loading Live Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">

        <RaceCountdown
          raceDate={session?.race_date}
          eventName={session?.event}
        />

        {/* Header */}

        <div className="mt-8 flex flex-col gap-5 lg:mt-10 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              Live Race Center
            </h1>

            <p className="mt-2 text-base text-gray-400 sm:text-lg">
              {session?.event}
            </p>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Last Updated:{" "}
              {lastUpdated
                ? lastUpdated.toLocaleTimeString()
                : "--"}
            </p>

          </div>

          <div
            className={`self-start rounded-full px-5 py-2 text-sm font-bold sm:self-auto ${
              session?.live
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
          >
            {session?.live ? "● LIVE" : "● UPCOMING"}
          </div>

        </div>

        {/* Session Card */}

        <div className="mt-8">

          <GlassCard>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

              <div>

                <p className="text-sm text-gray-400">
                  Current Session
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  {session?.session}
                </h2>

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Status
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  {session?.status}
                </h2>

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Country
                </p>

                <h2 className="mt-2 break-words text-xl sm:text-2xl">
                  {session?.country}
                </h2>

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Location
                </p>

                <h2 className="mt-2 break-words text-xl sm:text-2xl">
                  {session?.location}
                </h2>

              </div>

            </div>

          </GlassCard>

        </div>

        {/* Timing */}

        <div className="mt-8 overflow-x-auto">

          <TimingTable
            timing={timing}
            lastUpdated={lastUpdated}
          />

        </div>

        {/* Bottom Cards */}

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

          <WeatherCard weather={weather} />

          <RaceControlCard
            messages={raceControl}
          />

        </div>

      </div>

    </div>
  );
}

export default Live;