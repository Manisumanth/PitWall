function WeatherCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Weather
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>Track</span>
          <span>42°C</span>
        </div>

        <div className="flex justify-between">
          <span>Air</span>
          <span>27°C</span>
        </div>

        <div className="flex justify-between">
          <span>Humidity</span>
          <span>61%</span>
        </div>

        <div className="flex justify-between">
          <span>Wind</span>
          <span>12 km/h</span>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;