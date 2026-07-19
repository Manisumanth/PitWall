import CircuitMap from "../components/live/CircuitMap";
import GlassCard from "../components/ui/GlassCard";

function Live() {
  const drivers = [
    {
      position: "P1",
      name: "Lando Norris",
      team: "McLaren",
      gap: "+0.000",
      tyre: "Medium",
      tyreColor: "bg-yellow-400",
      teamColor: "bg-orange-500",
      change: "▲ 1",
      lastLap: "1:45.321",
    },
    {
      position: "P2",
      name: "Max Verstappen",
      team: "Red Bull",
      gap: "+1.284",
      tyre: "Hard",
      tyreColor: "bg-white",
      teamColor: "bg-blue-500",
      change: "▼ 1",
      lastLap: "1:45.512",
    },
    {
      position: "P3",
      name: "Charles Leclerc",
      team: "Ferrari",
      gap: "+4.125",
      tyre: "Soft",
      tyreColor: "bg-red-500",
      teamColor: "bg-red-700",
      change: "—",
      lastLap: "1:45.690",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-7xl px-8 py-12">

        {/* Header */}

        <div className="mb-12 flex items-center justify-between">

          <div>

            <span className="rounded-full border border-red-600 bg-red-600/10 px-4 py-2 text-red-500">
              🔴 LIVE SESSION
            </span>

            <h1 className="mt-5 text-5xl font-black">
              Belgian Grand Prix
            </h1>

            <p className="mt-3 text-gray-400">
              Lap 34 / 44 • Green Flag • DRS Enabled
            </p>

          </div>

          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-4">

            <p className="text-sm text-green-400">
              Session Status
            </p>

            <h2 className="text-2xl font-bold">
              LIVE
            </h2>

          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* LEFT */}

          <div className="space-y-6 lg:col-span-2">

            <GlassCard title="🗺 Circuit Map">

              <CircuitMap />

            </GlassCard>

            <GlassCard title="🏁 Driver Timing Tower">

              <div className="space-y-4">

                {drivers.map((driver) => (

                  <div
                    key={driver.position}
                    className="flex items-center justify-between rounded-2xl bg-black/30 p-5 transition-all duration-300 hover:bg-black/50"
                  >

                    <div className="flex items-center gap-5">

                      <div className={`h-14 w-1 rounded-full ${driver.teamColor}`}></div>

                      <div className="text-2xl font-bold text-red-500">
                        {driver.position}
                      </div>

                      <div>

                        <h3 className="font-semibold">
                          {driver.name}
                        </h3>

                        <p className="text-sm text-gray-400">
                          {driver.team}
                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-6">

                      <span className="text-green-400">
                        {driver.change}
                      </span>

                      <span
                        className={`h-4 w-4 rounded-full ${driver.tyreColor}`}
                      ></span>

                      <span className="text-sm">
                        {driver.tyre}
                      </span>

                      <span className="font-mono text-gray-300">
                        {driver.lastLap}
                      </span>

                      <span className="font-bold">
                        {driver.gap}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </GlassCard>

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            <GlassCard title="🌦 Weather">

              <div className="space-y-2">

                <p>🌡 Track : 41°C</p>

                <p>☀ Air : 27°C</p>

                <p>💧 Humidity : 61%</p>

                <p>💨 Wind : 8 km/h</p>

              </div>

            </GlassCard>

            <GlassCard title="📻 Latest Radio">

              <p className="italic text-gray-400">
                "Box this lap. Push on the out lap."
              </p>

            </GlassCard>

            <GlassCard title="🤖 AI Strategy">

              <p className="text-gray-400">
                AI predicts a 78% chance that Norris keeps the lead if he extends this stint by 2 laps before switching to hard tyres.
              </p>

            </GlassCard>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Live;