import { HandlerContext } from "$fresh/server.ts";
import data from "../../data/data.json" assert { type: "json" };

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
