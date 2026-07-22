import GlassCard from "../ui/GlassCard";

function CountdownCard({ countdown }) {
  return (
    <GlassCard>

      <h2 className="text-2xl font-bold">
        Starts In
      </h2>

      <div className="mt-8 text-center">

        <h1 className="text-5xl font-black text-red-500">
          {countdown}
        </h1>

      </div>

    </GlassCard>
  );
}

export default CountdownCard;