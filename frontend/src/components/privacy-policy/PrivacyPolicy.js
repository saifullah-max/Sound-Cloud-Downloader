import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa"; // Font Awesome menu icon
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>

          {/* Breadcrumb */}
          <p className="text-center text-muted mb-4">
            <a href="/" className="text-decoration-none text-secondary text-decoration-underline">
              Home
            </a>{" "}
            / Privacy Policy
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
                  "information-we-collect",
                  "how-we-use-your-information",
                  "cookies",
                  "data-security",
                  "third-party-links",
                  "changes-to-this-policy",
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
            <section id="information-we-collect">
              <h5>Information We Collect</h5>
              <p>
                We may collect personal information such as your name and email
                address when you voluntarily provide it through contact forms or
                subscriptions. We also collect non-personal information, such as
                IP addresses, browser types, and device information, to improve
                the website’s functionality and user experience.
              </p>
            </section>

            <section id="how-we-use-your-information">
              <h5>How We Use Your Information</h5>
              <p>
                To respond to your inquiries or requests. To improve our website
                and its content. To send periodic updates or notifications
                related to TXRoadhouseMenu, if you’ve opted to receive them. We
                do not sell, rent, or share your personal information with third
                parties, except as required by law or to protect the security of
                our site.
              </p>
            </section>

            <section id="cookies">
              <h5>Cookies</h5>
              <p>
                Our website uses cookies to enhance user experience, track
                visitor activity, and analyze trends. Cookies allow us to
                remember preferences and understand how users interact with our
                content. You can adjust your browser settings to decline
                cookies, though some features of the website may not function
                properly without them.
              </p>
            </section>

            <section id="data-security">
              <h5>Data Security</h5>
              <p>
                We take reasonable precautions to protect your data from
                unauthorized access or disclosure. However, no method of
                transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section id="third-party-links">
              <h5>Third-Party Links</h5>
              <p>
                Our website may contain links to external sites that are not
                operated by us. Please be aware that we are not responsible for
                the privacy practices of these third-party websites.
              </p>
            </section>

            <section id="changes-to-this-policy">
              <h5>Changes to This Policy</h5>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and we encourage you to review it
                periodically.
              </p>
            </section>

            <section id="contact-us">
              <h5>Contact Us</h5>
              <p>
                If you have any questions or concerns regarding our Privacy
                Policy, feel free to contact us at:
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:roadhous@roadhousemenufinder.com">
                  roadhous@roadhousemenufinder.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
