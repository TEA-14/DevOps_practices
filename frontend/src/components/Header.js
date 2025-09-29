import { Link } from 'react-router-dom';
import "./Header.css";

import React from 'react'

function Header() {
  return (
    <nav style={{padding: "10px", background: "#333", color: "#fff"}}>
      <Link to="/" style={{ color: "#fff", marginRight: "15px"}}> Home</Link>
      <Link to="/create" style={{ color: "#fff"}}> Create Post</Link>
    </nav>
  )
}

export default Header