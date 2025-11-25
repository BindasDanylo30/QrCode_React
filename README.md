# QR Code Generator & Scanner

> A modern React application for handling QR codes. The project combines generation, scanning, and history storage functionalities, built with Vite for maximum performance.

## 🔗 Live Demo
You can see the project live here: **[https://bindasdanylo30.github.io/QrCode_React/]**

---

## 🛠 Tech Stack
**Core:**
* **React** (Hooks: `useState`)
* **Vite** — Fast build tool and development server.
* **React Router DOM** — SPA routing for navigating between scanner, generator, and history.

**Styles:**
* **SCSS (Sass)** — Used preprocessor for variables, nesting, and mixins.
* **CSS Modules** — Implemented a modular styling approach to ensure component isolation and prevent global namespace pollution.

**QR Logic:**
* **react-qr-code** — Component for generating QR codes.
* **react-qr-scanner** — Device camera integration and decoding logic.

**Storage & Data:**
* **LocalStorage API** — Persists scanning and generation history.
* **JSON Handling** — Usage of `JSON.stringify` and `JSON.parse` for data serialization.

---

## 🔧 Deployment & Configuration

The project is deployed to **GitHub Pages**.

To ensure proper routing and asset loading in the production environment, I implemented specific **Vite configuration**:

* **Base Path:** Configured the `base` property in `vite.config.js` (e.g., `base: '/repo-name/'`). This ensures that assets (CSS, JS, Images) are linked correctly relative to the repository path, fixing the common "blank screen" issue on GitHub Pages.
* **Build Script:** Optimized the `npm run build` command to generate a production-ready `dist` folder.

---

## ✨ Features

### 1. ⚡ QR Code Generation
The user can enter any text or link, and the application will instantly generate the corresponding QR code.

### 2. 📷 QR Scanning
Access to the device camera is implemented. The application recognizes QR codes in real-time and decodes their content.

### 3. 💾 History & Persistence
One of the key features is the preservation of user actions:
* All generated and scanned codes are stored in **LocalStorage**.
* Data persists across page reloads.
* Implemented complex data structure handling using `JSON.stringify()` for serialization and `JSON.parse()` for retrieval.

---

## 🏗 Architecture

The project uses a **component-based approach**. The interface is divided into independent reusable blocks:
* `Navigation` — Routing menu component.
* `Generate` — Logic for input and code rendering.
* `GenerateHistory` — Component for displaying saved generation records.
* `Scanner` — Camera and scanning logic.
* `ScanHistory` — Component for displaying saved scan records.

---

## 🚀 Getting Started

The project is built on **Vite**, so it launches very quickly.

1. **Install dependencies:**
   ```bash
   npm install
