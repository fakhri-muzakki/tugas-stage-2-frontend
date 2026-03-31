import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post } from "@/types";
import { Link, useLoaderData } from "react-router";

const PostDetail = () => {
  const { title, body } = useLoaderData() as Post;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="relative mx-auto w-full max-w-sm pt-4">
        <CardHeader>
          <CardTitle> {title} </CardTitle>
          <CardDescription>{body}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            to={{
              pathname: `/posts`,
            }}
          >
            <Button className="w-full">Back</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostDetail;
