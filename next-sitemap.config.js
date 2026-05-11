/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sterbeportal.de',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
}
