import FavoriteContext from "@/contexts/FavoriteContext";
import { useAuth } from "@/hooks/useAuth";
import type { Movie } from "@/types";
import { useEffect, useState } from "react";

interface FavoriteProviderProps {
  children: React.ReactNode;
}
const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    if (!user) return;

    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/movies/favorites?userId=${user?.id}`,
        );

        if (!res.ok) {
          throw new Error("Terjadi error pada saat fetch favorite");
        }

        const json = await res.json();
        setFavorites(json.data);
      } catch (error) {
        console.log(error);
        throw new Error("Terjadi error pada saat fetch favorite");
      }
    };

    fetchData();
  }, [user]);

  const addFavorite = async (movie: Movie): Promise<void> => {
    if (!user?.id) return;

    try {
      const res = await fetch("http://localhost:3000/api/movies/favorites", {
        method: "POST",
        body: JSON.stringify({ ...movie, userId: user?.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Terjadi error pada saat post data favorite");
      }

      setFavorites((prev) => [...prev, movie]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
