# 🚀 Siyakhula Tech Website - Deployment & Customization Guide

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Deployment Options](#deployment-options)
3. [Customization Guide](#customization-guide)
4. [Configuration](#configuration)
5. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to the website directory
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

#### Via Netlify UI:

1. **Sign up** at [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repository
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher
5. Click **"Deploy site"**

#### Via Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd website
netlify deploy --prod
```

**Custom Domain:** Go to Site settings → Domain management → Add custom domain

---

### Option 2: Vercel

#### Via Vercel UI:

1. **Sign up** at [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your Git repository
4. **Settings:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click **"Deploy"**

#### Via Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd website
vercel --prod
```

---

### Option 3: GitHub Pages

1. **Create `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install and Build
        run: |
          cd website
          npm install
          npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./website/dist
```

2. Enable GitHub Pages in repository settings
3. Set source to `gh-pages` branch

---

### Option 4: Traditional Hosting (cPanel, etc.)

1. Run `npm run build`
2. Upload contents of `dist/` folder to your hosting via FTP
3. Point your domain to the uploaded directory

---

## 🎨 Customization Guide

### 1. Update Business Information

#### Contact Details

**File:** `src/components/layout/Footer.jsx` and `src/pages/Contact.jsx`

```javascript
// Replace placeholders:
- Phone: Change all instances of "+27 XX XXX XXXX" to your actual number
- Email: Change "info@siyakhulatech.co.za" to your email
- WhatsApp: Update "https://wa.me/27XXXXXXXXX" with your number
- Location: Update "Cape Town, South Africa" to your location
```

#### Company Name

**File:** `index.html` (line 9)

```html
<title>Your Business Name | Tagline</title>
```

**Files:** `src/components/layout/Navbar.jsx` and `Footer.jsx`

Change "Siyakhula Tech" to your business name.

---

### 2. Colors & Branding

#### Primary Color (Teal)

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    50: '#f0fdfa',   // Lightest
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',  // Main brand color
    600: '#0d9488',  // Hover states
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',  // Darkest
  }
}
```

**Quick color change:** Replace all hex values with your brand colors.

**Color palette generators:**
- [Coolors.co](https://coolors.co)
- [Tailwind Shades](https://www.tailwindshades.com)

---

### 3. Images & Media

#### Replace Placeholder Images

**Files:** All pages use Unsplash images. Replace URLs in:

- `src/pages/Portfolio.jsx` (project images, testimonial photos)
- `src/pages/About.jsx` (team photo)

**Options:**
1. Use your own images (upload to `public/images/`)
2. Use free stock photos from:
   - [Unsplash](https://unsplash.com)
   - [Pexels](https://pexels.com)
   - [Pixabay](https://pixabay.com)

**Example:**

```javascript
// Before
image: "https://images.unsplash.com/photo-..."

// After (using local image)
image: "/images/my-project.jpg"
```

#### Logo

**File:** `public/` folder

Add your logo file (e.g., `logo.svg` or `logo.png`)

**File:** `src/components/layout/Navbar.jsx` (line ~50)

```jsx
<img src="/logo.svg" alt="Your Business" className="h-10" />
```

---

### 4. Copy & Content

#### Homepage Hero Text

**File:** `src/pages/Home.jsx` (lines 100-115)

```javascript
<h1>Your Compelling Headline</h1>
<p>Your value proposition</p>
```

#### Services

**File:** `src/pages/Services.jsx` (lines 30-130)

Edit the `services` array to match your offerings:

```javascript
{
  title: "Your Service Name",
  description: "What you offer",
  features: ["Benefit 1", "Benefit 2"],
  pricing: "From R2,500",
  deliveryTime: "3-7 days"
}
```

#### Portfolio Projects

**File:** `src/pages/Portfolio.jsx` (lines 20-100)

Replace placeholder projects with your actual work:

```javascript
{
  title: "Project Name",
  client: "Client Name",
  description: "What you built",
  results: ["Outcome 1", "Outcome 2"],
  before: "Problem",
  after: "Solution",
  image: "/images/project.jpg"
}
```

#### Testimonials

**File:** `src/pages/Portfolio.jsx` (lines 110-150)

Add real client testimonials:

```javascript
{
  name: "Client Name",
  business: "Business Name",
  text: "Testimonial quote",
  rating: 5
}
```

---

### 5. Navigation & Routes

**File:** `src/components/layout/Navbar.jsx` (lines 35-42)

Add/remove pages:

```javascript
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },  // Add new page
];
```

**Don't forget to:**
1. Create the new page component in `src/pages/`
2. Add route in `src/App.jsx`

---

### 6. SEO & Meta Tags

**File:** `index.html`

```html
<title>Your Business | Tagline</title>
<meta name="description" content="Your business description" />
<meta name="keywords" content="your, keywords, here" />
```

**For better SEO, add:**

```bash
npm install react-helmet-async
```

Then wrap App in:

```jsx
import { HelmetProvider } from 'react-helmet-async';

