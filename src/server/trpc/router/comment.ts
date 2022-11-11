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
  getAllComments: publicProcedure
    .input(z.object({ letter: z.string() }))
    .query(({ ctx }) => {
      return ctx.prisma.comment.findMany();
    }),
});
