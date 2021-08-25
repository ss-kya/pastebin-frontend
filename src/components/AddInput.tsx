import { useState } from "react";

function AddInput(): JSX.Element {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const onSubmitPost = async () => {
    try {
      const body = { title, description };
      const response = await fetch("http://localhost:4000/input", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
      // window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <form className="form-group mt-3" onSubmit={onSubmitPost}>
        <div>
          <label>Paste Title</label>
          <input
            id="titlebox"
            type="text"
            className="form-control"
            value={title}
            placeholder="Your title here..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="exampleFormControlTextarea1">Paste Text</label>
          <textarea
            id="textbox"
            value={description}
            placeholder="Your text here..."
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            // id="exampleFormControlTextarea1"
          ></textarea>
        </div>
        <button className="btn btn-success mt-3">Save Post</button>
      </form>
    </>
  );
}

export default AddInput;
