# StreamForge AI ⚡️

![StreamForge Banner](https://via.placeholder.com/1200x400/9146FF/FFFFFF?text=StreamForge+AI+|+Twitch+Design+Generator)

> **Your Personal AI Art Director for Twitch & YouTube.**
> *Create consistent, professional broadcast assets in seconds using Style Extraction Technology.*

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Gemini](https://img.shields.io/badge/AI-Gemini%20NanoBanana-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)]()

---

## 🚀 The Problem
Streamers and Content Creators face a "Visual Identity Crisis":
1.  **Designers are expensive:** A full channel rebrand costs $200-$1000+.
2.  **DIY is hard:** Photoshop requires skills most gamers don't have.
3.  **Inconsistency:** Buying separate assets leads to a mismatched, amateur look.

## 💡 The Solution: StreamForge AI
StreamForge is not just an image generator. It is a **Style Synthesis Engine**.
Instead of asking users to prompt "Cyberpunk city," StreamForge asks for a **Reference Image**.

1.  **Upload** any image that captures the *vibe* you want (colors, lighting, texture).
2.  **Analyze:** The AI deconstructs the artistic DNA of the reference.
3.  **Generate:** The system creates **brand new** assets (Banners, Panels, Alerts) that perfectly match that style, but with the content you need.

**"It doesn't copy pixels. It copies the soul of the art."**

---

## ✨ Key Features

### 🎨 Smart Style Extraction
Powered by **Gemini 2.5 Multimodal**, the engine analyzes the reference image for:
*   Color Palette & Hex Codes
*   Lighting Composition (e.g., Neon, Rim Light, Softbox)
*   Artistic Medium (3D Render, Vector, Watercolor)
*   Mood & Atmosphere

### 📦 Complete Asset Ecosystem
Generate every single graphic needed for a professional broadcast channel:

| Asset Category | Available Types | Specs |
| :--- | :--- | :--- |
| **Channel Branding** | Offline Banners, Profile Headers, Avatars | 1080p / 4K |
| **YouTube** | **Channel Art (Safe Zones)**, Video Thumbnails | Optimized for CTR |
| **Stream Screens** | Starting Soon, BRB, Stream Ending | 16:9 Cinematic |
| **Overlays** | Webcam Frames (16:9 & Circle), Lower Thirds | Chrome Key Ready |
| **Interaction** | Alerts (Follow, Sub, Raid, Donate) | Square Grid |
| **Info Panels** | About, Rules, Specs, Schedule, Socials | Uniform Style |

### 🌍 Bilingual Support
Full UI and Prompt Engineering support for **English** and **Russian** languages.

---

## 🛠 Technical Stack

*   **Frontend:** React 19 (Latest), Vite
*   **Styling:** Tailwind CSS (Custom Twitch-inspired theme)
*   **Logic:** TypeScript (Strict typing for asset specifications)
*   **AI Core:** Google GenAI SDK (`@google/genai`)
    *   *Analysis:* `gemini-2.5-flash` (Vision capability)
    *   *Generation:* `gemini-2.5-flash-image` (NanoBanana)

---

## ⚡️ Getting Started

### Prerequisites
*   Node.js 18+
*   Google Gemini API Key (Get it at [aistudio.google.com](https://aistudio.google.com))

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/streamforge-ai.git
    cd streamforge-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment**
    Create a `.env` file in the root directory:
    ```env
    API_KEY=your_google_gemini_api_key_here
    ```

4.  **Run Development Server**
    ```bash
    npm start
    ```

---

## 📸 How It Works

1.  **Upload Reference:** Drop an image of a style you love (e.g., a screenshot from Cyberpunk 2077, a vaporwave poster, or a minimalist drawing).
2.  **Select Asset:** Choose what you need (e.g., "YouTube Thumbnail").
3.  **Describe Content:** Tell the AI what to put in the image (e.g., "Me winning a battle royale").
4.  **Download:** Get a production-ready PNG in seconds.

---

## 🗺 Roadmap

*   [x] Core Style Analysis & Generation
*   [x] Full Twitch Asset Library
*   [x] YouTube Banners with Safe Zones
*   [x] EN/RU Localization
*   [ ] **Layer Separation:** Generate text and background separately.
*   [ ] **Animated Assets:** Export to WebM for animated overlays.
*   [ ] **User History:** Save generated brand kits to local storage.

---

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <i>Built with ❤️ and ☕️ by the StreamForge Team.</i>
</p>
