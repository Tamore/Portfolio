# 🛠️ Engineering Log: NT Research Dashboard

This document provides a comprehensive technical breakdown of the development process, architectural decisions, and system configuration used to build the NT Research Dashboard.

## 🚀 1. The Stack (Core Infrastructure)
The project was initialized as a modern React application using the **Vite** build tool for maximum performance and hot-module replacement (HMR).

### Installed Dependencies:
- **`react` & `react-dom`**: Core UI library.
- **`framer-motion`**: Orchestrating high-fidelity animations, loading sequences, and scroll-triggered transitions.
- **`lucide-react`**: A comprehensive suite of minimalist technical iconography.
- **`tailwind-css`**: Utility-first styling for precise layout control.
- **`postcss` & `autoprefixer`**: Post-processing CSS for cross-browser stability.

---

## 📂 2. File & Folder Architecture

### Root Directory
- `index.html`: The entry point for the Vite application.
- `package.json`: Manages scripts, dependencies, and project metadata.
- `tailwind.config.js`: Custom Tailwind configuration.
- `README.md`: The public-facing project overview.
- **`DEVELOPMENT.md`**: (This file) The detailed engineering log.

### `/src` Directory
- `main.ts`: The bootstrap file that renders the React root.
- `App.tsx`: **The Core Hub.** This single-file architecture governs the entire dashboard layout.

### `/public` Directory (Identity Assets)
- `avatar_pixel.png`: Color-graded identity asset.
- `mascot.png`: Custom-generated "Doodle-Saur" mascot.

---

## 🏗️ 3. The Development Phases

### Phase 1: High-Fidelity Transition
Transitioned from a blank site to a **System Console Dashboard**. This involved building the fixed "Command Dock" (sidebar) and the initial glassmorphic card system.

### Phase 2: Branding & Identity Engineering
- **Avatar Grading**: Purged warm yellow tones to match the Pink/Purple dashboard theme.
- **Mascot Creation**: Iterated through several concepts to find the definitive brand mark (Doodle-Saur).
- **Loading Sequence**: Engineered a minimalist startup screen featuring the edge-to-edge mascot.

### Phase 3: Layout Refactoring (Side-by-Side Hero)
- Refactored the "About Me" section from a standard stack into a **5-column grid**.
- Integrated a side-by-side dual-module (Editorial Profile Card + Journey Log).

### Phase 4: Terminal Logic & Narrative
- Rewrote the terminal narrative to strictly focus on **Distributed Systems** and **Cloud Security**.
- Reordered the CLI commands to follow a logical flow: **About -> Academic -> Core Focus**.

---

## 🎨 4. Design Tokens & Visual Language
- **Accent Color**: `#e040a0` (Neon Candy Pink)
- **Primary Text**: Obsidian Purple (`#2e1a28`)
- **Terminal Surface**: Deep Obsidian (`#211520`)
- **Glassmorphism**: 80% opacity backgrounds with high-blur (`backdrop-blur-xl`) and white borders.

---
*Last Updated: 2026-05-10 | Engineering Lead: Antigravity AI*
