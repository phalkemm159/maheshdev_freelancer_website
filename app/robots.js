const SITE_URL = "https://mahesh-phalke-portfolio-minimist.vercel.app";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
