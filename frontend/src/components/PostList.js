import { Link } from "react-router-dom";
import "./PostList.css";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content.substring(0, 80)}...</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
