import React, { useState } from "react";
import { useUpdatePostMutation } from "./rtkq";
import { useSelector } from "react-redux";

const EditPost = () => {
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  const [updatePost] = useUpdatePostMutation();
  const [form, setForm] = useState(selectedPost || {});
//   Retrieves the selected post from the Redux store.
// Uses useUpdatePostMutation to send a PUT request.

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(form);
  };

  if (!selectedPost) return <p>Select a post to edit.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        value={form.body}
        onChange={(e) => setForm({ ...form, body: e.target.value })}
      />
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
