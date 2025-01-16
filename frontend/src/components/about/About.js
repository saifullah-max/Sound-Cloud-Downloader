import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const AboutUs = () => {
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
            About Us
          </h1>

          {/* Breadcrumb */}
          <p className="text-center text-muted mb-4">
            <a href="/" className="text-decoration-none text-secondary text-decoration-underline">
              Home
            </a>{" "}
            / About Us
          </p>

          {/* Author and Date */}
          <p className="text-center text-secondary mb-4">
            By <span style={{ fontWeight: "bold" }}>AUTHOR</span> | September
            17, 2024
          </p>

          {/* Content */}
          <div style={{ padding: "10px 15px" }}>
            <p>
              Welcome to TXRoadhouseMenu, your ultimate guide to everything on
              the Texas Roadhouse menu! We’re passionate about bringing you
              detailed insights, recommendations, and updates on one of
              America’s favorite dining destinations. Whether you’re a fan of
              their legendary hand-cut steaks, crave the irresistible rolls and
              cinnamon butter, or want to explore their diverse offerings, we’ve
              got you covered.
            </p>
            <p>
              Our mission is simple: to provide Texas Roadhouse fans with a
              comprehensive resource for discovering all the delicious options
              they have to offer. From appetizers to desserts, specialty drinks
              to seasonal favorites, TXRoadhouseMenu is dedicated to helping you
              navigate every delicious detail.
            </p>
            <p>
              At TXRoadhouseMenu, we love food as much as you do, and we know
              the value of finding the perfect meal for every occasion. Whether
              you’re planning your next visit or just curious about what’s new,
              we strive to make your Texas Roadhouse experience even better!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
