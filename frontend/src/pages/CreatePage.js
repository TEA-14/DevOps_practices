import { useState } from "react";
import axios from "axios";
import "./CreatePage.css";

function CreatePage({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    axios.post("http://localhost:5000/api/posts", { title, content })
      .then(res => {
        onAddPost(res.data); // update UI immediately
        setTitle("");
        setContent("");
      })
      .catch(err => console.error("Error creating post:", err));
  };

  return (
    <div className="container">
      <h1>Create a New Post</h1>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default CreatePage;
