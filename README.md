# Sneh Kumar Daluka — Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It showcases my experience, projects, skills, and competitive programming achievements with a glassmorphism design and smooth animations.

🔗 **Live:** [https://github.com/SnehDaluka/portfolio](https://github.com/SnehDaluka/portfolio)

---

## ✨ Features

- **Animated hero** with a rotating gradient ring around the profile image, typed role cycling, and a stats strip
- **Glassmorphism UI** with a violet → indigo → cyan accent palette and ambient background glows
- **Scroll progress bar** that tracks reading position across the page
- **Experience timeline** with an "Active" indicator on the current role
- **Skills grid** with per-technology brand icons in their native colors
- **Featured project layout** — a wide highlight card plus a responsive grid
- **Competitive programming & certifications** section with platform ratings
- **Contact form** (Formspree-ready) with status feedback
- Fully **responsive** and accessible, with a sticky navbar, active-section highlighting, and a mobile menu

---

## 🛠️ Tech Stack

| Category   | Technologies                                  |
| ---------- | --------------------------------------------- |
| Framework  | Next.js 13 (App Router)                       |
| Language   | TypeScript                                    |
| Styling    | Tailwind CSS, custom CSS design tokens        |
| Animation  | Framer Motion                                 |
| Icons      | React Icons                                   |
| Deployment | Vercel                                        |

---

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build          |
| `npm run lint`  | Run ESLint                        |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── icons/         # tech-stack icons
│   ├── profile/       # profile images
│   ├── projects/      # project screenshots
│   └── resume/        # downloadable resume PDF
└── src/
    ├── app/           # Next.js App Router (layout, page, metadata)
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Footer.tsx
    │   ├── ScrollProgress.tsx
    │   └── sections/  # Hero, About, Experience, Skills, Projects, Achievements, Contact
    ├── data/
    │   └── portfolioData.ts   # all content centralized here
    └── styles/
        └── globals.css        # design system & component classes
```

---

## ✏️ Customization

All content lives in [`src/data/portfolioData.ts`](src/data/portfolioData.ts) — personal info, experience, skills, projects, and achievements. Edit that single file to update the site; the design system tokens (colors, gradients, shadows) are defined at the top of [`src/styles/globals.css`](src/styles/globals.css).

To enable the contact form, replace `YOUR_FORM_ID` in [`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx) with your [Formspree](https://formspree.io) form ID.

---

## 📬 Contact

- **Email:** snehdaluka@gmail.com
- **LinkedIn:** [sneh-kumar-daluka](https://www.linkedin.com/in/sneh-kumar-daluka-35904b249)
- **GitHub:** [SnehDaluka](https://github.com/SnehDaluka)

---

Built with ❤️ using Next.js.
