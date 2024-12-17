import React, { useState } from "react";
import { useAddPostMutation } from "./rtkq";

const AddPost = () => {
  const [addPost] = useAddPostMutation();
  const [form, setForm] = useState({ title: "", body: "" });
  //Uses useAddPostMutation to send a POST request to the API.

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ ...form, userId: 1 });
    setForm({ title: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={form.body}
        onChange={(e) => setForm({ ...form, body: e.target.value })}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
