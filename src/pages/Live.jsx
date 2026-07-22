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

      if (sessionData.status === "fulfilled") {
        setSession(sessionData.value);
      }

      if (weatherData.status === "fulfilled") {
        setWeather(weatherData.value);
      }

      if (timingData.status === "fulfilled") {
        setTiming(timingData.value);
      }

      if (raceControlData.status === "fulfilled") {
        setRaceControl(raceControlData.value);
      }

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
      <div className="flex min-h-screen items-center justify-center bg-[#080808] text-2xl text-white">
        Loading Live Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-8 py-10">

        <RaceCountdown
          raceDate={session?.race_date}
          eventName={session?.event}
        />

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-5xl font-black">
              Live Race Center
            </h1>

            <p className="mt-2 text-lg text-gray-400">
              {session?.event}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Last Updated:{" "}
              {lastUpdated
                ? lastUpdated.toLocaleTimeString()
                : "--"}
            </p>
          </div>

          <div
            className={`rounded-full px-5 py-2 font-bold ${
              session?.live
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
          >
            {session?.live ? "● LIVE" : "● UPCOMING"}
          </div>

        </div>

        <div className="mt-8">
          <GlassCard>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              <div>
                <p className="text-sm text-gray-400">
                  Current Session
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {session?.session}
                </h2>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Status
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {session?.status}
                </h2>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Country
                </p>

                <h2 className="mt-2 text-2xl">
                  {session?.country}
                </h2>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Location
                </p>

                <h2 className="mt-2 text-2xl">
                  {session?.location}
                </h2>
              </div>

            </div>

          </GlassCard>
        </div>

        {/* Full Width Live Driver Positions */}

        <div className="mt-8">

          <TimingTable
            timing={timing}
            lastUpdated={lastUpdated}
          />

        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

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