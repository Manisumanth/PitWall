import { useEffect, useState } from "react";
import GlassCard from "./GlassCard";

function RaceCountdown({ raceDate, eventName }) {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  function getRemainingTime() {
    if (!raceDate) return null;

    const difference = new Date(raceDate) - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [raceDate]);

  if (!raceDate) {
    return null;
  }

  if (!timeLeft) {
    return (
      <GlassCard>
        <h2 className="text-2xl font-bold">
          🔴 Race Weekend
        </h2>

        <p className="mt-4 text-gray-400">
          The race has started or finished.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard>

      <h2 className="text-3xl font-bold">
        🏁 {eventName}
      </h2>

      <p className="mt-2 text-gray-400">
        Race Starts In
      </p>

      <div className="mt-8 grid grid-cols-4 gap-4">

        <div className="rounded-xl bg-[#111] p-5 text-center">
          <h1 className="text-4xl font-black">{timeLeft.days}</h1>
          <p className="text-gray-400">Days</p>
        </div>

        <div className="rounded-xl bg-[#111] p-5 text-center">
          <h1 className="text-4xl font-black">{timeLeft.hours}</h1>
          <p className="text-gray-400">Hours</p>
        </div>

        <div className="rounded-xl bg-[#111] p-5 text-center">
          <h1 className="text-4xl font-black">{timeLeft.minutes}</h1>
          <p className="text-gray-400">Minutes</p>
        </div>

        <div className="rounded-xl bg-[#111] p-5 text-center">
          <h1 className="text-4xl font-black">{timeLeft.seconds}</h1>
          <p className="text-gray-400">Seconds</p>
        </div>

      </div>

    </GlassCard>
  );
}

export default RaceCountdown;