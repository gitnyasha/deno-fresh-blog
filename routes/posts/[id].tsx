import { PageProps } from "$fresh/server.ts";
import data from "../../data/data.json" assert { type: "json" };
import Comment from "../../islands/Comment.tsx";

export default function SinglePost(props: PageProps) {
  const id = props.params.id;
  const post = data.find((post) => post.id === parseInt(id));

  if (!post) {
    return <h1>404 - Post {props.params.id} not found</h1>;
  }

  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <div class="flex flex-col gap-2 w-full">
        <h1 class="text-3xl font-bold">{post.title}</h1>
        <p class="flex-grow-1">{post.body}</p>
        <h4 class="text-2xl font-bold">Add Comments</h4>
        <Comment />
      </div>
    </div>
  );
}
