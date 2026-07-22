import GlassCard from "../ui/GlassCard";

function TimingTable({ timing }) {

  if (!timing) return null;

  if (!timing.live) {
    return (
      <GlassCard>

        <h2 className="text-3xl font-black mb-6">
          Live Timing
        </h2>

        <div className="py-12 text-center">

          <p className="text-2xl font-bold text-gray-300">
            No race currently in progress.
          </p>

          <p className="mt-3 text-gray-500">
            Live timing will automatically appear when a Formula 1 race starts.
          </p>

        </div>

      </GlassCard>
    );
  }

  return (
    <GlassCard>

      <h2 className="text-3xl font-black mb-8">
        Live Timing
      </h2>

      <div className="space-y-3">

        {timing.drivers.map((driver) => (

          <div
            key={driver.position}
            className="flex items-center justify-between rounded-xl bg-white/5 p-4 hover:bg-white/10 transition-all"
          >

            <div className="flex items-center gap-6">

              <div className="w-10 text-center text-red-500 font-black text-xl">
                {driver.position}
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  {driver.driver}
                </h3>

                <p className="text-sm text-gray-400">
                  {driver.team}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="font-semibold">
                {driver.status}
              </p>

            </div>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}

export default TimingTable;