function DriverPositions() {
  const drivers = [
    { pos: "P1", name: "Max Verstappen", gap: "+0.000" },
    { pos: "P2", name: "Lando Norris", gap: "+1.284" },
    { pos: "P3", name: "Charles Leclerc", gap: "+3.812" },
    { pos: "P4", name: "Oscar Piastri", gap: "+5.914" },
    { pos: "P5", name: "George Russell", gap: "+8.302" },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Driver Positions
      </h2>

      <div className="space-y-4">
        {drivers.map((driver) => (
          <div
            key={driver.pos}
            className="flex justify-between rounded-xl border border-white/5 p-3 hover:bg-white/5"
          >
            <span>
              {driver.pos} • {driver.name}
            </span>

            <span>{driver.gap}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DriverPositions;