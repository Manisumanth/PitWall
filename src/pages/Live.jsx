import DriverPositions from "../components/live/DriverPositions";
import WeatherCard from "../components/live/WeatherCard";
import TrackStatus from "../components/live/TrackStatus";

function Live() {
  return (
    <div className="min-h-screen bg-[#090909] px-8 py-10 text-white">

      {/* Header */}

      <div className="mb-10">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 animate-pulse rounded-full bg-red-600"></div>

          <span className="font-semibold text-red-500">
            LIVE SESSION
          </span>

        </div>

        <h1 className="mt-4 text-5xl font-bold">
          Belgian Grand Prix
        </h1>

        <p className="mt-3 text-gray-400">
          Race • Lap 34 / 44
        </p>

      </div>

      {/* Dashboard */}

      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-8">
          <DriverPositions />
        </div>

        <div className="col-span-4">
          <WeatherCard />
        </div>

        <div className="col-span-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

            <h2 className="mb-6 text-2xl font-bold">
              Radio Check
            </h2>

            <div className="space-y-4">

              <div className="rounded-xl border border-white/10 p-4">

                <h3 className="font-semibold">
                  Max Verstappen
                </h3>

                <p className="mt-2 text-gray-400">
                  "My tyres are gone."
                </p>

              </div>

              <div className="rounded-xl border border-white/10 p-4">

                <h3 className="font-semibold">
                  Lewis Hamilton
                </h3>

                <p className="mt-2 text-gray-400">
                  "Box this lap."
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="col-span-4">
          <TrackStatus />
        </div>

      </div>

    </div>
  );
}

export default Live;