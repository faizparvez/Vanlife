import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="site-logo">VANGO</Link>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}