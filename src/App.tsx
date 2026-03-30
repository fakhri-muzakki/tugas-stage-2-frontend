import { useEffect, useState } from "react";
import WeatherForm from "./components/WeatherForm";
import type { WeatherData } from "./types";
import WeatherCard from "./components/WeatherCard";
import WeatherCardSkeleton from "./components/skeletons/WeatherCardSkeleton";
import { getWeather } from "./lib/weather";
import { useDebounce } from "./hooks/useDebounce";

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherData | null>(null);
  const [status, setStatus] = useState<"Loading" | "Error" | null>(null);

  const debounceValue = useDebounce(city, 500);

  useEffect(() => {
    if (debounceValue.length === 0) {
      return;
    }

    const fetchData = async (): Promise<void> => {
      try {
        setStatus("Loading");
        const result = await getWeather(debounceValue);
        setData(result);
        setStatus(null);
      } catch (error) {
        setStatus("Error");
        console.log(error);
      }
    };

    fetchData();
  }, [debounceValue]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl space-y-6">
        {/* Form */}
        <WeatherForm city={city} setCity={setCity} />

        {/* Result */}
        {status === "Loading" ? (
          <WeatherCardSkeleton />
        ) : data ? (
          <WeatherCard data={data} />
        ) : null}

        {status === "Error" && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-sm">
            Kota tidak ditemukan atau terjadi kesalahan
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
