import React from "react";
import { useGetPostsQuery, useDeletePostMutation } from "./rtkq";
import { useDispatch } from "react-redux";
import { setSelectedPost } from "./slice";

const PostsList = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const dispatch = useDispatch();
//   Fetches posts from the API using useGetPostsQuery.
// Deletes posts using useDeletePostMutation.
//Selects a post to edit using setSelectedPost.

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <button onClick={() => dispatch(setSelectedPost(post))}>
            Edit
          </button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
