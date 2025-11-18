# 🚀 Siyakhula Tech - Modern Business Website

A complete, production-ready, responsive website built with React, Vite, and Tailwind CSS. Designed specifically for tech service businesses in South Africa.

![Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18+-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5+-646cff)

---

## ✨ Features

### 🎨 Design
- **Modern SaaS-style design** with clean aesthetics
- **Teal color palette** - professional and trustworthy
- **Smooth animations** using Framer Motion
- **Mobile-first responsive** design
- **Premium UI components** with hover effects and transitions

### 📱 Pages
1. **Home** - Hero, pain points, services preview, stats, CTAs
2. **Services** - Detailed service cards with pricing and features
3. **Portfolio** - Before/after project showcases and testimonials
4. **About** - Company story, values, strengths, and approach
5. **Contact** - Form, WhatsApp integration, FAQs

### 🛠️ Technical Features
- ⚡ **Lightning-fast** - Built with Vite
- 🎯 **SEO optimized** - Meta tags, semantic HTML
- ♿ **Accessible** - ARIA labels, semantic structure
- 🔄 **Reusable components** - Easy to customize
- 📦 **Production-ready** - Optimized build process
- 🎨 **Tailwind CSS** - Utility-first styling
- 🎭 **Framer Motion** - Smooth animations
- 🧭 **React Router** - Client-side routing

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([Download here](https://nodejs.org))
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in `dist/` folder, ready to deploy.

---

## 📁 Project Structure

```
website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── common/      # Shared UI components
│   │   └── layout/      # Layout components (Navbar, Footer)
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json
```

---

## 🎨 Customization

### 1. Update Contact Information

**Files to edit:**
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`

Replace:
- `+27 XX XXX XXXX` with your phone number
- `info@siyakhulatech.co.za` with your email
- `https://wa.me/27XXXXXXXXX` with your WhatsApp link

### 2. Change Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    500: '#14b8a6',  // Main brand color
    600: '#0d9488',  // Darker shade
    // ... add your colors
  }
}
```

### 3. Update Content

**Edit these files:**
- `src/pages/Home.jsx` - Hero text, pain points, services
- `src/pages/Services.jsx` - Service details, pricing
- `src/pages/Portfolio.jsx` - Projects, testimonials
- `src/pages/About.jsx` - Company story, team info

### 4. Add Your Logo

1. Place logo in `public/images/logo.svg`
2. Update `src/components/layout/Navbar.jsx`:

```jsx
<img src="/images/logo.svg" alt="Company Logo" />
```

For detailed customization instructions, see **[DEPLOYMENT.md](./DEPLOYMENT.md)**

---

## 🌐 Deployment

### Netlify (Recommended)

**Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel

**Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### Other Hosting

1. Run `npm run build`
2. Upload contents of `dist/` folder to your hosting

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for detailed deployment guides (GitHub Pages, cPanel, etc.)

---

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Icons** - Icon library

---

## 🎯 Key Features Breakdown

### Smooth Animations
- Scroll-triggered animations using Framer Motion
- Hover effects on cards and buttons
- Page transition animations
- Custom keyframe animations in Tailwind config

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Tested on all major devices

### Performance
- Optimized images (WebP format recommended)
- Code splitting via React Router
- Lazy loading for routes
- Minified CSS and JS in production

### SEO
- Semantic HTML structure
- Meta tags for social sharing
- Fast loading times
- Accessible navigation

---

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

---

## 📝 Copywriting Highlights

The website includes high-conversion copy that:
- Speaks directly to South African SME pain points
- Emphasizes speed, affordability, and results
- Uses clear, jargon-free language
- Includes strong CTAs throughout
- Highlights multilingual capabilities
- Focuses on practical solutions over features

---

## 🎨 Design Principles

1. **Clean & Modern** - Contemporary SaaS aesthetic
2. **Trust-Building** - Professional color palette (teal/primary)
3. **Action-Oriented** - Clear CTAs on every page
4. **Mobile-First** - Perfect on all devices
5. **Fast Loading** - Optimized for performance
6. **Accessible** - WCAG compliant

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Known Issues

None at this time! 🎉

If you encounter issues:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section
2. Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
3. Check browser console for errors

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Credits

- **Design Inspiration:** Modern SaaS platforms
- **Icons:** React Icons (Font Awesome)
- **Images:** Unsplash (replace with your own)
- **Fonts:** Inter (Google Fonts)

---

## 📞 Support & Questions

For help with customization or deployment:
- Read [DEPLOYMENT.md](./DEPLOYMENT.md)
- Check [Vite Documentation](https://vitejs.dev)
- Check [Tailwind Documentation](https://tailwindcss.com)

---

## ✅ Pre-Launch Checklist

Before going live, make sure you've:

- [ ] Updated all placeholder contact info
- [ ] Replaced placeholder images with real ones
- [ ] Customized colors to match your brand
- [ ] Updated all copy/content
- [ ] Tested contact form
- [ ] Added Google Analytics
- [ ] Tested on mobile devices
- [ ] Set up custom domain
- [ ] Added your logo and favicon
- [ ] Verified all links work

---

## 🎉 Ready to Launch!

This website is **production-ready** out of the box. Simply customize the content, deploy, and start getting customers!

**Built with ❤️ for South African businesses**
