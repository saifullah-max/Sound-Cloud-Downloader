import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa"; // Font Awesome menu icon
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const TermsAndConditions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Adjust this value as per the fixed header height
      const elementTop = element.getBoundingClientRect().top; // Position relative to viewport
      const offsetPosition = elementTop + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id); // Set the active section
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#f7faff", // Light background
          minHeight: "100vh",
          padding: "25px 10px",
        }}
      >
        <div
          className="container p-4 shadow-sm"
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            maxWidth: "1100px",
            margin: "25px 10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Title */}
          <h1 className="text-center mb-3" style={{ fontWeight: "bold" }}>
            Terms and Conditions
          </h1>

          {/* Breadcrumb */}
          <p className="text-center text-muted mb-4">
            <a href="/" className="text-decoration-none text-secondary text-decoration-underline">
              Home
            </a>{" "}
            / Terms and Conditions
          </p>

          {/* Table of Contents */}
          <div
            className="position-relative"
            style={{
              marginBottom: "30px",
              marginLeft: "10px", // Adjust as needed for spacing
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f7f7f7",
                padding: "10px 15px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                maxWidth: "300px", // Restrict box width
              }}
            >
              <h5
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Table of Contents
              </h5>
              <button
                className="btn btn-sm"
                onClick={toggleMenu}
                style={{ color: "darkgray" }} // Dark menu icon
              >
                <FaBars />
              </button>
            </div>
            {isMenuOpen && (
              <ul
                className="list-unstyled mt-3"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  maxWidth: "300px", // Match with box width
                  marginTop: "10px",
                }}
              >
                {[
                  "acceptance-of-terms",
                  "use-of-content",
                  "intellectual-property",
                  "third-party-links",
                  "disclaimer-of-liability",
                  "changes-to-terms",
                  "contact-us",
                ].map((id, index) => (
                  <li key={index} className="mb-2">
                    <button
                      className={`btn btn-link p-0 text-decoration-underline ${
                        activeSection === id ? "text-secondary" : "text-dark"
                      }`}
                      onClick={() => scrollToSection(id)}
                      style={{ textDecoration: "none" }}
                    >
                      {id
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: "10px 15px" }}>
            <section id="acceptance-of-terms">
              <h5>Acceptance of Terms</h5>
              <p>
                By using TXRoadhouseMenu, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section id="use-of-content">
              <h5>Use of Content</h5>
              <p>
                All content on TXRoadhouseMenu, including text, images, and other materials, is provided for informational purposes only. While we strive for accuracy, we do not guarantee that all information is up-to-date, complete, or error-free.
                <br />
                You may not:
                <ul>
                  <li>Republish, reproduce, distribute, or commercially exploit our content without prior written permission.</li>
                  <li>Use our content for unlawful or unauthorized purposes.</li>
                </ul>
              </p>
            </section>

            <section id="intellectual-property">
              <h5>Intellectual Property</h5>
              <p>
                TXRoadhouseMenu is an independent website and is not affiliated with Texas Roadhouse. All trademarks, logos, and brand names mentioned belong to their respective owners. The content on our site is original unless otherwise stated and is protected by copyright law.
              </p>
            </section>

            <section id="third-party-links">
              <h5>Third-Party Links</h5>
              <p>
                Our website may contain links to third-party websites, including the official Texas Roadhouse website. These links are provided for your convenience, but we are not responsible for the content, policies, or practices of any third-party sites.
              </p>
            </section>

            <section id="disclaimer-of-liability">
              <h5>Disclaimer of Liability</h5>
              <p>
                TXRoadhouseMenu is not liable for any errors, omissions, or inaccuracies in the information provided. We are not responsible for any losses or damages arising from the use of our site or reliance on its content.
              </p>
            </section>

            <section id="changes-to-terms">
              <h5>Changes to Terms</h5>
              <p>
                We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting. Your continued use of our website signifies your acceptance of any updates.
              </p>
            </section>

            <section id="contact-us">
              <h5>Contact Us</h5>
              <p>
                If you have any questions or concerns about these Terms and Conditions, please contact us via our Contact Us page.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
