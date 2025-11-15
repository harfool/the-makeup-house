# The Makeup House 💄✨

A modern, production-ready Single Page Application (SPA) for a professional beauty salon. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Responsive Design** - Mobile-first approach with seamless experience across all devices
- **Modern UI/UX** - Clean, elegant design with smooth animations using Framer Motion
- **Fast Performance** - Optimized build with code splitting and lazy loading
- **SEO Optimized** - Comprehensive meta tags and Open Graph support
- **Accessible** - WCAG compliant with semantic HTML, ARIA labels, and keyboard navigation
- **6 Complete Pages**:
  - Home (Hero, USP badges, Featured looks)
  - Gallery (Responsive grid with lightbox modal)
  - Services (6 service cards with pricing)
  - Testimonials (Client reviews with ratings)
  - About (Team, mission, values)
  - Contact (Form with validation, contact info, WhatsApp integration)

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd the-makeup-house
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

## 🎨 Customization Guide

### Update Colors

Edit `tailwind.config.cjs`:

```javascript
colors: {
  cream: '#fff7f9',    // Background
  blush: '#ffd6e0',    // Secondary background
  rose: '#ff9db2',     // Accent color
  brand: '#6b1b4d',    // Primary brand color
}
```

### Update Hero Section

Edit `src/pages/Home.jsx`:

```javascript
// Line 60-70: Update heading and subheading
<h1>Welcome to <span>The Makeup House</span></h1>
<p>Where Beauty Meets Artistry...</p>
```

### Replace Gallery Images

Edit `src/pages/Gallery.jsx`:

```javascript
// Line 8-50: Replace image URLs and alt text
const images = [
  {
    id: 1,
    src: 'YOUR_IMAGE_URL',
    alt: 'Description of image',
  },
  // Add more images...
]
```

### Update Service Prices

Edit `src/pages/Services.jsx`:

```javascript
// Line 11-60: Update service details
const services = [
  {
    icon: Crown,
    title: 'Bridal Makeup',
    description: 'Your description...',
    price: '$250', // Change price here
  },
  // Update other services...
]
```

### Modify Testimonials

Edit `src/pages/Testimonials.jsx`:

```javascript
// Line 8-35: Update testimonial content
const testimonials = [
  {
    name: 'Client Name',
    role: 'Role/Occasion',
    image: 'IMAGE_URL',
    rating: 5,
    text: 'Testimonial text...',
  },
]
```

### Update Contact Information

Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`:

```javascript
// Footer.jsx Line 40-60: Update address, phone, email
// Contact.jsx Line 75-90: Update contact details
```

## 🔧 Contact Form Configuration

The contact form submits to `/.netlify/functions/contact`. To configure:

### Option 1: Netlify Functions (Recommended)

1. Create `netlify/functions/contact.js`:

```javascript
exports.handler = async (event) => {
  const data = JSON.parse(event.body)
  
  // Send email using SendGrid, Mailgun, etc.
  // Or save to database
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' })
  }
}
```

2. Deploy to Netlify

### Option 2: Custom Backend

Update `src/pages/Contact.jsx` line 48:

```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### Option 3: Email Service (Formspree, EmailJS, etc.)

```javascript
// Example with Formspree
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## 📁 Project Structure

```
the-makeup-house/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── ui/         # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Textarea.jsx
│   │   ├── Nav.jsx     # Navigation bar
│   │   ├── Footer.jsx  # Footer component
│   │   └── Lightbox.jsx # Image lightbox modal
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Gallery.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.cjs
└── postcss.config.cjs
```

## 🛠 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 🌐 Deployment

### Netlify (Recommended)

1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel

```bash
npm install -g vercel
vercel
```

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload `dist/` folder contents to your hosting
3. Configure server to serve `index.html` for all routes

## 📝 SEO Checklist

- ✅ Meta tags configured in `index.html`
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML throughout
- ✅ Alt text on all images
- ✅ Lazy loading for gallery images
- ✅ Preloaded hero image
- 🔲 Add real favicon (replace placeholder)
- 🔲 Add sitemap.xml
- 🔲 Configure robots.txt
- 🔲 Add Google Analytics (optional)

## 🎯 Performance Optimizations

- Code splitting by route
- Lazy loading of images
- Optimized animations (GPU-accelerated)
- Vendor chunk separation
- Minified production build

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues, please contact:
- Email: info@themakeuphouse.com
- Phone: +1 (234) 567-890

---

Made with ❤️ for The Makeup House
