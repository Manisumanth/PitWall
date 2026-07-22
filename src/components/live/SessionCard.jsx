import GlassCard from "../ui/GlassCard";

function SessionCard({ session, weekend }) {
  return (
    <GlassCard>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-4xl font-black">
            {session.event}
          </h2>

          <p className="mt-4 text-2xl">
            {session.session}
          </p>

          {weekend && (
            <div className="mt-6 space-y-2 text-gray-300">

              <p>📍 {weekend.location}</p>

              <p>🌍 {weekend.country}</p>

              <p>🏁 Round {weekend.round}</p>

            </div>
          )}

        </div>

        <div>

          {session.live ? (

            <div className="rounded-full bg-red-600 px-6 py-3 font-bold">
              🔴 LIVE
            </div>

          ) : (

            <div className="rounded-full bg-yellow-500 px-6 py-3 font-bold text-black">
              UPCOMING
            </div>

          )}

        </div>

      </div>

    </GlassCard>
  );
}

export default SessionCard;