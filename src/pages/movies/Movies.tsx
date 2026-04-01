import type { APIResponse } from "@/types";
import { useLoaderData } from "react-router";
import { MovieCard } from "./MovieCard";
import { useFavorite } from "@/hooks/useFavorite";
import toast from "react-hot-toast";

const Movies = () => {
  const { results } = useLoaderData() as APIResponse;
  const { addFavorite } = useFavorite();

  return (
    <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto pt-20">
      {results.map((movie, i) => (
        <MovieCard
          key={i}
          movie={movie}
          addFavorite={async () => {
            toast.success("Added movie successfully");
            addFavorite(movie);
          }}
        />
      ))}
    </div>
  );
};

export default Movies;
