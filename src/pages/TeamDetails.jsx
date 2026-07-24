import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TeamDetails() {
  const { teamName } = useParams();

  const [team, setTeam] = useState(null);

  useEffect(() => {
    async function loadTeam() {
      try {
        const response = await fetch(
          `https://pitwall-backend-c6yr.onrender.com/api/teams/${encodeURIComponent(teamName)}`
        );

        const data = await response.json();
        setTeam(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadTeam();
  }, [teamName]);

  if (!team) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080808] text-white">
        <h2 className="animate-pulse text-lg sm:text-xl">
          Loading Team...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-12">

        {/* Header */}

        <p className="text-sm font-bold tracking-[0.25em] text-red-500">
          CONSTRUCTOR PROFILE
        </p>

        <h1 className="mt-3 break-words text-3xl font-black sm:text-4xl lg:text-6xl">
          {team.team}
        </h1>

        {/* Card */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 sm:mt-10 sm:p-8">

          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            Drivers
          </h2>

          <div className="space-y-4">

            {team.drivers.map((driver) => (
              <div
                key={driver}
                className="rounded-xl bg-white/5 p-3 text-sm transition-colors duration-300 hover:bg-white/10 sm:p-4 sm:text-base"
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