# 📝 Blog Platform (Dockerized)

A simple blog platform with a **React frontend** and **Node.js backend**, containerized with Docker.

---

## 🚀 Run with Docker (from Docker Hub)

### Prerequisites
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop).

### Steps
1. Clone this repo:
   ```sh
   git clone https://github.com/TEA-14/DevOps_practices.git
   cd blogplatform


Run with Docker Compose:

docker compose up


Open in your browser:

Frontend → http://localhost:3000

Backend → http://localhost:5000/api/posts

🛠️ Images on Docker Hub

Backend: tea1408/blog-backend:latest

Frontend: tea1408/blog-frontend:latest

Run them directly without cloning:

docker run -p 5000:5000 tea1408/blog-backend:latest
docker run -p 3000:3000 tea1408/blog-frontend:latest