# StreamForge AI ⚡️

![StreamForge Banner](https://via.placeholder.com/1200x400/9146FF/FFFFFF?text=StreamForge+AI+|+The+Future+of+Creator+Branding)

> **Democratizing Professional Design for the Creator Economy.**
> *A high-fidelity AI design engine that ensures brand consistency through proprietary Style Synthesis Technology.*

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Gemini](https://img.shields.io/badge/AI-Gemini%202.5%20Multimodal-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
[![Architecture](https://img.shields.io/badge/Architecture-Service%20Based-orange?style=flat-square)]()
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)]()

---

## 📉 The Market Gap
The Creator Economy is valued at **$250B+**, yet 95% of streamers struggle with visual identity.
*   **Agencies are slow:** High costs ($500+) and long turnaround times.
*   **Templates are generic:** "Cookie-cutter" designs fail to build a unique brand.
*   **Standard GenAI fails:** Midjourney/DALL-E produce random styles, making it impossible to create a consistent asset pack (Banner + Panels + Alerts).

## 💎 The Solution: StreamForge AI
StreamForge is not just an image generator. It is a **Brand Consistency Engine**.
We utilize **Gemini 2.5 Vision** to deconstruct the "Visual DNA" of a reference image and apply it mathematically to new assets.

**Result:** A streamer uploads *one* moodboard image and generates an entire professional broadcast package in 2 minutes.

---

## 🏗 System Architecture

We employ a sophisticated **Two-Stage Generation Pipeline** to ensure stylistic fidelity.

```mermaid
graph TD
    User[User / Creator] -->|1. Uploads Reference| UI[React Frontend]
    UI -->|Base64 Stream| Vision[Gemini 2.5 Flash (Vision)]
    
    subgraph "Stage 1: Analysis"
    Vision -->|Extracts| Palette[Color Palette]
    Vision -->|Extracts| Lighting[Lighting Composition]
    Vision -->|Extracts| Mood[Artistic Texture/Mood]
    end
    
    subgraph "Stage 2: Synthesis"
    Palette & Lighting & Mood -->|Vector Injection| PromptEngine[Prompt Engineering Layer]
    User -->|2. Selects Asset Type| TechSpecs[Asset Spec Database]
    TechSpecs -->|Injects Constraints| PromptEngine
    
    PromptEngine -->|Optimized Context| GenModel[Gemini NanoBanana (Image)]
    end
    
    GenModel -->|3. High-Fidelity Asset| UI
    UI -->|Download| User
```

---

## ✨ Key Features

### 🧠 Style Extraction Technology
Unlike standard prompts ("Make it cyberpunk"), StreamForge analyzes pixel-level details:
*   **Chromatic Aberration detection**
*   **Lighting Source mapping** (Rim light vs. Softbox)
*   **Texture Recognition** (Matte, Glossy, Grunge)

### 📦 Enterprise-Grade Asset Library
Pre-configured, platform-optimized specifications for every major broadcast need.

| Asset Category | Includes | Tech Specs |
| :--- | :--- | :--- |
| **YouTube Ecosystem** | Channel Art, **High-CTR Thumbnails** | Safe-zone aware cropping |
| **Twitch Branding** | Offline Banners, Headers, Avatars | 1080p Optimized |
| **Live Production** | Starting/Ending Screens, BRB | 16:9 Cinematic |
| **Overlay Systems** | Webcam Frames (Circle/Rect), Lower Thirds | **Chroma-Key Ready** |
| **Monetization** | Panels (Donation, Merch, Sub), Alerts | Grid Consistent |

### 🌐 Global Scalability
*   **Multi-Language Core:** Native support for **English** and **Russian** (UI + Prompt Engineering).
*   **Responsive Design:** Mobile-first architecture using Tailwind CSS.

---

## 🛠 Technical Stack

Built with performance, type safety, and scalability in mind.

*   **Frontend Framework:** `React 19` + `Vite` (Ultra-fast HMR)
*   **Language:** `TypeScript 5.0` (Strict Mode enabled for rock-solid reliability)
*   **AI Integration:** `@google/genai` SDK (Gemini 1.5/2.5 Pro & Flash)
*   **State Management:** React Hooks + Service Layer Pattern
*   **Styling:** Tailwind CSS with Custom Twitch Design System
*   **Icons:** Lucide React

---

## ⚡️ Quick Start

### Prerequisites
*   Node.js 18+
*   Google Gemini API Key ([Get it here](https://aistudio.google.com))

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

3.  **Configure Environment**
    Create a `.env` file in the root:
    ```env
    API_KEY=your_google_gemini_api_key_here
    ```

4.  **Ignition**
    ```bash
    npm start
    ```

---

## 🗺 Roadmap & Future Vision

*   [x] **MVP:** Style Extraction & Static Asset Generation
*   [x] **Localization:** EN/RU Support
*   [ ] **Layer Separation:** Generate .PSD files with separated Text/Background layers.
*   [ ] **Vector Export:** SVG generation for logos using recraft-v3 models.
*   [ ] **Brand Kits:** Save "Brand DNA" to user profile for 1-click generation of future assets.
*   [ ] **Animated Overlays:** WebM export for moving backgrounds.

---

## 🤝 Contributing
We welcome contributions from the open-source community. Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <b>StreamForge AI</b> — <i>Where Vision Meets Broadcast.</i><br>
  Built with ❤️ by the StreamForge Engineering Team.
</p>
