let posts = [
  { id: 1, title: "First Post", content: "Hello from backend" },
  { id: 2, title: "Second Post", content: "Another backend post" }
];

const getPosts = (req, res) => {
  res.json(posts);
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newPost = { id: Date.now(), title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
};

module.exports = { getPosts, createPost };
