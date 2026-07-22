import GlassCard from "./GlassCard";

function WeatherCard({ weather }) {
  if (!weather || !weather.available) {
    return (
      <GlassCard>
        <h2 className="text-2xl font-bold text-white">
          Weather
        </h2>

        <p className="mt-4 text-gray-400">
          Weather data unavailable.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <h2 className="mb-6 text-2xl font-bold text-white">
        🌤 Live Weather
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-gray-400">Air</p>
          <h3 className="text-3xl font-bold">
            {weather.air_temperature}°C
          </h3>
        </div>

        <div>
          <p className="text-gray-400">Track</p>
          <h3 className="text-3xl font-bold">
            {weather.track_temperature}°C
          </h3>
        </div>

        <div>
          <p className="text-gray-400">Humidity</p>
          <h3 className="text-3xl font-bold">
            {weather.humidity}%
          </h3>
        </div>

        <div>
          <p className="text-gray-400">Wind</p>
          <h3 className="text-3xl font-bold">
            {weather.wind_speed} km/h
          </h3>
        </div>

      </div>
    </GlassCard>
  );
}

export default WeatherCard;