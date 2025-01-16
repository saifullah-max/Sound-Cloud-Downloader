import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Home = () => {
  const [songUrl, setSongUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePlaybackAndDownload = async (e) => {
    e.preventDefault();

    if (!songUrl) {
      alert("Please enter a valid SoundCloud URL.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: songUrl }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const audioElement = new Audio(blobUrl);

        audioElement
          .play()
          .then(() => {
            const sanitizedTitle = songUrl
              .split("/")
              .pop()
              .replace(/[\/:*?"<>|]/g, "");
            const downloadLink = document.createElement("a");

            downloadLink.href = blobUrl;
            downloadLink.download = `${sanitizedTitle}.mp3`;
            downloadLink.click();

            setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);
          })
          .catch((err) => {
            console.error("Playback failed, not downloading:", err);
            alert("Failed to play the track. The file will not be downloaded.");
          })
          .finally(() => {
            audioElement.pause();
            audioElement.src = "";
          });
      } else {
        alert("Error: Unable to process the download request.");
      }
    } catch (error) {
      console.error("Error while handling download:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>
        <div
          className="hero text-center"
          style={{
            padding: "60px 20px",
            background: "linear-gradient(to bottom, #6a11cb, #2575fc)",
            color: "#fff",
          }}
        >
          <h1>Download Your Favorite SoundCloud Songs</h1>
          <p>
            Paste the link below and click download to save it to your computer.
          </p>
        </div>
        <div
          className="container"
          style={{ margin: "40px auto", maxWidth: "600px" }}
        >
          <form onSubmit={handlePlaybackAndDownload}>
            <div className="mb-3">
              <label htmlFor="songUrl" className="form-label mb-3">
                Sound Cloud Song Link
              </label>
              <input
                type="url"
                className="form-control mb-2"
                id="songUrl"
                placeholder="Enter SoundCloud song URL"
                value={songUrl}
                onChange={(e) => setSongUrl(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : null}
              {loading ? "Processing..." : "Download"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
