import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  // const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedin");
    // navigate("/login", { replace: true });
  }

  return (
    <header>
      <nav className="navbar-div">
        <Link to="/" className="logo">
          #VANGO
        </Link>
        <div className="nav-links">
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
          <Link to="/login">Login</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </header>
  );
}