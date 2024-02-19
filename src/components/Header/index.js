import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <div className="header-container">
    {/* Logo */}
    <img
      src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
      alt="website-logo"
      className="logo"
    />

    {/* Navigation Links */}
    <ul className="nav-items">
      {/* Home Link */}
      <Link to="/" className="link">
        <li className="nav-heading">Home</li>
      </Link>
      
      {/* Job Link */}
      <Link to="/jobs" className="link">
        <li className="nav-heading">Job</li>
      </Link>
      
      {/* About Link */}
      <Link to="/about" className="link">
        <li className="nav-heading">About us</li>
      </Link>
    </ul>

    {/* Download Button */}
    <button className="download-button" type="button">
      Download app
    </button>
  </div>
);

export default Header;
