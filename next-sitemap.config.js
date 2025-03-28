/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://gold-swan.is",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: `${this.siteUrl}/is`, hreflang: "is" },
    { href: `${this.siteUrl}/ru`, hreflang: "ru" },
  ],
};
