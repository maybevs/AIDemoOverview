import { postRouter } from "~/server/api/routers/post";
import { demosRouter } from "~/server/api/routers/demo";
import { createTRPCRouter } from "~/server/api/trpc";
import { aiDemoAssetRouter } from "./routers/aidemoasset";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  demos: demosRouter,
  aiDemoAssets: aiDemoAssetRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
