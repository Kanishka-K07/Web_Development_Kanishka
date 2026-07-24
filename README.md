# NorthPeak Digital - One-Page Agency Website

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![Responsive](https://img.shields.io/badge/Responsive-360px%20%7C%20768px%20%7C%201440px-indigo.svg)]()
[![Performance](https://img.shields.io/badge/Performance-Vite%20%2B%20Vanilla-cyan.svg)]()

A high-performance, responsive one-page agency website built for **NorthPeak Digital** adhering strictly to the internship selection criteria.

---

## 🌟 Key Features

- **Hero Section**: Impactful headline, subheadline, dual CTAs, floating metric badges, and ambient background blurs.
- **Services Grid (6)**: Interactive glassmorphic cards showcasing 6 core service offerings with custom SVG icons and hover states.
- **Results & Testimonials**: Data-driven metrics banner (`$50M+ Revenue`, `150+ Projects`, `99.4% On-Time`) alongside verified client reviews with star ratings.
- **3-Tier Pricing Section**: `Starter Launch`, `Growth Engine` (Featured tier), and `Enterprise Apex` with an interactive Monthly / Annual billing discount toggle switch.
- **Contact Form with Client-Side Validation**: Real-time field validation (Name, Email regex, Service selection, Message length), inline error prompts, accessible `aria-invalid` attributes, and success notification modal.
- **Fully Responsive Layout**: Custom mobile drawer navigation and mobile-first CSS Grid/Flexbox layouts optimized for **360px (mobile)**, **768px (tablet)**, and **1440px (desktop)** viewports.
- **Mandatory Task Requirement**: Includes visible credit line in the footer: `"Built for Digital Heroes Training Task"` hyperlinked to `https://digitalheroesco.com`.

---

## 🛠️ Tech Stack & Discipline

- **Core**: Vanilla HTML5 (Semantic Structure) & ES6+ JavaScript
- **Styling**: Vanilla CSS3 (Custom Design Tokens, Flexbox, Grid, Glassmorphism)
- **Tooling & Bundler**: [Vite](https://vitejs.dev/) for fast dev server HMR and production builds.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18+) & npm

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd ktask
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output files will be generated in the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 📦 Deployment Instructions

### Deploying to Netlify / Vercel
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### Deploying to GitHub Pages
1. Push code to a public GitHub repository.
2. In Repository Settings -> Pages, set Source to GitHub Actions or select the static build branch.

---


