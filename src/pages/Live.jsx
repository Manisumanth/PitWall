import { useEffect, useState } from "react";

import {
  getLiveSession,
  getCalendar,
  getTiming,
} from "../services/backendService";

import LiveHeader from "../components/live/LiveHeader";
import SessionCard from "../components/live/SessionCard";
import CountdownCard from "../components/live/CountdownCard";
import WeekendSchedule from "../components/live/WeekendSchedule";
import TimingTable from "../components/live/TimingTable";

function Live() {
  const [session, setSession] = useState(null);
  const [weekend, setWeekend] = useState(null);
  const [timing, setTiming] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const live = await getLiveSession();
        const calendar = await getCalendar();
        const timingData = await getTiming();

        setSession(live);
        setTiming(timingData);

        const raceWeekend = calendar.find(
          (race) => race.round === live.round
        );

        setWeekend(raceWeekend);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();

    const interval = setInterval(loadData, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!session || session.live) return;

    const timer = setInterval(() => {
      const start = new Date(session.start_time);
      const now = new Date();

      const diff = start - now;

      if (diff <= 0) {
        setCountdown("Starting...");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, [session]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080808] text-white">
        <h1 className="text-3xl font-bold">
          Loading Live Dashboard...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-8 py-12">

        <LiveHeader />

        <SessionCard
          session={session}
          weekend={weekend}
        />

        {!session.live && (
          <div className="mt-8">
            <CountdownCard countdown={countdown} />
          </div>
        )}

        <div className="mt-8">
          <WeekendSchedule weekend={weekend} />
        </div>

        <div className="mt-8">
          <TimingTable timing={timing} />
        </div>

      </div>

    </div>
  );
}

export default Live;