# Professional AI & ML Engineer Portfolio

A high-performance, modern portfolio template inspired by the Stripe aesthetic. Designed for AI/ML engineers and data scientists to showcase their research, professional experience, and technical projects.

## 🚀 Features

- **Stripe-Inspired Design**: Elegant mesh gradients, glassmorphism, and premium typography.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices.
- **Project Gallery**: Detailed project cards with dynamic hover effects and dedicated detail pages.
- **Research & Publications**: Showcase academic contributions and scholarly impact.
- **Interactive UI**: Scroll-triggered animations, dynamic skill progress bars, and floating navigation.
- **Genkit Integration**: Ready-to-use GenAI flows (Gemini 2.5) for intelligent features.
- **Contact System**: Clean contact form with toast notifications.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **AI Tooling**: [Firebase Genkit](https://github.com/firebase/genkit)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (via Tailwind/CSS)

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd your-project-name
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory and add your Gemini API key for AI features:
```env
GOOGLE_GENAI_API_KEY=your_gemini_api_key_here
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## 🔧 Customization Guide

To personalize this portfolio, update the following files:

- **Personal Data**: Edit `src/app/page.tsx` and individual component files.
- **Projects**: Modify `src/lib/projects.ts` to add or remove your work.
- **Experience & Education**: Update `src/components/experience.tsx` and `src/components/education.tsx`.
- **Skills**: Adjust the levels and categories in `src/components/skills.tsx`.
- **Theme/Colors**: Change primary and accent HSL values in `src/app/globals.css`.

## 🚢 Deployment

This project is configured for [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

1. Connect your GitHub repository to Firebase App Hosting.
2. Set your `GOOGLE_GENAI_API_KEY` in the Firebase Console under environment variables.
3. Deploy!

## 📄 License

This project is open-source. Feel free to use and modify it for your own portfolio.
