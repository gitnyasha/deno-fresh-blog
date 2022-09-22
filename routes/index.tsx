import data from "../data/data.json" assert { type: "json" };

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <div class="flex flex-col gap-2 w-full">
        <h1 class="text-3xl font-bold">All Posts</h1>
        <ul class="flex flex-col gap-2 w-full">
          {data.map((post) => (
            <li class="flex flex-col gap-2 w-full" key={post.id}>
              <h2 class="text-xl font-bold">
                <a href={`/posts/${post.id}`}>{post.title}</a>
              </h2>
              <p class="flex-grow-1">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
