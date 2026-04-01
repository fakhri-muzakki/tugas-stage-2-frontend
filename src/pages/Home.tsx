// import WeatherCardSkeleton from "@/components/skeletons/WeatherCardSkeleton";
// import WeatherCard from "@/components/WeatherCard";
// import WeatherForm from "@/components/WeatherForm";
// import { useDebounce } from "@/hooks/useDebounce";
// import { getWeather } from "@/lib/weather";
// import type { WeatherData } from "@/types";
// import { useEffect, useState } from "react";

// const Home = () => {
//   const [city, setCity] = useState("");
//   const [data, setData] = useState<WeatherData | null>(null);
//   const [status, setStatus] = useState<"Loading" | "Error" | null>(null);

//   const debounceValue = useDebounce(city, 500);

//   useEffect(() => {
//     if (debounceValue.length === 0) {
//       return;
//     }

//     const fetchData = async (): Promise<void> => {
//       try {
//         setStatus("Loading");
//         const result = await getWeather(debounceValue);
//         setData(result);
//         setStatus(null);
//       } catch (error) {
//         setStatus("Error");
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [debounceValue]);

//   return (
//     <main className="min-h-screen flex items-center justify-center p-6">
//       <div className="w-full max-w-xl space-y-6">
//         {/* Form */}
//         <WeatherForm city={city} setCity={setCity} />

//         {/* Result */}
//         {status === "Loading" ? (
//           <WeatherCardSkeleton />
//         ) : data ? (
//           <WeatherCard data={data} />
//         ) : null}

//         {status === "Error" && (
//           <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-sm">
//             Kota tidak ditemukan atau terjadi kesalahan
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default Home;

const movies = [
  {
    id: 1,
    title: "Inception",
    image: "https://via.placeholder.com/500x750",
  },
  {
    id: 2,
    title: "Interstellar",
    image: "https://via.placeholder.com/500x750",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://via.placeholder.com/500x750",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    image: "https://via.placeholder.com/500x750",
  },
  {
    id: 5,
    title: "Parasite",
    image: "https://via.placeholder.com/500x750",
  },
];

const PopularMovies = () => {
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Popular Movies</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-stone-600 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="w-full aspect-2/3 overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
              {/* Title */}
              <h2 className="font-semibold text-lg line-clamp-2">
                {movie.title}
              </h2>

              {/* Button */}
              <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
                Add to Favorite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
