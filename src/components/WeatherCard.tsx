import type { WeatherData } from "../types";

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold">
          {data.name}, {data.sys.country}
        </h2>
        <p className="text-neutral-400 text-sm capitalize">
          {data.weather[0].description}
        </p>
      </div>

      {/* Main Info */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-neutral-800 rounded-xl p-3">
          <p className="text-sm text-neutral-400">Temperature</p>
          <p className="text-lg font-medium">{data.main.temp}°C</p>
        </div>

        <div className="bg-neutral-800 rounded-xl p-3">
          <p className="text-sm text-neutral-400">Feels Like</p>
          <p className="text-lg font-medium">{data.main.feels_like}°C</p>
        </div>

        <div className="bg-neutral-800 rounded-xl p-3">
          <p className="text-sm text-neutral-400">Humidity</p>
          <p className="text-lg font-medium">{data.main.humidity}%</p>
        </div>

        <div className="bg-neutral-800 rounded-xl p-3">
          <p className="text-sm text-neutral-400">Pressure</p>
          <p className="text-lg font-medium">{data.main.pressure} hPa</p>
        </div>

        <div className="bg-neutral-800 rounded-xl p-3 col-span-2">
          <p className="text-sm text-neutral-400">Wind Speed</p>
          <p className="text-lg font-medium">{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
