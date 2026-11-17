import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mahesh-phalke-portfolio-minimist.vercel.app"),
  alternates: { canonical: "/" },
  title: {
    default: "Mahesh Phalke | Freelance Web Developer & Python Developer",
    template: "%s | Mahesh Phalke"
  },
  description: "Mahesh Phalke is a freelance web developer building responsive React and MERN websites, Python automation, web scraping, and Excel data analytics solutions for businesses and startups.",
  applicationName: "MaheshDev",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  },
  authors: [{ name: "Mahesh Phalke" }],
  creator: "Mahesh Phalke",
  publisher: "Mahesh Phalke",
  keywords: [
    "Mahesh Phalke", "freelance web developer", "React developer",
    "MERN stack developer", "Next.js developer", "Node.js developer",
    "Python developer", "Python automation", "web scraping",
    "Excel dashboard", "data analytics", "freelancer India"
  ],
  category: "technology",
  openGraph: {
    title: "Mahesh Phalke | Web Development, Python & Data Analytics",
    description: "Responsive websites, Python automation, and data analytics solutions for growing businesses.",
    type: "website",
    locale: "en_IN",
    siteName: "MaheshDev"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Phalke | Freelance Developer",
    description: "Web development, Python automation, and data analytics."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
