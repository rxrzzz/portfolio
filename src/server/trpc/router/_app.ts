import { router } from "../trpc";
import { commentRouter } from "./comment";

export const appRouter = router({
  comment: commentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
