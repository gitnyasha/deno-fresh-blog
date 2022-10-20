import { PageProps, Handlers } from "$fresh/server.ts";
import data from "../../data/data.json" assert { type: "json" };
import Comment from "../../islands/Comment.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
  const post = data.find((post) => post.id === parseInt(ctx.params.id));
    if (!post) {
      return new Response("Post not found", { status: 404 });
    }
    return ctx.render(post);
  },
};

export default function SinglePost(props: PageProps) {
  const id = props.params.id;
  const post = data.find((post) => post.id === parseInt(id));

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
