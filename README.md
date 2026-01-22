# Portfolio

A modern, functional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Hero section with professional introduction
- 📂 "Big Three" projects showcase (What I Know, What I Learned, What I'm Aspiring to Know)
- 📈 Currently Learning section demonstrating growth mindset
- 🎨 Modern design with gradient effects and smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 SEO friendly with proper metadata

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Recommended)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build & Deploy

Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel automatically detects Next.js configuration
5. Click Deploy

## Project Structure

```
.
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── BigThree.tsx      # Projects showcase
│   ├── GrowthTab.tsx     # Learning section
│   └── Footer.tsx        # Footer
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Customization

Edit the following files to customize your portfolio:

- **Hero Section**: `components/Hero.tsx` - Update name, title, and social links
- **Projects**: `components/BigThree.tsx` - Add/modify project details
- **Learning**: `components/GrowthTab.tsx` - Update learning topics and progress
- **Colors**: `tailwind.config.js` - Customize color scheme

## Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Server-side rendering for fast initial page load
- Automatic code splitting

## License

© 2026 Johnwel Sabayday. All rights reserved.
