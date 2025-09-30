const express = require("express");
const cors = require("cors");
const postRoutes = require("./src/routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
