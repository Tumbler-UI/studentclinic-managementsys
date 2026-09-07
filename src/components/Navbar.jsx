import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          Explore<span>KE</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/map">Map</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/plan">Plan a Trip</Link>
          <Link to="/about">About</Link>
        </div>

        <Link to="/explore" className="nav-button">
          Explore Kenya
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;