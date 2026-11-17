## Quick start on Windows

1. Extract the ZIP file.
2. Open the `maheshdev-portfolio` folder.
3. Double-click `RUN-WEBSITE.bat`.
4. On the first run, it installs npm dependencies automatically (internet required).
5. It starts the Next.js development server and opens http://localhost:3000.

Keep the server terminal window open while viewing the site. Press `Ctrl+C` in that window to stop it. Node.js 18.17+ is required; Node.js 20 LTS is recommended.

# MaheshDev – Freelance Portfolio

A modern, responsive, SEO-ready portfolio built with Next.js 14, React, Tailwind CSS, and Lucide icons.

## Requirements
- Node.js 18.17+ (Node.js 20 LTS recommended)
- npm

## Run on Windows

1. Extract the ZIP.
2. Open the `maheshdev-portfolio` folder in VS Code.
3. Open the integrated terminal.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit http://localhost:3000

## Personalize before launch

Contact details have been added to the homepage:
- Phone: `+91 98345 70499` (click-to-call)
- Email: `phalkemm234@gmail.com` (click-to-email)
- LinkedIn: `https://www.linkedin.com/in/mahesh-phalke159`
- Upwork: `https://www.upwork.com/freelancers/~0186912d29790262f8`
- Freelancer: `https://www.freelancer.in/u/phalkemm159`
- The ServiceHub GitHub link with the exact repository URL.
- If you deploy to a different domain, update the production URL in `app/layout.js`, `app/sitemap.js`, and `app/robots.js`.

Review project descriptions so they only claim features you have actually built. Add genuine project screenshots and a social sharing image (`app/opengraph-image.png` or `app/opengraph-image.jpg`) before sharing the site widely.

## SEO included

- Page title and meta description
- Relevant keyword metadata
- Open Graph and Twitter card metadata
- Robots metadata and `robots.txt` route
- Sitemap route (activate after setting your real domain)
- Person JSON-LD structured data
- Semantic sections and accessible navigation labels
- Responsive layout and reduced-motion support

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. Sign in to Vercel using GitHub.
3. Import the repository.
4. Deploy with the default Next.js settings.
5. Add your custom domain and then update `app/sitemap.js`.

## Important SEO note

Metadata and structured data help search engines understand the site; they do not guarantee rankings. After deployment, verify the domain in Google Search Console, submit `/sitemap.xml`, and request indexing. Performance and search visibility also depend on real content, backlinks, page speed, and competition.


### Homepage profile photo
Your homepage portrait is stored at `public/images/mahesh-phalke.webp`. Replace this file with another optimized WebP image using the same filename if you want to update your photo.


## Featured projects and links

- **GlobalNest:** [GitHub](https://github.com/phalkemm159/GlobalNest-Fullstack) · [Live demo](https://globalnest.onrender.com/)
- **Hospital Management System:** [GitHub](https://github.com/phalkemm159/Hospital_Management_System_Project) · [Live demo](https://hospital-management-system-w6nv.onrender.com/)
- **EduRAG:** [GitHub](https://github.com/phalkemm159/EduRAG-AI-Powered-Learning-Assistant)
- **All PDFs AI:** [GitHub](https://github.com/phalkemm159/ALL_PDFS_AI) · [Live demo](https://all-pdfs-ai.onrender.com/)
- **Collaborative Whiteboard:** [GitHub](https://github.com/phalkemm159/WhiteBoard-Collaboration-Tool)

Live links were checked on 17 November 2026. The GlobalNest URL returned HTTP 503 during the check; verify its Render service status before promoting that demo.


## WhatsApp contact

Homepage WhatsApp button: https://wa.me/9834570499/?text=Hi%20wanted%20to%20connect%20.....


## Responsive layout

The homepage includes responsive layouts for desktop, tablet, and mobile widths, with additional safeguards for narrow screens (including 360px devices). Before publishing, preview the site in browser device emulation at 360px, 390px, 768px, 1024px, and desktop width, and verify navigation, hero buttons, portrait, project cards, and contact links.


## Vercel deployment

See [DEPLOY-TO-VERCEL.md](./DEPLOY-TO-VERCEL.md) for GitHub import and Vercel CLI deployment steps. The production domain is currently configured as `https://mahesh-phalke-portfolio-minimist.vercel.app`.


### Custom website icon
The custom favicon is included in `public/favicon.ico` and `public/icon.png`; the Apple touch icon is `public/apple-icon.png`. Next.js metadata in `app/layout.js` references these assets. Vercel will deploy them automatically.
