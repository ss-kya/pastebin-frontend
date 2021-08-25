import { useState } from "react";
import { ListCommentProp } from "../utils/types";

function AddComment({ post }: ListCommentProp): JSX.Element {
  const [comment, setComment] = useState("");

  const updateComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { comment };
      const response = await fetch(
        `http://localhost:4000/post/${post.post_id}/comments/`,
        {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      // setComment(comment);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => updateComment(e)}>
        <input
          type="text"
          className="form-control"
          placeholder="Your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button className="btn btn-primary mt-2"> Add comment</button>
      </form>
    </div>
  );
}

export default AddComment;
