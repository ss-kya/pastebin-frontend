import { useState, useEffect } from "react";
import { IPaste } from "../utils/types";

import EditPost from "./EditPost";

function ViewPosts(): JSX.Element {
  const [posts, setPosts] = useState<IPaste[]>([]);

  // delete post
  const deletePost = async (id: number) => {
    try {
      const deletePost = await fetch(`http://localhost:4000/post/${id}`, {
        method: "DELETE",
      });

      setPosts(posts.filter((post) => post.post_id !== id));

      console.log(deletePost);
    } catch (err) {
      console.log(err.message);
    }
  };

  // fetch all posts
  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:4000/viewposts");
      const jsonData = await response.json();
      console.log(jsonData);

      setPosts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  // [] makes one request

  return (
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.post_id}>
            <td>{post.post_title}</td>
            <td>{post.post_desc}</td>
            <td>
              <EditPost post={post}/>
              {/* Pass props into editPost component to connect post description and 'edit' modal */}
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => deletePost(post.post_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ViewPosts;
