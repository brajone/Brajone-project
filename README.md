# Brajone - Luxury Real Estate Website

Brajone is a high-end, production-ready real estate platform designed for the Vrindavan market. It combines international luxury aesthetics (inspired by DAMAC and Apple) with spiritual nuances.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP, Framer Motion
- **3D Graphics:** Three.js (React Three Fiber)
- **Database:** Supabase
- **Icons:** Lucide React
- **PWA:** Manifest.json & Next-PWA (configured)

## Project Structure
- `src/app`: Routes and page components.
- `src/components`: Reusable UI sections and 3D elements.
- `src/lib`: Utility functions and API clients.
- `src/types`: TypeScript definitions.
- `public`: Static assets (images, manifest, robots.txt).

## Setup Instructions

1. **Clone the repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Variables:**
   Create a `.env.local` file with the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   ```
4. **Run development server:**
   ```bash
   npm run dev
   ```
5. **Build for production:**
   ```bash
   npm run build
   ```

## Features
- Fullscreen 3D Hero section.
- Glassmorphism UI with Gold/Black theme.
- Interactive Property Cards.
- Admin CMS for property management.
- EMI & ROI Calculators.
- Fully Responsive (Mobile-first).
- SEO Optimized with Schema.org readiness.

## Contact
- Office: Vrindavan, UP
- Email: brajone.com@gmail.com
- Phone: +91 7900780022 / 23
