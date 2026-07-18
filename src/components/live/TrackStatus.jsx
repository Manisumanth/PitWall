function TrackStatus() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Track Status
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>Flag</span>
          <span className="text-green-400">
            Green Flag
          </span>
        </div>

        <div className="flex justify-between">
          <span>DRS</span>
          <span>Enabled</span>
        </div>

        <div className="flex justify-between">
          <span>Safety Car</span>
          <span>No</span>
        </div>

        <div className="flex justify-between">
          <span>VSC</span>
          <span>No</span>
        </div>

      </div>

    </div>
  );
}

export default TrackStatus;