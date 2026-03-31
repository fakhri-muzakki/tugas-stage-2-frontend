import { useLoaderData } from "react-router";
import PostCard from "./components/PostCard";
import type { Post } from "@/types";

const Posts = () => {
  const posts = useLoaderData() as Post[];

  return (
    <div className="grid grid-cols-3 gap-4 py-10">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
