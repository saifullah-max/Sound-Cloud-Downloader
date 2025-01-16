import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#f7faff", // Very light blue background
          minHeight: "100vh", // Ensure the content spans full viewport height
          padding: "25px 10px", // Add padding to the entire section
        }}
      >
        <div
          className="container p-4 shadow-sm"
          style={{
            backgroundColor: "#fff", // White box
            borderRadius: "8px",
            width: "100%",
            maxWidth: "1100px", // Increased maxWidth for wider card
            margin: "25px 10px", // Top/bottom: 25px, Left/right: 10px
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Title */}
          <h1 className="text-center mb-3" style={{ fontWeight: "bold" }}>
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <p className="text-center text-muted mb-4">
            <a
              href="/"
              className="text-decoration-none text-secondary text-decoration-underline"
            >
              Home
            </a>{" "}
            / Contact Us
          </p>

          {/* Contact Details */}
          <div style={{ padding: "10px 15px" }}>
            <p>
              We’d love to hear from you! Whether you have questions, feedback,
              or suggestions, feel free to get in touch with us.
            </p>
            
            <div className="mb-3">
              <h5 className="mb-4 mt-4">Contact Details:</h5>
              <p>
                <strong className="mb-2">Email:</strong>{" "}<br/>
                <a href="mailto:demo@example.com" className="text-secondary">
                  demo@example.com
                </a>
              </p>
              <p>
                <strong className="mb-2">Mobile:</strong>{" "}<br/>
                <a href="tel:+1234567890" className="text-secondary">
                  +123 456 7890
                </a>
              </p>
              <p>
                <strong className="mb-2">Social:</strong>{" "}<br/>
                <a
                  href="https://www.example-social-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  Visit our Social Page
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
