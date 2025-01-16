import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleHomeNavigation = () => {
    navigate("/"); // Navigates to the home page
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#222" }}
    >
      <div className="container-fluid">
        {/* Home Button */}
        <button
          className="btn text-light " // Styling the button
          onClick={handleHomeNavigation}
        >
          SoundCloud Downloader
        </button>

        {/* Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link text-light mx-3 link-secondary"
              href="/"
              style={{ fontWeight: "500" }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light mx-3 link-secondary"
              href="/about"
              style={{ fontWeight: "500" }}
            >
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light mx-3 link-secondary"
              href="/contact"
              style={{ fontWeight: "500" }}
            >
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light mx-3 link-secondary"
              href="/privacy-policy"
              style={{ fontWeight: "500" }}
            >
              Privacy and Policy
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light mx-3 link-secondary"
              href="/terms-condition"
              style={{ fontWeight: "500" }}
            >
              Terms & Conditions
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light mx-3 link-secondary"
              href="/disclaimer"
              style={{ fontWeight: "500" }}
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
