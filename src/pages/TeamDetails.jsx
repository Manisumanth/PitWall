import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TeamDetails() {
  const { teamName } = useParams();

  const [team, setTeam] = useState(null);

  useEffect(() => {
    async function loadTeam() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/teams/${encodeURIComponent(teamName)}`
      );

      const data = await response.json();

      setTeam(data);
    }

    loadTeam();
  }, [teamName]);

  if (!team) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-6xl px-8 py-12">

        <p className="text-red-500 font-bold">
          CONSTRUCTOR PROFILE
        </p>

        <h1 className="mt-2 text-6xl font-black">
          {team.team}
        </h1>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="mb-6 text-2xl font-bold">
            Drivers
          </h2>

          <div className="space-y-4">

            {team.drivers.map((driver) => (
              <div
                key={driver}
                className="rounded-xl bg-white/5 p-4"
              >
                {driver}
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default TeamDetails;