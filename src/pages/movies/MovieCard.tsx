import { Button } from "@/components/ui/button";
import {
  Card,
  //   CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Movie } from "@/types";

interface MovieCardProps {
  movie: Movie;
  addFavorite?: () => Promise<void>;
}

export function MovieCard({ movie, addFavorite }: MovieCardProps) {
  const handleClick = async (): Promise<void> => {
    if (addFavorite) addFavorite();
  };
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle>{movie.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {movie.overview}
        </CardDescription>
      </CardHeader>
      {addFavorite && (
        <CardFooter>
          <Button className="w-full" onClick={handleClick}>
            Add to favorite
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
