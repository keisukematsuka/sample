import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="app_tittle">My Library</h1>
        <nav>
          <Link className="nav_item">Books</Link>
          <Link className="nav_item">Categories</Link>
          <Link className="nav_item">Stats</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
