// Analytics Configuration for Web Vello
// Copy this file to your project and update with your actual values

export const ANALYTICS_CONFIG = {
  // Google Analytics 4 Configuration
  // Replace with your actual Google Analytics 4 Measurement ID
  GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  
  // Example: GA_TRACKING_ID: 'G-ABC123DEF4',
  
  // Feature Flags
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  ENABLE_CONVERSION_TRACKING: process.env.NEXT_PUBLIC_ENABLE_CONVERSION_TRACKING === 'true',
  ENABLE_SCROLL_TRACKING: process.env.NEXT_PUBLIC_ENABLE_SCROLL_TRACKING === 'true',
  ENABLE_PERFORMANCE_TRACKING: process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE_TRACKING === 'true',
  
  // Development Settings
  DEBUG_ANALYTICS: process.env.NEXT_PUBLIC_DEBUG_ANALYTICS === 'true',
  LOG_CONVERSIONS: process.env.NEXT_PUBLIC_LOG_CONVERSIONS === 'true',
  
  // Default Values
  DEFAULT_GA_ID: 'G-XXXXXXXXXX',
  
  // Environment Check
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  
  // Tracking Domains
  TRACKING_DOMAINS: [
    'webvello.com',
    'www.webvello.com',
    'localhost:3000', // For development
  ],
  
  // Excluded Paths (don't track these)
  EXCLUDED_PATHS: [
    '/admin',
    '/api',
    '/_next',
    '/static',
  ],
  
  // Custom Dimensions Slots
  CUSTOM_DIMENSIONS: {
    USER_TYPE: 'dimension1',
    SERVICE_INTEREST: 'dimension2',
    BUDGET_RANGE: 'dimension3',
    URGENCY_LEVEL: 'dimension4',
    LEAD_SOURCE: 'dimension5',
    CAMPAIGN_NAME: 'dimension6',
  },
  
  // Custom Metrics Slots
  CUSTOM_METRICS: {
    FORM_COMPLETION_TIME: 'metric1',
    SCROLL_DEPTH: 'metric2',
    TIME_ON_PAGE: 'metric3',
    PAGE_VIEWS_PER_SESSION: 'metric4',
  }
}

// Environment Variables Template
export const ENV_TEMPLATE = `
# Copy these to your .env.local file:

# Google Analytics Configuration
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CONVERSION_TRACKING=true
NEXT_PUBLIC_ENABLE_SCROLL_TRACKING=true
NEXT_PUBLIC_ENABLE_PERFORMANCE_TRACKING=true

# Development Settings
NEXT_PUBLIC_DEBUG_ANALYTICS=false
NEXT_PUBLIC_LOG_CONVERSIONS=false
`

export default ANALYTICS_CONFIG
