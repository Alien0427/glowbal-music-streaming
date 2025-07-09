# Glowbal Network Ltd - Music Streaming Website Assignment

## Overview
This project is a 2-page music streaming website built as part of the Glowbal Network Ltd frontend development assignment. It features a pixel-perfect UI clone of a Figma design (Page 1) and a dynamic data-driven page (Page 2) using React, Tailwind CSS, and Redux.

---

## Features
- **Page 1: UI Clone Only**
  - Pixel-perfect clone of the [Figma design](https://www.figma.com/design/13ujwacD6cFuolmTQe5rKM/Glowbal-figma?node-id=0-1&p=f)
  - Light and Dark mode toggle (Tailwind CSS)
  - Fully responsive and mobile-friendly
  - No dynamic data — static content only

- **Page 2: Dynamic Content with JSON**
  - Same layout and style as Page 1
  - Fetches and displays data from external JSON endpoints:
    - [Audio Tracks](https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/audio)
    - [Artists List](https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/artists)
  - Uses Redux to store and manage selected artist
  - Responsive and mobile-friendly

---

## Tech Stack
- [React](https://react.dev/) (component-based UI)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling, dark mode)
- [Redux](https://redux.js.org/) (state management for artist selection)
- [Vite](https://vitejs.dev/) (development/build tooling)

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd music_project
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure
- `src/screens/MusicPlayerPage.tsx` — Page 1: Static UI clone
- `src/screens/MusicPlayerDynamicPage.tsx` — Page 2: Dynamic data integration
- `src/components/ui/` — Reusable UI components (buttons, toggles, etc.)
- `src/contexts/ThemeContext.tsx` — Theme (light/dark) context
- `src/store.ts` — Redux store setup

---

## Assignment Details
- **Figma Design:** [Glowbal Figma](https://www.figma.com/design/13ujwacD6cFuolmTQe5rKM/Glowbal-figma?node-id=0-1&p=f)
- **Audio Tracks JSON:** [audio](https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/audio)
- **Artists List JSON:** [artists](https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/artists)
- **Requirements:**
  - React + Tailwind CSS
  - Light/Dark mode toggle
  - Page 1: UI clone only
  - Page 2: Dynamic data (fetch, Redux)
  - Responsive/mobile-friendly

---

## Submission
- Push your code to a public GitHub repository.
- (Optional) Deploy a live preview (e.g., Vercel, Netlify) and include the link.

---

## License
This project is for assignment/demo purposes only.

