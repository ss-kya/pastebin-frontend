import { useState, useEffect } from "react";
import { CommentProp, ListCommentProp } from "../utils/types";

const ViewComments = ({ post }: ListCommentProp): JSX.Element => {
  const [comments, setComments] = useState<CommentProp[]>([]);

  const getComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/post/${post.post_id}/comments`
      );
      const jsonData = await response.json();
      setComments(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getComments();
  });
  // [] makes one request

  const deleteComment = async (id: number) => {
    try {
      const deletePost = await fetch(`http://localhost:4000/comments/${id}`, {
        method: "DELETE",
      });

      const filteredComments = comments.filter(
        (comment) => comment.comment_id !== id
      );
      setComments(filteredComments);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th>Comments</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {comments.map((comment) => (
          <tr key={comment.comment_id}>
            <td>{comment.comment_desc}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => deleteComment(comment.comment_id)}
              >
                ⓧ
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewComments;
