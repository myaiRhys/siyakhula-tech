# ⚡ Quick Start Guide

Get your website customized and online in 30 minutes!

## Step 1: Install & Run (5 minutes)

```bash
cd website
npm install
npm run dev
```

Open http://localhost:5173 to see your site.

---

## Step 2: Update Contact Info (5 minutes)

### WhatsApp Number

**Find & Replace ALL instances of:**
- `27XXXXXXXXX` → Your WhatsApp number (international format, no +)
- Example: If your number is +27 82 123 4567, use `27821234567`

**Files to update:**
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Services.jsx`

### Email Address

**Find & Replace:**
- `info@siyakhulatech.co.za` → Your email

**Files:**
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`

### Phone Number

**Find & Replace:**
- `+27 XX XXX XXXX` → Your phone number

**Files:**
- `src/components/layout/Footer.jsx`
- `src/pages/Contact.jsx`

---

## Step 3: Update Business Name (3 minutes)

**File:** `index.html` (line 9)
```html
<title>Your Business Name | Your Tagline</title>
```

**Files:** `src/components/layout/Navbar.jsx` and `Footer.jsx`

Find "Siyakhula" and "Tech" - replace with your business name.

---

## Step 4: Customize Homepage (10 minutes)

**File:** `src/pages/Home.jsx`

### Update Hero (lines 100-110)
```jsx
<h1>Your Main Headline</h1>
<p>Your value proposition - what makes you different?</p>
```

### Update Stats (lines 60-65)
```javascript
const stats = [
  { number: "100+", label: "Happy Clients" },  // Change these
  { number: "4.9/5", label: "Rating" },
  // ...
];
```

---

## Step 5: Update Services (5 minutes)

**File:** `src/pages/Services.jsx` (lines 30-130)

Edit the services array:

```javascript
{
  title: "Your Service Name",
  description: "What you offer and why it's great",
  pricing: "From R3,000",  // Your pricing
  deliveryTime: "5 days",  // Your delivery time
}
```

---

## Step 6: Add Your Projects (Optional - 10 minutes)

**File:** `src/pages/Portfolio.jsx` (lines 20-100)

Replace with your real projects:

```javascript
{
  title: "Project Name",
  client: "Client Name",
  description: "What you built",
  results: ["Result 1", "Result 2"],
  image: "/images/project.jpg",  // Add images to public/images/
}
```

---

## Step 7: Deploy! (5 minutes)

### Option A: Netlify (Easiest)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `dist/` folder (after running `npm run build`)
3. Done! You get a free .netlify.app domain

### Option B: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Deploy!

---

## Common Customizations

### Change Colors

**File:** `tailwind.config.js`

```javascript
primary: {
  500: '#14b8a6',  // Change this hex code to your brand color
  600: '#0d9488',  // Slightly darker shade
}
```

Use a color picker or [Tailwind Shades](https://www.tailwindshades.com) to generate shades.

### Add Your Logo

1. Save your logo as `public/logo.svg` or `public/logo.png`
2. **File:** `src/components/layout/Navbar.jsx` (line ~50)

```jsx
<img src="/logo.svg" alt="Your Business" className="h-10" />
```

### Change Font

**File:** `src/index.css` (line 1)

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap');
```

Then update `body` font-family.

---

## Troubleshooting

**Site not loading?**
- Run `npm install` again
- Delete `node_modules` and reinstall

**Styles not working?**
- Make sure Tailwind CSS is installed
- Check browser console for errors

**Build failing?**
- Run `npm run build` and check for errors
- Make sure all imports are correct

---

## Next Steps

1. **Test on mobile** - Use Chrome DevTools (F12 → Toggle Device Toolbar)
2. **Add Google Analytics** - See DEPLOYMENT.md
3. **Get feedback** - Share with friends/family
4. **Go live!** - Point your domain to your deployed site

---

## Need More Help?

- Full deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Main README: [README.md](./README.md)
- React docs: [react.dev](https://react.dev)
- Tailwind docs: [tailwindcss.com](https://tailwindcss.com)

---

## ✅ Pre-Launch Checklist

- [ ] Updated WhatsApp, email, phone
- [ ] Changed business name
- [ ] Updated homepage hero text
- [ ] Customized services & pricing
- [ ] Added real projects (or removed portfolio page temporarily)
- [ ] Changed colors to match brand
- [ ] Added logo
- [ ] Tested on mobile
- [ ] Built successfully (`npm run build`)
- [ ] Deployed to Netlify/Vercel

**You're ready to go live! 🚀**
