import React from 'react'
import PostList from '../components/PostList'

function HomePage() {
  // Dummy data for now
  const posts = [
    { id: 1, title: "First Blog Post", content: "This is my first post" },
    { id: 2, title: "Second Blog Post", content: "This is my second post" },
    { id: 3, title: "Third Blog Post", content: "This is my third post" },
  ];

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default HomePage