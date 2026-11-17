# Deploy MaheshDev to Vercel

This project is configured for Vercel and uses the Next.js framework.

## Recommended: deploy through GitHub

1. Extract `maheshdev-portfolio-vercel-ready.zip`.
2. Create a new GitHub repository (for example, `maheshdev-portfolio`).
3. Upload the **contents** of the `maheshdev-portfolio` folder to the repository root. The root must contain `package.json`, `app/`, and `public/`.
4. Open https://vercel.com/new and import that GitHub repository.
5. Keep the detected framework as **Next.js**. Keep the default settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: leave blank / default
   - Root directory: `./` (repository root)
6. Click **Deploy**. No environment variables are required for this portfolio.

## Deploy with Vercel CLI (alternative)

Install Node.js 20 LTS, then open a terminal in this project folder and run:

```bash
npm install
npx vercel
```

Follow the prompts, then deploy production with:

```bash
npx vercel --prod
```

## Domain and SEO

The canonical URL, sitemap, and robots.txt are configured for:

`https://mahesh-phalke-portfolio-minimist.vercel.app`

If you deploy this project to a different Vercel domain or custom domain, update the URL in:

- `app/layout.js` (`metadataBase`)
- `app/sitemap.js`
- `app/robots.js`

Then redeploy. Vercel automatically serves `/sitemap.xml` and `/robots.txt`.

## Local production check

```bash
npm install
npm run build
npm start
```

Open http://localhost:3000. The `npm run build` command is also the production build validation used by Vercel.


### Custom website icon
The custom favicon is included in `public/favicon.ico` and `public/icon.png`; the Apple touch icon is `public/apple-icon.png`. Next.js metadata in `app/layout.js` references these assets. Vercel will deploy them automatically.
