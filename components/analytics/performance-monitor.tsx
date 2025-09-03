'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to console for debugging (replace with analytics in production)
        console.log('Performance metric:', {
          name: entry.name,
          startTime: entry.startTime,
          duration: entry.duration,
        })

        // Send to analytics service (Google Analytics, etc.)
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: entry.name,
            value: Math.round(entry.duration || 0),
            non_interaction: true,
          })
        }
      }
    })

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstByte: navigation.responseStart - navigation.requestStart,
          domInteractive: navigation.domInteractive - navigation.fetchStart,
        }

        console.log('Page load metrics:', metrics)

        // Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_load_metrics', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(metrics.domContentLoaded),
            non_interaction: true,
          })
        }
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
