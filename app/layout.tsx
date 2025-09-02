import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
// import GoogleAnalytics from '@/components/analytics/google-analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://webvello.com'),
  title: {
    default: 'Web Vello - Digital Marketing Agency | AI SEO, Local SEO, Web Development',
    template: '%s | Web Vello'
  },
  description: 'Drive revenue growth with data-driven digital marketing. Specializing in AI-powered SEO, local search dominance, and conversion-focused web development. Get 300%+ traffic growth in 6 months.',
  keywords: [
    'digital marketing agency',
    'AI SEO services',
    'local SEO optimization',
    'web development company',
    'UI/UX design services',
    'conversion rate optimization',
    'digital marketing consulting',
    'SEO agency',
    'web design services',
    'marketing automation'
  ],
  authors: [{ name: 'WebWagon', url: 'https://webwagon.com' }],
  creator: 'WebWagon',
  publisher: 'WebWagon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webwagon.com',
    siteName: 'WebWagon',
    title: 'WebWagon - Digital Marketing Agency',
    description: 'Drive revenue growth with data-driven digital marketing. Get 300%+ traffic growth in 6 months.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebWagon - Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebWagon - Digital Marketing Agency',
    description: 'Drive revenue growth with data-driven digital marketing',
    images: ['/og-image.jpg'],
    creator: '@webwagon',
    site: '@webwagon',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://webwagon.com',
  },
  category: 'Digital Marketing',
  classification: 'Business',
  other: {
    'theme-color': '#4C74B9',
    'msapplication-TileColor': '#4C74B9',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'WebWagon',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#4C74B9" />
        <meta name="msapplication-TileColor" content="#4C74B9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WebWagon" />
        <meta name="application-name" content="WebWagon" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebWagon",
              "url": "https://webwagon.com",
              "logo": "https://webwagon.com/logo.png",
              "description": "Digital Marketing Agency specializing in AI-powered SEO, local search optimization, and conversion-focused web development.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Digital Drive",
                "addressLocality": "Marketing District",
                "addressRegion": "NY",
                "postalCode": "10001",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/webwagon",
                "https://linkedin.com/company/webwagon",
                "https://facebook.com/webwagon"
              ],
              "foundingDate": "2009",
              "numberOfEmployees": "50+",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.7128",
                  "longitude": "-74.0060"
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-white">
        {/* <GoogleAnalytics /> */}
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "WebWagon",
              "url": "https://webwagon.com",
              "description": "Digital Marketing Agency - AI SEO, Local SEO, Web Development",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://webwagon.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
