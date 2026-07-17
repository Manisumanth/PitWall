import { Flag, CloudSun, Timer } from "lucide-react";

function LiveRaceCard() {
  return (
    <div className="mx-auto -mt-12 max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-red-600/10">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <div className="h-3 w-3 animate-pulse rounded-full bg-red-600"></div>

          <span className="font-semibold text-red-500">
            LIVE
          </span>

        </div>

        <span className="text-sm text-gray-400">
          Lap 34 / 44
        </span>

      </div>

      <h2 className="mt-5 text-3xl font-bold text-white">
        Belgian Grand Prix
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">Leader</span>
          <span className="font-semibold text-white">
            Max Verstappen
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Weather</span>

          <span className="flex items-center gap-2 text-white">
            <CloudSun size={18} />
            24°C
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Track Status</span>

          <span className="flex items-center gap-2 text-green-400">
            <Flag size={18} />
            Green Flag
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Time Remaining</span>

          <span className="flex items-center gap-2 text-white">
            <Timer size={18} />
            22:18
          </span>
        </div>

      </div>

    </div>
  );
}

export default LiveRaceCard;