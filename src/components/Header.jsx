import { NavLink, Link } from "react-router-dom";

export default function Header() { 
  return (
    <header>
      <nav className="navbar-div">
        <Link to="/" className="logo">VANGO</Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
    </header>
  );
}