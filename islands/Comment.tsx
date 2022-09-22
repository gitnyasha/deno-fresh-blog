// deno-lint-ignore-file
// islands/Comment.tsx

import { useState } from "preact/hooks";

export default function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setComments([...comments, comment]);
    setComment("");
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.currentTarget.value)}
          placeholder="Add a comment"
          class="flex-grow-1 border(gray-100 2) p-2"
        />
        <button
          type="submit"
          class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
        >
          Submit
        </button>
      </form>
      {comments.map((comment: any) => (
        <div class="border(gray-100 2) p-2 my-2">{comment}</div>
      ))}
    </div>
  );
}
