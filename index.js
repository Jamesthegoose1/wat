import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// API key stored safely as an environment variable on Render
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

app.get("/gemini", async (req, res) => {
  try {
    const msg = req.query.msg || "Hello";

    // Request body for Gemini API
    const body = {
      contents: [{ parts: [{ text: msg }] }]
    };

    // Call Gemini API
    const aiRes = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await aiRes.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I have no reply.";

    res.send(reply);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error talking to Gemini");
  }
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
