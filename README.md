# Professional AI & ML Engineer Portfolio

A high-performance, modern portfolio template inspired by the Stripe aesthetic. Designed for AI/ML engineers and data scientists to showcase their research, professional experience, and technical projects.

## 🚀 Features

- **Stripe-Inspired Design**: Elegant mesh gradients, glassmorphism, and premium typography.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices.
- **Project Gallery**: Detailed project cards with dynamic hover effects and dedicated detail pages.
- **Research & Publications**: Showcase academic contributions and scholarly impact.
- **Static Site Export**: Ready to be deployed as a pure HTML/CSS/JS site.
- **Interactive UI**: Scroll-triggered animations, dynamic skill progress bars, and floating navigation.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (via Tailwind/CSS)

## 📦 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

## 🚢 Deployment Options

### Option 1: Static Export (HTML/CSS/JS)
To generate a static version of the site that can be hosted anywhere (GitHub Pages, Netlify, etc.):
```bash
npm run build
```
The static files will be generated in the `out/` directory. You can host the contents of this folder as a traditional static site.

### Option 2: Next.js Managed Hosting
The project is optimized for [Firebase App Hosting](https://firebase.google.com/docs/app-hosting) and Vercel. Simply connect your repository and it will deploy automatically.

## 🔧 Customization Guide

To personalize this portfolio, update the following files:

- **Personal Data**: Edit `src/app/page.tsx` and individual component files.
- **Projects**: Modify `src/lib/projects.ts` to add or remove your work.
- **Experience & Education**: Update `src/components/experience.tsx` and `src/components/education.tsx`.
- **Skills**: Adjust the levels and categories in `src/components/skills.tsx`.
- **Theme/Colors**: Change primary and accent HSL values in `src/app/globals.css`.

## 📄 License

This project is open-source. Feel free to use and modify it for your own portfolio.
