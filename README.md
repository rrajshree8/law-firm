# Sangam & Sagar Law Office LLP — Website

A premium law firm website built with **Next.js 14**, **Tailwind CSS**, and **Resend** for email.

## ✅ Features

- Luxury dark theme with gold accents (Playfair Display + EB Garamond typography)
- Fully responsive (mobile-first)
- Animated hero, services tabs, testimonials, team section
- Contact form with **Resend email** — sends notification to office + auto-confirmation to client
- WhatsApp float button with popup
- SEO-ready metadata
- Ready to deploy on Vercel in minutes

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Option A — GitHub + Vercel (Recommended)

1. **Upload this folder to GitHub:**
   - Create a new repo at [github.com/new](https://github.com/new)
   - Upload all files OR run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
     git push -u origin main
     ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) → New Project
   - Import your GitHub repo
   - Framework: **Next.js** (auto-detected)
   - Add these **Environment Variables**:
     ```
     RESEND_API_KEY = re_SaBqJK3L_JJRFK3rDwC2UsD1DYhBNZsyE
     CONTACT_EMAIL  = sslawoffice01@gmail.com
     ```
   - Click **Deploy** ✅

### Option B — Vercel CLI

```bash
npm install -g vercel
cd law-firm
npm install
vercel
# Follow prompts, add env vars when asked
```

---

## 💻 Run Locally

```bash
cd law-firm
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📧 Email Setup (Resend)

The contact form sends two emails:
1. **To your office** (`sslawoffice01@gmail.com`) — full client details
2. **To the client** — professional confirmation with WhatsApp CTA

> **Important:** Resend's free plan sends from `onboarding@resend.dev`. To send from your own domain (e.g. `info@sangamsagar.com`), add your domain at [resend.com/domains](https://resend.com/domains) and update the `from` field in `src/app/api/contact/route.ts`.

---

## 📁 Project Structure

```
law-firm/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   ← Email API (Resend)
│   │   ├── globals.css            ← Luxury theme styles
│   │   ├── layout.tsx             ← Root layout + fonts
│   │   └── page.tsx               ← Main page
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Ticker.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Team.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── WhatsAppFloat.tsx
├── .env.local                     ← Local env vars (not committed)
├── .env.example                   ← Reference for Vercel env vars
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Customization

- **Colors:** Edit CSS variables in `globals.css`
- **Team photos:** Replace `img src` URLs in `Team.tsx` with real photos
- **Office info:** Update address/phone in `Contact.tsx` and `Footer.tsx`
- **Services:** Edit the `services` array in `Services.tsx`
- **Testimonials:** Edit the `testimonials` array in `Testimonials.tsx`

---

## 📞 Support

WhatsApp: +91 9336065812  
Email: sslawoffice01@gmail.com