<HelmetProvider>
  <App />
</HelmetProvider>
```

---

### 7. Analytics & Tracking

#### Google Analytics

**File:** `index.html` (before closing `</head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Facebook Pixel, etc.

Add tracking scripts similarly in `index.html`.

---

### 8. Form Integration

**File:** `src/pages/Contact.jsx`

The form currently logs to console. To integrate with a backend:

#### Option A: Netlify Forms

```jsx
<form
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form */}
</form>
```

#### Option B: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action:

```jsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
```

#### Option C: Custom Backend

Replace the `handleSubmit` function with your API call:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    setSubmitted(true);
  }
};
```

---

### 9. WhatsApp Integration

**Files:**
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Services.jsx`

Replace all instances of:

```
https://wa.me/27XXXXXXXXX
```

With your WhatsApp number in international format:

```
https://wa.me/27YOURNUMBER
```

Example: `https://wa.me/27821234567`

---

## ⚙️ Configuration

### Environment Variables

Create `.env` file in `website/` directory:

```env
VITE_SITE_NAME="Siyakhula Tech"
VITE_CONTACT_EMAIL="info@siyakhulatech.co.za"
VITE_WHATSAPP_NUMBER="27XXXXXXXXX"
VITE_GA_ID="G-XXXXXXXXXX"
```

Access in code:

```javascript
const email = import.meta.env.VITE_CONTACT_EMAIL;
```

---

## 🛠️ Troubleshooting

### Build Errors

**Issue:** "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue:** Tailwind styles not working

Check that `tailwind.config.js` and `postcss.config.js` exist and are configured correctly.

---

### Deployment Issues

**Issue:** Site deployed but shows blank page

- Check browser console for errors
- Ensure `base` in `vite.config.js` matches your deployment path
- For GitHub Pages, set: `base: '/repository-name/'`

**Issue:** Images not loading

- Use absolute paths: `/images/photo.jpg` instead of `./images/photo.jpg`
- Or import images: `import logo from './assets/logo.png'`

---

### Performance

**Optimize images:**

```bash
# Install sharp for image optimization
npm install sharp

# Or use online tools:
# - TinyPNG.com
# - Squoosh.app
```

**Code splitting:** Already enabled via Vite

**Lazy loading:**

```jsx
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./pages/About'));

<Suspense fallback={<div>Loading...</div>}>
  <About />
</Suspense>
```

---

## 📞 Support

If you need help:

1. Check [Vite docs](https://vitejs.dev)
2. Check [React Router docs](https://reactrouter.com)
3. Check [Tailwind docs](https://tailwindcss.com)
4. Open an issue on GitHub
5. Hire a developer for custom modifications

---

## ✅ Pre-Launch Checklist

- [ ] Update all contact information (phone, email, WhatsApp)
- [ ] Replace placeholder images
- [ ] Customize colors to match brand
- [ ] Update copy/content on all pages
- [ ] Test all links
- [ ] Test contact form submission
- [ ] Add Google Analytics
- [ ] Test on mobile devices
- [ ] Check loading speed (use [PageSpeed Insights](https://pagespeed.web.dev))
- [ ] Set up custom domain
- [ ] Add favicon (`public/favicon.ico`)
- [ ] Test on different browsers
- [ ] Set up email for contact form
- [ ] Add social media links
- [ ] Create sitemap (auto-generated by hosting platforms)

---

## 🎉 You're Ready!

Your website is production-ready and can be deployed in minutes. Good luck with your business!

**Pro tip:** Keep the source code backed up on GitHub and make regular updates to content and testimonials.
