# Deployment Guide

Complete guide for deploying Policy Nivesh to various hosting platforms.

---

## 🚀 Pre-Deployment Checklist

Before deploying, ensure you've completed:

- [ ] Updated `SITE_CONFIG` in `src/utils/constants.ts` with production values
- [ ] Updated `sitemap.xml` with production URLs
- [ ] Set up environment variables (if any)
- [ ] Tested the production build locally (`npm run build && npm run preview`)
- [ ] Verified all links work
- [ ] Checked meta tags and SEO elements
- [ ] Tested contact form functionality
- [ ] Verified responsive design on multiple devices
- [ ] Run Lighthouse audit (aim for 90+ on all scores)

---

## 📦 Build for Production

```bash
# Install dependencies (if not already installed)
npm install

# Build the project
npm run build

# Test the production build locally
npm run preview
```

The production build will be in the `dist/` directory.

---

## 1. Deploy to Netlify 🔷

### Option A: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your project
npm run build

# Deploy
netlify deploy --prod
```

### Option B: Deploy via Git

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 or higher
6. Click "Deploy site"

### Netlify Configuration File

Create `netlify.toml` in root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## 2. Deploy to Vercel 🔺

### Option A: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option B: Deploy via Git

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Vite
6. Configure if needed:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
7. Click "Deploy"

### Vercel Configuration File

Create `vercel.json` in root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 3. Deploy to GitHub Pages 📄

### Step 1: Install gh-pages

```bash
npm install -D gh-pages
```

### Step 2: Update vite.config.ts

```typescript
export default defineConfig({
  base: '/policy_nivesh/', // Replace with your repo name
  // ... rest of config
});
```

### Step 3: Add Deploy Script

Add to `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 4: Deploy

```bash
npm run deploy
```

### Step 5: Configure GitHub Pages

1. Go to repository Settings → Pages
2. Source: Deploy from branch
3. Branch: `gh-pages` / root
4. Save

Site will be available at: `https://yourusername.github.io/policy_nivesh/`

---

## 4. Deploy to Firebase Hosting 🔥

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

### Step 3: Initialize Firebase

```bash
firebase init hosting
```

- Choose existing project or create new
- Set public directory: `dist`
- Configure as single-page app: `Yes`
- Set up automatic builds: `No`

### Step 4: Build and Deploy

```bash
npm run build
firebase deploy
```

### Firebase Configuration

Create `firebase.json` in root:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

---

## 5. Deploy to AWS S3 + CloudFront ☁️

### Step 1: Build the Project

```bash
npm run build
```

### Step 2: Create S3 Bucket

```bash
aws s3 mb s3://policy-nivesh-website
```

### Step 3: Enable Static Website Hosting

```bash
aws s3 website s3://policy-nivesh-website/ \
  --index-document index.html \
  --error-document index.html
```

### Step 4: Upload Files

```bash
aws s3 sync dist/ s3://policy-nivesh-website/ \
  --delete \
  --cache-control max-age=31536000,public
```

### Step 5: Set Up CloudFront

1. Go to CloudFront in AWS Console
2. Create new distribution
3. Origin: Your S3 bucket
4. Configure custom error pages (404 → /index.html)
5. Set up SSL certificate
6. Deploy

---

## 6. Deploy to DigitalOcean App Platform 🌊

1. Push code to GitHub
2. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
3. Click "Create App"
4. Connect GitHub repository
5. Configure:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **HTTP Routes:** `/` → `dist/index.html`
6. Choose plan (Static Site)
7. Click "Launch App"

---

## 7. Deploy to Render 🎨

1. Push code to GitHub
2. Go to [Render](https://render.com)
3. Click "New Static Site"
4. Connect repository
5. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Click "Create Static Site"

---

## 🌐 Custom Domain Setup

### For Netlify/Vercel

1. Go to site settings
2. Add custom domain
3. Update DNS records as instructed
4. SSL will be automatically provisioned

### DNS Records Example

```
A     @        76.76.21.21
CNAME www      your-site.netlify.app
```

---

## 🔒 HTTPS/SSL Setup

Most modern hosting platforms (Netlify, Vercel, Firebase) provide **automatic SSL certificates** via Let's Encrypt.

For custom setups:
1. Use Let's Encrypt certbot
2. Or purchase SSL certificate
3. Configure in web server

---

## 📊 Post-Deployment Tasks

### 1. Set Up Analytics

Add Google Analytics to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Submit Sitemap

- Google Search Console: Submit `sitemap.xml`
- Bing Webmaster Tools: Submit `sitemap.xml`

### 3. Set Up Monitoring

- **Uptime Monitoring:** UptimeRobot, Pingdom
- **Error Tracking:** Sentry
- **Performance:** Google Lighthouse CI

### 4. Test Everything

- [ ] Test all pages and links
- [ ] Verify contact form
- [ ] Check mobile responsiveness
- [ ] Validate SEO meta tags
- [ ] Test loading speed
- [ ] Check browser compatibility

---

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

---

## 🐛 Troubleshooting

### Build Fails

- Check Node.js version (18+ required)
- Delete `node_modules` and reinstall
- Clear build cache

### 404 on Refresh

Add rewrite rules (see platform-specific configs above)

### Images Not Loading

- Check paths (use absolute paths from `public/`)
- Verify files exist in `dist/` after build

### Slow Loading

- Enable compression (Gzip/Brotli)
- Use CDN
- Optimize images
- Enable caching headers

---

## 📈 Performance Optimization

### Enable Compression

Most platforms enable this automatically. For custom servers:

```nginx
# Nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
```

### Cache Headers

```nginx
# Cache static assets for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Use CDN

- CloudFlare (free tier available)
- AWS CloudFront
- Fastly

---

## 🔐 Environment Variables

For sensitive data, use environment variables:

### Netlify
```bash
netlify env:set KEY value
```

### Vercel
```bash
vercel env add KEY
```

### GitHub Actions
Add in Repository Settings → Secrets

---

## 📞 Support

If you encounter issues:
1. Check platform documentation
2. Review error logs
3. Contact support@policynivesh.com

---

## 🎉 Congratulations!

Your site is now live! 🚀

Remember to:
- Monitor performance
- Keep dependencies updated
- Backup regularly
- Test after updates

---

**Happy Deploying! 🌟**

