import React, { useState, Fragment } from "react";
import { trpc } from "../utils/trpc";

type Comment = {
  comment: string;
  id: string;
  updatedAt: Date;
};
export default function GuestBook() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const { mutate: handleCommentSubmit } = trpc.comment.addComment.useMutation();
  const { data, isLoading } = trpc.comment.getAllComments.useQuery(
    { letter: "A" },
    {
      onSuccess: (data) => {
        setCommentList(data);
        console.log(data);
      },
    }
  );

  return (
    <>
      <h1 className="my-8 mb-1 text-center  font-author text-3xl font-medium opacity-80 lg:text-4xl">
        GuestBook
      </h1>
      {isLoading && <p className="my-8 text-center font-author">Loading...</p>}
      <section className="mx-auto mb-8 mt-8 grid w-11/12 max-w-[90rem] grid-cols-1 justify-center text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.map((data) => (
            <Fragment key={data.id}>
              <div className="mx-4 min-w-[200px] border p-2 text-left font-author shadow-md my-2">
                <h1 className="text-md font-medium leading-tight opacity-90 lg:text-xl">
                  {data.comment}
                </h1>
                <p>{data.updatedAt.toLocaleDateString()}</p>
              </div>
            </Fragment>
          ))}
      </section>

      <form className="fixed bottom-36 right-0 left-0 z-10 mx-auto flex min-h-[100px] max-w-[400px] resize-none justify-evenly rounded-xl ">
        <div className="relative mx-auto w-11/12">
          <textarea
            className="mx-auto  min-h-[130px] w-full resize-none border p-2 font-author text-xl font-medium opacity-90 shadow-sm"
            placeholder="Leave a positive comment! 😊"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <button
            className="absolute bottom-4 right-1 h-8 w-8 rounded-md bg-black "
            onClick={() => handleCommentSubmit({ comment: comment })}
          >
            🚀
          </button>
        </div>
      </form>
    </>
  );
}
