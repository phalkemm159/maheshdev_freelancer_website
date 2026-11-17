# MaheshDev --- Freelancing Portfolio

**MaheshDev** is the personal freelancing portfolio of **Mahesh
Phalke**, an independent developer based in India. The website presents
freelance services, selected projects, development skills, and contact
options for clients looking for practical digital solutions.

🌐 **Live portfolio:**
https://maheshdev-freelancer-website.vercel.app/

------------------------------------------------------------------------

## About the Portfolio

The portfolio is designed to help potential clients understand what I
offer, review examples of my work, and contact me about a project.

### Services

-   **Web Development** --- Responsive websites and full-stack web
    applications using React, Next.js, Node.js, Express, and MongoDB.
-   **Python Automation** --- Python-based automation and practical
    workflow solutions.
-   **Data Analytics** --- Data cleaning, analysis, and visualization,
    including useful Excel dashboards.

## Website Features

-   Modern, responsive layout for desktop, tablet, and mobile
-   Dark mode and light mode toggle
-   Custom MaheshDev logo, favicon, and app icons
-   Profile introduction and service highlights
-   Selected project portfolio with repository links and available live
    demos
-   Contact links for email, phone, WhatsApp, LinkedIn, Upwork,
    Freelancer, and GitHub
-   SEO metadata, Open Graph metadata, sitemap, and robots configuration
-   Ready for deployment on Vercel

## Tech Stack

  Technology       Usage
  ---------------- -------------------------------------------
  Next.js 14       React framework and application structure
  React 18         UI components
  JavaScript       Application logic
  Tailwind CSS 3   Styling configuration
  Lucide React     Icons
  Vercel           Deployment platform

------------------------------------------------------------------------

## Run Locally

### Prerequisites

-   Node.js 18.17 or later (Node.js 20 LTS recommended)
-   npm
-   Git (optional, but recommended)

### 1. Get the project

Clone your GitHub repository:

``` bash
git clone YOUR_REPOSITORY_URL
cd maheshdev-portfolio
```

Or download and extract the project ZIP, then open the
`maheshdev-portfolio` folder in your terminal or VS Code.

### 2. Install dependencies

``` bash
npm install
```

### 3. Start the development server

``` bash
npm run dev
```

Open http://localhost:3000 in your browser.

To stop the server, press `Ctrl + C` in the terminal.

### Windows quick start

You can also double-click `RUN-WEBSITE.bat` from the project folder. On
first run, it installs dependencies and starts the local development
server. An internet connection is required for the initial dependency
installation.

### 4. Test a production build

``` bash
npm run build
```

To run the production build locally:

``` bash
npm run start
```

------------------------------------------------------------------------

## Deploy on Vercel

### Deploy using GitHub

1.  Push the contents of the `maheshdev-portfolio` folder to a GitHub
    repository.

2.  Go to https://vercel.com/new and sign in.

3.  Select **Import Git Repository** and choose your portfolio
    repository.

4.  Set **Root Directory** to the folder that contains `package.json`.

    -   If `package.json` is at the repository root, use `./`.

5.  Select **Next.js** as the framework preset if it is not detected
    automatically.

6.  Use the default settings:

      Setting            Value
      ------------------ -----------------
      Framework Preset   Next.js
      Install Command    `npm install`
      Build Command      `npm run build`
      Output Directory   Default

7.  Click **Deploy**.

Vercel will build and publish the site. When the GitHub repository is
connected, pushing changes to the configured production branch can
trigger a new deployment.

### Domain and SEO settings

The project currently uses this domain in its SEO metadata:

``` text
https://mahesh-phalke-portfolio-minimist.vercel.app
```

If you deploy to a different domain, update the canonical/metadata base
URL in `app/layout.js` and the site URL in `app/sitemap.js` and
`app/robots.js` where applicable.

------------------------------------------------------------------------

## Featured Projects

The portfolio currently highlights these projects:

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Project                 Source Code                                                                        Live Demo
  ----------------------- ---------------------------------------------------------------------------------- --------------------------------------------------------------
  GlobalNest              [GitHub repository](https://github.com/phalkemm159/GlobalNest-Fullstack)           [View demo](https://globalnest.onrender.com/)

  Hospital Management     [GitHub                                                                            [View
  System                  repository](https://github.com/phalkemm159/Hospital_Management_System_Project)     demo](https://hospital-management-system-w6nv.onrender.com/)

  EduRAG --- AI-Powered   [GitHub                                                                            No live demo link currently listed
  Learning Assistant      repository](https://github.com/phalkemm159/EduRAG-AI-Powered-Learning-Assistant)   

  All PDFs AI             [GitHub repository](https://github.com/phalkemm159/ALL_PDFS_AI)                    [View demo](https://all-pdfs-ai.onrender.com/)

  Collaborative           [GitHub repository](https://github.com/phalkemm159/WhiteBoard-Collaboration-Tool)  No live demo link currently listed
  Whiteboard                                                                                                 
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Live demo availability depends on the respective hosting services.

------------------------------------------------------------------------

## Contact & Freelance Enquiries

For project discussions and collaboration:

-   **Email:** <phalkemm234@gmail.com>
-   **Phone:** [+91 98345 70499](tel:+919834570499)
-   **WhatsApp:** [Message me](https://wa.me/9834570499/)
-   **LinkedIn:** https://www.linkedin.com/in/mahesh-phalke159
-   **GitHub:** https://github.com/phalkemm159
-   **Upwork:**
    https://www.upwork.com/freelancers/\~0186912d29790262f8?mp_source=share
-   **Freelancer:** https://www.freelancer.in/u/phalkemm159

The main project enquiry button opens the visitor's default email
application with the recipient and subject pre-filled. The visitor must
send the email themselves; the website does not send email
automatically.

------------------------------------------------------------------------

## Project Structure

``` text
maheshdev-portfolio/
├── app/
│   ├── globals.css       # Global styles, themes, and responsive design
│   ├── layout.js         # Root layout and SEO metadata
│   ├── page.js           # Portfolio page and content sections
│   ├── theme-toggle.js   # Dark/light theme toggle
│   ├── robots.js         # Search engine crawling rules
│   └── sitemap.js        # Sitemap generation
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   ├── icon.png
│   ├── apple-icon.png
│   └── images/
│       └── mahesh-phalke.webp
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
├── vercel.json
├── RUN-WEBSITE.bat
└── README.md
```

## Customize the Website

  ------------------------------------------------------------------------
  What to change                      File
  ----------------------------------- ------------------------------------
  Page content, services, projects,   `app/page.js`
  contact links                       

  Colors, typography, theme styles,   `app/globals.css`
  responsive layout                   

  Theme toggle                        `app/theme-toggle.js`

  Page title, description, SEO and    `app/layout.js`
  social metadata                     

  Sitemap and crawler rules           `app/sitemap.js`, `app/robots.js`

  Profile image                       `public/images/mahesh-phalke.webp`

  Browser and app icons               Files in `public/`
  ------------------------------------------------------------------------

After editing, run `npm run build` to check the production build.

------------------------------------------------------------------------

## License & Usage

This is a personal freelancing portfolio. The personal branding, profile
photograph, and portfolio content belong to their respective owner.
Please ask for permission before reusing personal images, branding, or
content.

------------------------------------------------------------------------

**Designed and developed by Mahesh Phalke**\
🌐 https://mahesh-phalke-portfolio-minimist.vercel.app/
