import GlassCard from "../ui/GlassCard";

function WeekendSchedule({ weekend }) {

  if (!weekend) return null;

  return (
    <GlassCard>

      <h2 className="mb-8 text-3xl font-black">
        Race Weekend
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>Practice 1</span>
          <span>{weekend.practice1}</span>
        </div>

        <div className="flex justify-between">
          <span>Practice 2</span>
          <span>{weekend.practice2}</span>
        </div>

        <div className="flex justify-between">
          <span>Practice 3</span>
          <span>{weekend.practice3}</span>
        </div>

        <div className="flex justify-between">
          <span>Qualifying</span>
          <span>{weekend.qualifying}</span>
        </div>

        <div className="flex justify-between font-bold text-red-500">
          <span>Race</span>
          <span>{weekend.race}</span>
        </div>

      </div>

    </GlassCard>
  );
}

export default WeekendSchedule;