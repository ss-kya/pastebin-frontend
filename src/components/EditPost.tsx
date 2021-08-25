import { useState } from "react";
import { IProp } from "../utils/types";
import AddComment from "./AddComment";
import ViewComments from "./ViewComments";

function EditPost({ post }: IProp): JSX.Element {
  const [title, setTitle] = useState(post.post_title);
  const [description, setDescription] = useState(post.post_desc);

  // Edit description function
  const updatePost = async () => {
    try {
      const body = { title, description };
      // {post_id:title, post_desc:description}
      const response = await fetch(
        `http://localhost:4000/post/${post.post_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  // const afterUpdateCallback = (func:IProp) => {
  //   setTitle()
  //   setDescription(func)
  // };

  return (
    <>
      {/* Trigger the modal with a button*/}
      <button
        type="button"
        className="btn btn-info btn-md btn-warning"
        data-toggle="modal"
        data-target={`#id${post.post_id}`}
      >
        📝
      </button>

      {/* Modal */}
      <div id={`id${post.post_id}`} className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal header */}
            <div className="modal-header">
              <h4 className="modal-title">Edit Paste</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            {/* Modal content */}
            <div className="modal-body">
              <h6>
                <b>Title</b>
              </h6>
              <input
                type="text"
                className="form-control"
                placeholder="Your title here..."
                value={title}
                // Update title description when text is edited
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="modal-body">
              <h6>
                <b>Text</b>
              </h6>
              <textarea
                id="edit-textbox"
                placeholder="Your text here..."
                className="form-control mb-3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <AddComment post={post} />
              <ViewComments post={post} />
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => updatePost()}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-modal"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPost;
