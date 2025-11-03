# Policy Nivesh - Insurance Advisor Website

A modern, responsive, and SEO-optimized insurance advisor website built with React, Vite, TypeScript, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.3-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)

## 🌐 Live Demo
**🔗 [View Live Website](https://main.dgwbhj23phd04.amplifyapp.com/)**

## ✨ Features

- 🎨 **Modern Design** - Professional, clean UI optimized for mobile and desktop
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 📱 **Mobile-First** - Responsive design that works on all devices
- 🔍 **SEO Optimized** - Meta tags, structured data, and sitemap included
- ♿ **Accessible** - WCAG 2.1 AA compliant with semantic HTML
- 🎯 **TypeScript** - Type-safe code with strict mode enabled
- 🎭 **Dark Mode Ready** - Built-in dark mode support
- 🚀 **Production Ready** - Optimized build with code splitting

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Modern web browser
- Git (optional)

## 🚀 Getting Started

### Installation

1. **Clone the repository** (or extract the files)
   ```bash
   git clone <repository-url>
   cd policy_nivesh
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
policy_nivesh/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components (Button, Card, etc.)
│   │   └── seo/           # SEO-related components
│   ├── pages/             # Page components
│   │   └── home/          # Home page sections
│   ├── layouts/           # Layout components (Header, Footer)
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions and constants
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global styles and Tailwind config
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                # Static assets
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework:** React 18.3
- **Build Tool:** Vite 5.4
- **Language:** TypeScript 5.5
- **Styling:** Tailwind CSS 3.4
- **Routing:** React Router v6
- **SEO:** React Helmet Async
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Form Handling:** React Hook Form + Zod
- **State Management:** Zustand

## 🎨 Customization

### Update Site Information

Edit `src/utils/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Company Name',
  tagline: 'Your Tagline',
  description: 'Your description',
  url: 'https://yourwebsite.com',
  email: 'your@email.com',
  phone: 'Your phone number',
  address: 'Your address',
};
```

### Modify Colors

Edit `tailwind.config.js` to change the primary color scheme:

```javascript
colors: {
  primary: {
    // Your custom color palette
  },
},
```

### Add New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update sitemap in `public/sitemap.xml`

## 📊 SEO Features

- ✅ Meta tags (title, description, canonical)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Mobile-friendly design

## 🧪 Code Quality

### Linting

```bash
npm run lint
```

### Type Checking

TypeScript is configured with strict mode. Build will fail on type errors.

## 🌐 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `dist`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Update `base` in `vite.config.ts` to your repo name
2. Run: `npm run build`
3. Deploy the `dist/` folder

## 📝 Environment Variables

Create a `.env` file for environment-specific configurations:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues or questions, please contact:
- Email: info@policynivesh.com
- Phone: +91 6280000874

## 🎯 Performance

The website is optimized for:
- ⚡ Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- 📊 Lighthouse Score > 90 across all categories
- 🎨 Optimized images and assets
- 📦 Code splitting and lazy loading
- 🗜️ Compressed production builds

---

**Built with ❤️ using React + Vite + TypeScript + Tailwind CSS**

