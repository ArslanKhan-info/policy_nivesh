# Project Rules — React + Vite (TypeScript + Tailwind + SEO)

This document defines development standards for the Advisor website built using **React + Vite**, written in **TypeScript**, styled with **Tailwind CSS**, and optimized for **SEO (Search Engine Optimization)**. These rules are designed for use within **Cursor.ai IDE** to guide AI-assisted code generation, ensuring consistent, performant, and SEO-friendly web development.

---

## 1. Project Overview
- Framework: **React 18+ with Vite**
- Language: **TypeScript** (strict mode enabled)
- Styling: **Tailwind CSS** (utility-first approach)
- Purpose: To build a responsive, fast, and SEO-optimized advisor website in **English and Hindi**.
- AI Assistant: Rules written for **Cursor.ai IDE** to maintain code quality and uniformity.

---

## 2. Folder Structure
```
project-root/
├─ src/
│  ├─ assets/         # Images, fonts, icons
│  ├─ components/     # Reusable UI components
│  ├─ hooks/          # Custom React hooks
│  ├─ layouts/        # Shared layout components
│  ├─ pages/          # Page components (route-based)
│  ├─ routes/         # Routing config files
│  ├─ types/          # Global TypeScript definitions
│  ├─ utils/          # Utility and helper functions
│  ├─ seo/            # SEO configuration and helpers
│  ├─ App.tsx         # Main React component
│  └─ main.tsx        # Entry point for Vite
├─ public/            # Static assets (robots.txt, sitemap.xml, icons)
├─ index.html         # HTML entry point with meta templates
├─ tailwind.config.ts # Tailwind configuration
├─ tsconfig.json      # TypeScript configuration
└─ vite.config.ts     # Vite configuration
```

---

## 3. Naming Conventions
- **Files/Folders:** kebab-case (e.g., `user-card.tsx`, `seo-utils.ts`)
- **React Components:** PascalCase (e.g., `UserCard`)
- **Variables & Functions:** camelCase
- **TypeScript Interfaces & Types:** PascalCase prefixed with `I` if needed (e.g., `IUser`)
- **Tailwind Classes:** Use descriptive utilities instead of custom CSS wherever possible.

---

## 4. TypeScript Rules
- Enable `strict: true` in `tsconfig.json`.
- Avoid using `any`. Use `unknown` or create custom types.
- Shared types go in `src/types`.
- Use React.FC only when props require children; otherwise, prefer inline type annotations.

---

## 5. Tailwind CSS Rules
- Use **utility-first** styling; avoid unnecessary custom CSS.
- Prefer **Tailwind variants** (responsive, hover, focus) for interactions.
- Use `@apply` only inside global or layout-level CSS if repetition occurs.
- Ensure responsive design using Tailwind’s breakpoints.
- Avoid inline `style` props unless absolutely necessary.

---

## 6. Component Standards (SEO-Optimized)
- Use **semantic HTML** tags (`header`, `main`, `article`, `nav`, `footer`, etc.).
- Each page component should export a **metadata object** with at least `title`, `description`, and `canonical`.
- Add Open Graph (`og:*`) and Twitter card metadata.
- Use **structured data (JSON-LD)** where applicable (Organization, WebSite, Product, etc.).
- Images must have meaningful `alt` attributes.
- Use `<h1>` once per page; maintain heading hierarchy (`h2`, `h3`, etc.).
- Use `aria-*` attributes for accessibility.

Example:
```tsx
export const metadata = {
  title: 'Advisor - Life Insurance Plans',
  description: 'Explore and compare life insurance plans from trusted providers.',
  canonical: 'https://advisor.in/life-insurance',
};
```

---

## 7. Routing & SEO
- Use **react-router-dom v6+** with lazy-loaded routes.
- Maintain a centralized SEO config in `src/seo/`.
- Update `sitemap.xml` automatically when routes change.
- Add `hreflang` support for English (`en`) and Hindi (`hi`).
- Always provide canonical URLs.

---

## 8. Internationalization (i18n)
- Implement i18n using `react-i18next`.
- Store translations in `src/locales/en.json` and `src/locales/hi.json`.
- Use language prefix-based routes: `/en/...` and `/hi/...`.
- Add a language switcher that preserves the current page.

---

## 9. SEO-Specific Rules
- Each page must define meta tags: title, description, canonical, og:title, og:description, og:image.
- Include a robots.txt file in the public folder.
- Generate and update sitemap.xml on every build.
- Preload critical assets in `index.html`.
- Optimize for **Core Web Vitals** (LCP, FID/INP, CLS).
- Use lazy loading for below-the-fold images.
- Prefer SVGs for icons.

---

## 10. Performance & Build
- Enable code-splitting and dynamic imports for large components.
- Use `vite-plugin-compression` for Brotli/Gzip compression.
- Cache static assets via service worker or CDN.
- Optimize images during build (`vite-imagetools` or external tools).
- Use minimal runtime dependencies.

---

## 11. Accessibility
- Follow **WCAG 2.1 AA** standards.
- Ensure color contrast, focus states, and keyboard navigation.
- Use `aria-label`, `aria-expanded`, `role` appropriately.
- Run accessibility checks using `axe-core` or `lighthouse`.

---

## 12. Linting & Formatting
- Use ESLint + Prettier integration.
- Enforce Tailwind and React rules via ESLint plugins.
- Disallow `console.log` in production builds.
- Run linting pre-commit via Husky.

---

## 13. Testing
- Unit tests with **Vitest + React Testing Library**.
- Coverage threshold: at least 70% for core logic.
- Use Playwright or Cypress for end-to-end testing of key user flows.

---

## 14. Deployment
- Build static site via `vite build`.
- Output served from `dist/` through CDN or static host.
- Ensure HTML meta and canonical tags are included in final output.
- Deploy Hindi and English versions to `/hi` and `/en` routes respectively.

---

## 15. General Development Rules
- Always prefer reusable and atomic components.
- Write descriptive commit messages (use Conventional Commits).
- Use environment variables for all configurable URLs and keys.
- Keep README updated with installation, build, and deploy instructions.
- Ensure all components are SEO-compatible out of the box.

---

## 16. Example Component Pattern (SEO-Ready)
```tsx
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
}

const SEOPage: React.FC<SEOProps> = ({ title, description, canonical }) => {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-600">{description}</p>
    </main>
  );
};

export default SEOPage;
```

---

## 17. Final Notes
This rule set ensures that all React + Vite projects generated or maintained in **Cursor.ai** are modern, maintainable, TypeScript-safe, Tailwind-powered, and SEO-optimized for fast, discoverable, multilingual web experiences.

