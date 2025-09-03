'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { GA_TRACKING_ID } from '@/lib/analytics'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      // Track page view
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname + searchParams.toString(),
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname, searchParams])

  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              send_page_view: false,
              custom_map: {
                'custom_map': {
                  'user_type': 'dimension1',
                  'service_interest': 'dimension2',
                  'budget_range': 'dimension3',
                  'urgency_level': 'dimension4',
                  'lead_source': 'dimension5',
                  'campaign_name': 'dimension6'
                }
              }
            });
          `,
        }}
      />
    </>
  )
}
