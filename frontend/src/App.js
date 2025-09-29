import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/PostPage";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "Hello World" },
    { id: 2, title: "Second Post", content: "Another post here" },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/create" element={<CreatePage onAddPost={handleAddPost} />} />
        <Route path="/post/:id" element={<PostPage posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;
