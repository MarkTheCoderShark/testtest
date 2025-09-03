import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webvello.com'
  
  // Only include pages that actually exist
  const pages = [
    '', // Homepage
    '/contact',
    '/pricing',
    '/services/web-development',
    '/services/wordpress-development',
    '/services/seo'
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page.includes('/services/') ? 'weekly' : 'monthly',
    priority: page === '' ? 1.0 : 
              page.includes('/services/') ? 0.9 :
              page.includes('/contact') || page.includes('/pricing') ? 0.8 : 0.7,
  }))
}