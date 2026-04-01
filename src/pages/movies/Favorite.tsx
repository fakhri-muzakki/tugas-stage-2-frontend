import { MovieCard } from "./MovieCard";

import { useFavorite } from "@/hooks/useFavorite";

const Favorite = () => {
  const { favorites } = useFavorite();

  return (
    <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto pt-20">
      {favorites.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default Favorite;
