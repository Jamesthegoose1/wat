# Gemini Robot for Roblox

A Node.js server that connects Roblox to **Google Gemini API** via Render.  
Your stationary robot (stand) in Roblox can now “talk” using AI-generated responses.

## Features
- Roblox players can chat with the robot.
- Robot sends messages to Gemini API and replies in chat bubbles.
- Fully safe: API key stored as an environment variable on Render.
- Easy to deploy on Render as a Web Service.

## Setup Instructions

1. **Create a GitHub repo** and add these files:
   - `index.js`
   - `package.json`
   - `README.md`
   
2. **Deploy to Render**:
   - New → Web Service
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node index.js`
   - Add environment variable: `GEMINI_API_KEY = <your key>`

3. **Roblox Script**:
   - Place in `ServerScriptService`
   - Use your Render URL like this:  
     ```lua
     local SERVER_URL = "https://your-render-app.onrender.com/gemini"
     ```

4. **Enjoy your AI robot**:
   - Players chat in Roblox → robot replies using Gemini API.

## Notes
- Keep your API key secret. Do not commit it to GitHub.
- The robot is stationary (a “stand”) and doesn’t move.  
- Add more keywords or GUI for custom chatbot experience.
