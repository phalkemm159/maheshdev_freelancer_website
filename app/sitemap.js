const SITE_URL = "https://mahesh-phalke-portfolio-minimist.vercel.app";

export default function sitemap() {
  return [{
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1
  }];
}
