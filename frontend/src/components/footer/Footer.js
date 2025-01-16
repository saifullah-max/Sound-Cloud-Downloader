import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "2px 0", // Reduced padding for smaller height
      }}
    >
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center flex-wrap"
          style={{ gap: "10px" }} // Adjusted gap for better spacing
        >
          {/* Home Link as Button */}
          <a
            href="/"
            className="btn border-dark text-light pt-3"
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            SoundCloud Downloader
          </a>

          {/* Quick Links */}
          <ul className="nav">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link text-light px-2" // Reduced horizontal padding for links
                style={{ fontSize: "0.9rem" }}
              >
               Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about"
                className="nav-link text-light px-2" // Reduced horizontal padding for links
                style={{ fontSize: "0.9rem" }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/contact"
                className="nav-link text-light px-2"
                style={{ fontSize: "0.9rem" }}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/privacy-policy"
                className="nav-link text-light px-2"
                style={{ fontSize: "0.9rem" }}
              >
                Privacy & Policy
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/terms-condition"
                className="nav-link text-light px-2"
                style={{ fontSize: "0.9rem" }}
              >
                Terms & Conditions
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/disclaimer"
                className="nav-link text-light px-2"
                style={{ fontSize: "0.9rem" }}
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div
          className="text-center mt-3" // Adjusted margin-top for tighter layout
          style={{ borderTop: "1px solid #555", paddingTop: "8px" }} // Reduced padding
        >
          <p className="text-light mb-0" style={{ fontSize: "0.8rem" }}>
            &copy; 2025 SoundCloud Downloader. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
