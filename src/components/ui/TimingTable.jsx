import GlassCard from "./GlassCard";

const TEAM_COLORS = {
  McLaren: "#FF8700",
  Ferrari: "#DC0000",
  Mercedes: "#00D2BE",
  "Red Bull Racing": "#1E41FF",
  "Red Bull": "#1E41FF",
  "Aston Martin": "#006F62",
  Aston: "#006F62",
  Alpine: "#FF87BC",
  Williams: "#005AFF",
  Haas: "#B6BABD",
  "Haas F1 Team": "#B6BABD",
  RB: "#6692FF",
  Sauber: "#52E252",
};

function TimingTable({ timing, lastUpdated }) {
  if (!timing) {
    return (
      <GlassCard>
        <div className="flex h-96 items-center justify-center text-gray-400">
          Loading live timing...
        </div>
      </GlassCard>
    );
  }

  if (!timing.live) {
    return (
      <GlassCard>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              Live Driver Positions
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Updated {lastUpdated ? lastUpdated.toLocaleTimeString() : "--"}
            </p>
          </div>

          <span className="rounded-full bg-gray-700 px-4 py-2 text-sm">
            OFFLINE
          </span>
        </div>

        <div className="flex h-72 items-center justify-center">
          <div className="text-center">

            <h3 className="text-2xl font-bold text-gray-300">
              No Live Session
            </h3>

            <p className="mt-3 text-gray-500">
              Driver positions will appear automatically when a session starts.
            </p>

          </div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard>

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            Live Driver Positions
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Updated {lastUpdated?.toLocaleTimeString()}
          </p>

        </div>

        <span className="animate-pulse rounded-full bg-red-600 px-4 py-2 text-sm font-bold">
          ● LIVE
        </span>

      </div>

      <div className="grid grid-cols-12 border-b border-gray-700 pb-3 text-sm uppercase tracking-wider text-gray-500">

        <div className="col-span-1">
          Pos
        </div>

        <div className="col-span-2">
          Driver
        </div>

        <div className="col-span-5">
          Team
        </div>

        <div className="col-span-4 text-right">
          Status
        </div>

      </div>

      <div className="divide-y divide-gray-800">

        {timing.drivers.map((driver) => {

          const color =
            TEAM_COLORS[driver.team] || "#666";

          return (

            <div
              key={driver.driver}
              className="grid grid-cols-12 items-center py-4 hover:bg-[#151515] transition"
            >

              <div className="col-span-1 font-black text-xl">
                P{driver.position}
              </div>

              <div className="col-span-2 font-bold">
                {driver.driver}
              </div>

              <div className="col-span-5 flex items-center gap-3">

                <div
                  className="h-5 w-1 rounded-full"
                  style={{
                    backgroundColor: color,
                  }}
                />

                <span>{driver.team}</span>

              </div>

              <div className="col-span-4 flex justify-end">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    driver.status === "Running"
                      ? "bg-green-500/20 text-green-400"
                      : driver.status === "Finished"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {driver.status}
                </span>

              </div>

            </div>

          );

        })}

      </div>

    </GlassCard>
  );
}

export default TimingTable;