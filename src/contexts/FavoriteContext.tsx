import type { Movie } from "@/types";
import { createContext } from "react";

type FavoriteContextType = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => Promise<void>;
};

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export default FavoriteContext;
