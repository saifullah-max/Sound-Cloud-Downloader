const axios = require("axios");
const express = require("express");
const router = express.Router();

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

router.post("/download", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  let retryCount = 0;
  const maxRetries = 3;

  try {
    while (retryCount < maxRetries) {
      retryCount++;
      console.log(`Attempt ${retryCount}: Fetching track data...`);

      await delay(2000); 

      const apiUrl =
        "https://zylalabs.com/api/4740/soundcloud+media+downloader+api/5854/get+data";
      const params = { download: "sq", track: url };
      const headers = {
        // Add the client_key below which you got when buying the plan("Bearer YOUR_CLIENT_KEY")
        Authorization: `Bearer 6330|JXTe6ZKQ0SikeL2E1YjTRph3UZog23xKwKuv77mK`,
      };

      const apiResponse = await axios.get(apiUrl, { params, headers });
      const { title, audio, msg } = apiResponse.data;

      if (msg === "Processing...") {
        if (retryCount < maxRetries) {
          console.log("Track is still processing... Retrying in 5 seconds...");
          await delay(5000);
          continue;
        } else {
          return res.status(202).json({ msg: "Processing...", progress: 0 });
        }
      }

      if (audio && audio.length > 0) {
        const downloadUrl = audio[0].url;

        const audioResponse = await axios.get(downloadUrl, {
          responseType: "stream",
        });

        const sanitizedTitle = (title || "soundcloud_song")
          .replace(/[\/:*?"<>|\\]/g, "")
          .trim()
          .replace(/\s+/g, "_");
        const fileName = `${encodeURIComponent(sanitizedTitle)}.mp3`;

        res.set({
          "Content-Type": "audio/mpeg",
          "Content-Disposition": `attachment; filename="${fileName}"`,
        });

        audioResponse.data.pipe(res);
        return;
      }
    }

    return res.status(404).json({ error: "Audio data not found." });
  } catch (error) {
    console.error("Error while processing download:", error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: "An error occurred while processing the download." });
    }
  }
});

module.exports = router;