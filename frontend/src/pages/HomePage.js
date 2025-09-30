import { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../components/PostList";

function HomePage() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  fetch(`${API_URL}/api/posts`)
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);

  return (
    <div className="container">
      <h1>Home Page</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default HomePage;
