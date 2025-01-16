import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Disclaimer = () => {
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
            Disclaimer
          </h1>

          {/* Breadcrumb */}
          <p className="text-center text-muted mb-4">
            <a href="/" className="text-decoration-none text-secondary text-decoration-underline">
              Home
            </a>{" "}
            / Disclaimer
          </p>

          {/* Author and Date */}
          <p className="text-center text-secondary mb-4">
            By <span style={{ fontWeight: "bold" }}>AUTHOR</span> | November 20, 2024
          </p>

          {/* Content */}
          <div style={{ padding: "10px 15px" }}>
            <p>
              Welcome to TXRoadhouseMenu, your go-to resource for everything related to the Texas Roadhouse menu!
            </p>
            <p>
              Please note that TXRoadhouseMenu is an independent website and is not affiliated with, endorsed by, or officially connected to Texas Roadhouse. All trademarks, logos, and brand names belong to their respective owners. The information provided on this site is for informational purposes only and is subject to change without notice.
            </p>
            <p>
              We strive to ensure the accuracy of the content on this website, including menu details, pricing, and item availability. However, Texas Roadhouse may update their offerings or prices, and we cannot guarantee the information here reflects the latest changes. For the most accurate and up-to-date information, we recommend visiting the official Texas Roadhouse website or contacting your nearest location directly.
            </p>
            <p>
              By using this website, you acknowledge that TXRoadhouseMenu is not responsible for any discrepancies, errors, or omissions in the information provided. Your use of this site is at your own risk, and we encourage you to verify all details with official sources.
            </p>
            <p>
              Thank you for visiting TXRoadhouseMenu!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
