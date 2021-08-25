import { useState, useEffect } from "react";
import { IPaste } from "../utils/types";

import EditPost from "./EditPost";

function ViewPosts(): JSX.Element {
  const [posts, setPosts] = useState<IPaste[]>([]);

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

  // delete post
  const deletePost = async (id: number) => {
    try {
      const deletePosts = await fetch(`http://localhost:4000/post/${id}`, {
        method: "DELETE",
      });

      console.log(deletePosts);
      const filteredPosts = posts.filter((post) => post.post_id !== id);
      setPosts(filteredPosts);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <table id="posttable" className="table table table-hover mt-5 text-center">
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
              <EditPost post={post} />
              {/* afterUpdateCallback={getPosts}  */}
              {/* Pass props into editPost component to connect post description and 'edit' modal */}
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => deletePost(post.post_id)}
              >
                ⓧ
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ViewPosts;
