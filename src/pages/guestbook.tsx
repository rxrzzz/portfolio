import { useState } from "react";
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
  trpc.comment.getAllComments.useQuery(
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
      <section className="mx-auto mb-8 w-11/12 mt-8 max-w-[90rem] text-center flex justify-center">
        {commentList &&
          commentList.map((data) => (
            <>
              <div key={data.id} className="min-w-[200px] font-author text-left p-2 border shadow-md mx-4">
                <h1 className="text-md font-medium leading-tight opacity-90 lg:text-xl">{data.comment}</h1>
                <p>{data.updatedAt.toLocaleDateString()}</p>
              </div>
            </>
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
