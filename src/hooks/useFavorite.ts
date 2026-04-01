import FavoriteContext from "@/contexts/FavoriteContext";
import { useContext } from "react";

export function useFavorite() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used within FavoriteProvider");
  }

  return context;
}
