# QR Code Generator & Scanner


> A modern React application for working with QR codes. The project combines the functionality of a generator, scanner, and history storage, implemented on the basis of the Vite builder for maximum performance.



## 🔗 Live Demo
You can see the project live here: **[https://bindasdanylo30.github.io/QrCode_React/]**

---

## 🛠 Tech Stack (Стек технологий)
**Core:**
* **React** (Hooks: `useState`)
* **Vite** — быстрый сборщик проекта и Dev Server.
* **React Router DOM** — маршрутизация (SPA) для переключения между сканером, генератором и историей.
**Styles:**
* **SCSS (Sass)** — used preprocessor for variables, nesting, and mixins.
* **CSS Modules** — implemented a modular styling approach to ensure component isolation and prevent global namespace pollution.

**QR Logic:**
* **react-qr-code** — компонент генерации кодов.
* **react-qr-scanner** — интеграция с камерой устройства и декодирование.

**Storage & Data:**
* **LocalStorage API** — хранение истории сканирования и генерации.
* **JSON Handling** — использование `JSON.stringify` и `JSON.parse` для сериализации данных.
## 🔧 Deployment & Configuration (Деплой)

The project is deployed to **GitHub Pages**.

To ensure proper routing and asset loading in the production environment, I implemented specific **Vite configuration**:

* **Base Path:** Configured the `base` property in `vite.config.js` (e.g., `base: '/repo-name/'`). This ensures that assets (CSS, JS, Images) are linked correctly relative to the repository path, fixing the common "blank screen" issue on GitHub Pages.
* **Build Script:** Optimized the `npm run build` command to generate a production-ready `dist` folder.


---

## ✨ Features (Функционал)

### 1. ⚡ Генерация QR-кодов
The user can enter any text or link, and the application will instantly generate the corresponding QR code.

### 2. 📷 Сканирование (Scanner)
Access to the device camera has been implemented. The application recognizes QR codes in real time and decodes their content.

### 3. 💾 История (History & Persistence)
One of the key features is the saving of user actions:
* All generated and scanned codes are stored in **LocalStorage**.
* Data persists across page reloads.
* Implemented complex data structure handling using `JSON.stringify()` for serialization and `JSON.parse()` for retrieval.
---

## 🏗 Architecture (Архитектура)

The project uses a **component-based approach**. The interface is divided into independent reusable blocks:
* `Navigation` — меню маршрутизации.
* `Generate` — логика ввода и отрисовки кода.
* `GenerateHistory` — компонент отображения сохраненных записей генераций 
* `Scanner` — логика работы с камерой.
* `ScanHistory` — компонент отображения сохраненных записей.

---

## 🚀 Getting Started (Запуск локально)

The project is built on **Vite**, so it launches very quickly.

1. **Установка зависимостей:**
   ```bash
   npm install
2. **Запуск сервера разработки:**
   ```bash
   npm run dev
3. **Сборка для продакшена:**
   ```bash
   npm run build
