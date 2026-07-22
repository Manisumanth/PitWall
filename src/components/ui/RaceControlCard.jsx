import GlassCard from "./GlassCard";

function RaceControlCard({ messages }) {

  return (

    <GlassCard>

      <h2 className="mb-6 text-2xl font-bold">
        🚩 Race Control
      </h2>

      {!messages || messages.length === 0 ? (

        <p className="text-gray-400">
          No race control messages.
        </p>

      ) : (

        <div className="space-y-4">

          {messages.map((item, index) => (

            <div
              key={index}
              className="rounded-lg bg-[#111] p-4"
            >

              <p className="font-bold text-red-500">
                {item.category}
              </p>

              <p className="mt-2">
                {item.message}
              </p>

            </div>

          ))}

        </div>

      )}

    </GlassCard>

  );
}

export default RaceControlCard;