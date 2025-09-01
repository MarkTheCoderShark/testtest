'use client'

import { useCallback, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import {
  CONVERSION_GOALS,
  EVENT_CATEGORIES,
  EVENT_ACTIONS,
  CUSTOM_DIMENSIONS,
  CONVERSION_VALUES,
  LEAD_SCORING,
  FUNNEL_STAGES
} from '@/lib/analytics'

interface ConversionEvent {
  goal: string
  category: string
  action: string
  label?: string
  value?: number
  customDimensions?: Record<string, any>
  customMetrics?: Record<string, any>
}

interface UserBehavior {
  scrollDepth: number
  timeOnPage: number
  pageViews: number
  interactions: number
}

export function useConversionTracking() {
  const pathname = usePathname()
  const startTime = useRef<number>(Date.now())
  const scrollDepth = useRef<number>(0)
  const interactions = useRef<number>(0)
  const hasTrackedScroll50 = useRef<boolean>(false)
  const hasTrackedScroll75 = useRef<boolean>(false)
  const hasTrackedTime2Min = useRef<boolean>(false)

  // Track conversion event
  const trackConversion = useCallback((event: ConversionEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const eventData = {
        event_category: event.category,
        event_label: event.label,
        value: event.value || CONVERSION_VALUES[event.goal as keyof typeof CONVERSION_VALUES] || 0,
        custom_map: event.customDimensions || {},
        custom_metrics: event.customMetrics || {},
        // Add lead scoring
        lead_score: LEAD_SCORING[event.goal as keyof typeof LEAD_SCORING] || 0,
        // Add funnel stage
        funnel_stage: getFunnelStage(event.goal),
        // Add timestamp
        timestamp: new Date().toISOString(),
        // Add page context
        page_path: pathname,
        page_title: document.title
      }

      window.gtag('event', event.action, eventData)

      // Track as conversion goal
      window.gtag('event', 'conversion', {
        send_to: `${process.env.NEXT_PUBLIC_GA_ID}/${event.goal}`,
        value: eventData.value,
        currency: 'USD',
        transaction_id: generateTransactionId(),
        ...eventData
      })

      console.log('Conversion tracked:', eventData)
    }
  }, [pathname])

  // Track CTA button click
  const trackCTAClick = useCallback((buttonText: string, location: string, service?: string) => {
    trackConversion({
      goal: CONVERSION_GOALS.CTA_BUTTON_CLICK,
      category: EVENT_CATEGORIES.ENGAGEMENT,
      action: EVENT_ACTIONS.CLICK,
      label: `${buttonText} - ${location}`,
      customDimensions: {
        [CUSTOM_DIMENSIONS.SERVICE_INTEREST]: service || 'general',
        [CUSTOM_DIMENSIONS.LEAD_SOURCE]: 'cta_button',
        button_text: buttonText,
        button_location: location
      }
    })
  }, [trackConversion])

  // Track form submission
  const trackFormSubmission = useCallback((formType: string, formData: any) => {
    const startTime = formData.startTime ? Date.now() - formData.startTime : 0
    
    trackConversion({
      goal: CONVERSION_GOALS.CONTACT_FORM_SUBMISSION,
      category: EVENT_CATEGORIES.LEAD_GENERATION,
      action: EVENT_ACTIONS.SUBMIT,
      label: formType,
      customDimensions: {
        [CUSTOM_DIMENSIONS.SERVICE_INTEREST]: formData.service || 'general',
        [CUSTOM_DIMENSIONS.BUDGET_RANGE]: formData.budget || 'not_specified',
        [CUSTOM_DIMENSIONS.URGENCY_LEVEL]: formData.urgency || 'not_specified',
        [CUSTOM_DIMENSIONS.LEAD_SOURCE]: 'contact_form',
        form_type: formType,
        form_completion_time: startTime
      },
      customMetrics: {
        form_completion_time: startTime
      }
    })
  }, [trackConversion])

  // Track free strategy session request
  const trackStrategySession = useCallback((source: string, service?: string) => {
    trackConversion({
      goal: CONVERSION_GOALS.FREE_STRATEGY_SESSION,
      category: EVENT_CATEGORIES.LEAD_GENERATION,
      action: EVENT_ACTIONS.SUBMIT,
      label: `Free Strategy Session - ${source}`,
      customDimensions: {
        [CUSTOM_DIMENSIONS.SERVICE_INTEREST]: service || 'general',
        [CUSTOM_DIMENSIONS.LEAD_SOURCE]: source,
        offer_type: 'free_strategy_session',
        offer_value: 500
      }
    })
  }, [trackConversion])

  // Track free proposal request
  const trackProposalRequest = useCallback((website: string, source: string) => {
    trackConversion({
      goal: CONVERSION_GOALS.FREE_PROPOSAL_REQUEST,
      category: EVENT_CATEGORIES.LEAD_GENERATION,
      action: EVENT_ACTIONS.SUBMIT,
      label: `Free Proposal - ${source}`,
      customDimensions: {
        [CUSTOM_DIMENSIONS.LEAD_SOURCE]: source,
        offer_type: 'free_proposal',
        website_url: website,
        offer_value: 300
      }
    })
  }, [trackConversion])

  // Track phone call
  const trackPhoneCall = useCallback((phoneNumber: string, location: string) => {
    trackConversion({
      goal: CONVERSION_GOALS.PHONE_CALL,
      category: EVENT_CATEGORIES.BUSINESS_ACTION,
      action: EVENT_ACTIONS.CALL,
      label: `Phone Call - ${location}`,
      customDimensions: {
        [CUSTOM_DIMENSIONS.LEAD_SOURCE]: 'phone_call',
        phone_number: phoneNumber,
        call_location: location,
        call_value: 400
      }
    })
  }, [trackConversion])

  // Track email click
  const trackEmailClick = useCallback((email: string, location: string) => {
    trackConversion({
      goal: CONVERSION_GOALS.EMAIL_CLICK,
      category: EVENT_CATEGORIES.BUSINESS_ACTION,
      action: EVENT_ACTIONS.EMAIL,
      label: `Email Click - ${location}`,
      customDimensions: {
        [CUSTOM_DIMENSIONS.LEAD_SOURCE]: 'email_click',
        email_address: email,
        email_location: location,
        email_value: 200
      }
    })
  }, [trackConversion])

  // Track page view
  const trackPageView = useCallback((pageType: string, service?: string) => {
    trackConversion({
      goal: CONVERSION_GOALS.SERVICE_PAGE_VIEW,
      category: EVENT_CATEGORIES.USER_BEHAVIOR,
      action: EVENT_ACTIONS.VIEW,
      label: `${pageType} Page View`,
      customDimensions: {
        [CUSTOM_DIMENSIONS.SERVICE_INTEREST]: service || 'general',
        [CUSTOM_DIMENSIONS.LEAD_SOURCE]: 'organic_traffic',
        page_type: pageType,
        page_category: 'service_page'
      }
    })
  }, [trackConversion])

  // Track scroll depth
  const trackScrollDepth = useCallback((depth: number) => {
    if (depth >= 50 && !hasTrackedScroll50.current) {
      hasTrackedScroll50.current = true
      trackConversion({
        goal: CONVERSION_GOALS.SCROLL_DEPTH_50,
        category: EVENT_CATEGORIES.ENGAGEMENT,
        action: EVENT_ACTIONS.SCROLL,
        label: '50% Scroll Depth',
        customDimensions: {
          [CUSTOM_DIMENSIONS.LEAD_SOURCE]: 'scroll_engagement',
          scroll_depth: 50,
          page_path: pathname
        }
      })
    }

    if (depth >= 75 && !hasTrackedScroll75.current) {
      hasTrackedScroll75.current = true
      trackConversion({
        goal: CONVERSION_GOALS.SCROLL_DEPTH_75,
        category: EVENT_CATEGORIES.ENGAGEMENT,
        action: EVENT_ACTIONS.SCROLL,
        label: '75% Scroll Depth',
        customDimensions: {
          [CUSTOM_DIMENSIONS.LEAD_SOURCE]: 'scroll_engagement',
          scroll_depth: 75,
          page_path: pathname
        }
      })
    }
  }, [trackConversion, pathname])

  // Track time on page
  const trackTimeOnPage = useCallback((timeInSeconds: number) => {
    if (timeInSeconds >= 120 && !hasTrackedTime2Min.current) {
      hasTrackedTime2Min.current = true
      trackConversion({
        goal: CONVERSION_GOALS.TIME_ON_PAGE_2MIN,
        category: EVENT_CATEGORIES.ENGAGEMENT,
        action: EVENT_ACTIONS.TIME,
        label: '2+ Minutes on Page',
        customDimensions: {
          [CUSTOM_DIMENSIONS.LEAD_SOURCE]: 'time_engagement',
          time_on_page: timeInSeconds,
          page_path: pathname
        },
        customMetrics: {
          time_on_page: timeInSeconds
        }
      })
    }
  }, [trackConversion, pathname])

  // Track user behavior
  const trackUserBehavior = useCallback((behavior: Partial<UserBehavior>) => {
    if (behavior.scrollDepth !== undefined) {
      scrollDepth.current = behavior.scrollDepth
      trackScrollDepth(behavior.scrollDepth)
    }

    if (behavior.timeOnPage !== undefined) {
      trackTimeOnPage(behavior.timeOnPage)
    }

    if (behavior.interactions !== undefined) {
      interactions.current = behavior.interactions
    }
  }, [trackScrollDepth, trackTimeOnPage])

  // Get funnel stage based on goal
  const getFunnelStage = (goal: string): string => {
    const funnelMapping: Record<string, string> = {
      [CONVERSION_GOALS.SERVICE_PAGE_VIEW]: FUNNEL_STAGES.AWARENESS,
      [CONVERSION_GOALS.CTA_BUTTON_CLICK]: FUNNEL_STAGES.INTEREST,
      [CONVERSION_GOALS.PRICING_PAGE_VIEW]: FUNNEL_STAGES.CONSIDERATION,
      [CONVERSION_GOALS.CONTACT_FORM_SUBMISSION]: FUNNEL_STAGES.INTENT,
      [CONVERSION_GOALS.FREE_STRATEGY_SESSION]: FUNNEL_STAGES.CONVERSION,
      [CONVERSION_GOALS.FREE_PROPOSAL_REQUEST]: FUNNEL_STAGES.CONVERSION,
      [CONVERSION_GOALS.PHONE_CALL]: FUNNEL_STAGES.CONVERSION,
      [CONVERSION_GOALS.EMAIL_CLICK]: FUNNEL_STAGES.CONVERSION
    }
    return funnelMapping[goal] || FUNNEL_STAGES.AWARENESS
  }

  // Generate unique transaction ID
  const generateTransactionId = (): string => {
    return `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // Track page performance
  const trackPagePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const loadTime = Date.now() - startTime.current
      
      window.gtag('event', 'timing_complete', {
        name: 'page_load',
        value: loadTime,
        page_path: pathname
      })

      // Track Core Web Vitals if available
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'LCP') {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'LCP',
                value: Math.round(entry.startTime),
                page_path: pathname
              })
            }
            if (entry.name === 'FID') {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
                page_path: pathname
              })
            }
            if (entry.name === 'CLS') {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(entry.value * 1000),
                page_path: pathname
              })
            }
          }
        })

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      }
    }
  }, [pathname])

  // Reset tracking on page change
  useEffect(() => {
    startTime.current = Date.now()
    scrollDepth.current = 0
    interactions.current = 0
    hasTrackedScroll50.current = false
    hasTrackedScroll75.current = false
    hasTrackedTime2Min.current = false

    // Track page performance after load
    const timer = setTimeout(trackPagePerformance, 1000)
    return () => clearTimeout(timer)
  }, [pathname, trackPagePerformance])

  return {
    trackConversion,
    trackCTAClick,
    trackFormSubmission,
    trackStrategySession,
    trackProposalRequest,
    trackPhoneCall,
    trackEmailClick,
    trackPageView,
    trackUserBehavior,
    trackPagePerformance
  }
}
