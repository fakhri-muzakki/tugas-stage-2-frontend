import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post } from "@/types";
import { Link } from "react-router";

export default function PostCard({ id, title, body }: Post) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-4">
      <CardHeader>
        <CardTitle className="line-clamp-1"> {title} </CardTitle>
        <CardDescription>{body}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          to={{
            pathname: `/posts/${id}`,
          }}
        >
          <Button className="w-full">Detail</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
