import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const commentRouter = router({
  addComment: publicProcedure
    .input(z.object({ comment: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const comment = await ctx.prisma.comment.create({
        data: {
          comment: input.comment,
        },
      });
      return comment;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.comment.findMany();
  }),
});
