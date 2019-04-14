import React from "react";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navBar">
    <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="/saved">
        Saved Books
      </a>
      <a className="navbar-brand" href="/search">
        Search for Books
      </a>
      <i className="fas fa-book"></i>
      <a target={"_blank"} href="https://books.google.ca/">
      <img className="navbar-brand googleLogo" alt="google" src="https://res.cloudinary.com/bootcamp2019/image/upload/c_scale,h_80,w_150/v1555113309/googleLogo.jpg"/>
       </a>
    </nav>
  );
}

export default Nav;
