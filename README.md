# Professional AI & ML Engineer Portfolio (Static Export)

A high-performance, modern portfolio built with Next.js, optimized for static hosting on platforms like GitHub Pages, Netlify, and Vercel.

## 🚀 Static Site Features

- **Static Export**: Generates pure HTML/CSS/JS files via `next export`. No Node.js runtime required on the server.
- **Stripe-Inspired Design**: Elegant mesh gradients, glassmorphism, and premium typography.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop.
- **Interactive UI**: Scroll-triggered animations and dynamic hover effects using pure CSS and Client-side React.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (Static Export)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

### 3. Build Static Site
To generate the static HTML files:
```bash
npm run build
```
The static files will be generated in the `out/` directory.

## 🚢 Deployment

### GitHub Pages / Netlify / Vercel
1. Run `npm run build`.
2. Upload the contents of the `out/` folder to your static hosting provider.
3. For GitHub Pages, ensure you set the build directory to `out`.

## 🔧 Personalization

- **Projects**: Modify `src/lib/projects.ts`.
- **Experience**: Update `src/components/experience.tsx`.
- **Education**: Update `src/components/education.tsx`.
- **Theme**: Adjust HSL values in `src/app/globals.css`.

## 📄 License
Open-source and free to use.
