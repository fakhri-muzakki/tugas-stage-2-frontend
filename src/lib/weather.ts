import type { WeatherData } from "../types";

export async function getWeather(city: string): Promise<WeatherData> {
  const apiKey = "8aa95c1864be058c9986c62ebe43e618";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city},ID&units=metric&lang=id`;
  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error("Failed to retrieve data");
  }

  return res.json();
}
