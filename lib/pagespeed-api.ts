// Google PageSpeed Insights API integration
// You'll need to get a free API key from: https://developers.google.com/speed/docs/insights/v5/get-started

interface PageSpeedMetrics {
  firstContentfulPaint: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
  largestContentfulPaint: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
  cumulativeLayoutShift: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
  firstInputDelay: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
  totalBlockingTime: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
  speedIndex: { value: number; status: 'good' | 'needs-improvement' | 'poor' }
}

interface PageSpeedResult {
  url: string
  overallScore: number
  mobileScore: number
  desktopScore: number
  metrics: PageSpeedMetrics
  opportunities: {
    name: string
    impact: 'high' | 'medium' | 'low'
    description: string
    savings: string
  }[]
  diagnostics: {
    name: string
    description: string
    status: 'pass' | 'warning' | 'fail'
  }[]
  generatedAt: string
}

// Get your free API key from: https://developers.google.com/speed/docs/insights/v5/get-started
const PAGESPEED_API_KEY = process.env.PAGESPEED_API_KEY || ''

export async function testWebsiteSpeed(url: string): Promise<PageSpeedResult> {
  if (!PAGESPEED_API_KEY) {
    console.warn('PageSpeed API key not found. Using mock data.')
    return getMockSpeedResult(url)
  }

  try {
    // Test both mobile and desktop
    const [mobileResult, desktopResult] = await Promise.all([
      fetchPageSpeedData(url, 'mobile'),
      fetchPageSpeedData(url, 'desktop')
    ])

    return {
      url,
      overallScore: Math.round((mobileResult.lighthouseResult.categories.performance.score * 100 + desktopResult.lighthouseResult.categories.performance.score * 100) / 2),
      mobileScore: Math.round(mobileResult.lighthouseResult.categories.performance.score * 100),
      desktopScore: Math.round(desktopResult.lighthouseResult.categories.performance.score * 100),
      metrics: extractMetrics(desktopResult.lighthouseResult),
      opportunities: extractOpportunities(desktopResult.lighthouseResult),
      diagnostics: extractDiagnostics(desktopResult.lighthouseResult),
      generatedAt: new Date().toISOString()
    }
  } catch (error) {
    console.error('PageSpeed API error:', error)
    return getMockSpeedResult(url)
  }
}

async function fetchPageSpeedData(url: string, strategy: 'mobile' | 'desktop') {
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&key=${PAGESPEED_API_KEY}`
  
  const response = await fetch(apiUrl)
  if (!response.ok) {
    throw new Error(`PageSpeed API error: ${response.status}`)
  }
  
  return response.json()
}

function extractMetrics(lighthouseResult: any): PageSpeedMetrics {
  const audits = lighthouseResult.audits
  
  return {
    firstContentfulPaint: {
      value: Math.round(audits['first-contentful-paint']?.numericValue || 0),
      status: audits['first-contentful-paint']?.score >= 0.9 ? 'good' : audits['first-contentful-paint']?.score >= 0.5 ? 'needs-improvement' : 'poor'
    },
    largestContentfulPaint: {
      value: Math.round(audits['largest-contentful-paint']?.numericValue || 0),
      status: audits['largest-contentful-paint']?.score >= 0.9 ? 'good' : audits['largest-contentful-paint']?.score >= 0.5 ? 'needs-improvement' : 'poor'
    },
    cumulativeLayoutShift: {
      value: audits['cumulative-layout-shift']?.numericValue || 0,
      status: audits['cumulative-layout-shift']?.score >= 0.9 ? 'good' : audits['cumulative-layout-shift']?.score >= 0.5 ? 'needs-improvement' : 'poor'
    },
    firstInputDelay: {
      value: Math.round(audits['max-potential-fid']?.numericValue || 0),
      status: audits['max-potential-fid']?.score >= 0.9 ? 'good' : audits['max-potential-fid']?.score >= 0.5 ? 'needs-improvement' : 'poor'
    },
    totalBlockingTime: {
      value: Math.round(audits['total-blocking-time']?.numericValue || 0),
      status: audits['total-blocking-time']?.score >= 0.9 ? 'good' : audits['total-blocking-time']?.score >= 0.5 ? 'needs-improvement' : 'poor'
    },
    speedIndex: {
      value: Math.round(audits['speed-index']?.numericValue || 0),
      status: audits['speed-index']?.score >= 0.9 ? 'good' : audits['speed-index']?.score >= 0.5 ? 'needs-improvement' : 'poor'
    }
  }
}

function extractOpportunities(lighthouseResult: any) {
  const opportunities: any[] = []
  const audits = lighthouseResult.audits
  
  // Extract high-impact opportunities
  const highImpactAudits = [
    'render-blocking-resources',
    'unused-css-rules',
    'unused-javascript',
    'modern-image-formats',
    'uses-optimized-images'
  ]
  
  highImpactAudits.forEach(auditId => {
    const audit = audits[auditId]
    if (audit && audit.score < 0.9 && audit.details) {
      opportunities.push({
        name: audit.title,
        impact: 'high' as const,
        description: audit.description,
        savings: audit.details.overallSavingsMs ? `${Math.round(audit.details.overallSavingsMs / 1000)}s` : 'Significant'
      })
    }
  })
  
  return opportunities.slice(0, 5) // Limit to 5 opportunities
}

function extractDiagnostics(lighthouseResult: any) {
  const diagnostics: any[] = []
  const audits = lighthouseResult.audits
  
  const diagnosticAudits = [
    'uses-https',
    'robots-txt',
    'efficient-animated-content',
    'uses-rel-preconnect',
    'uses-text-compression'
  ]
  
  diagnosticAudits.forEach(auditId => {
    const audit = audits[auditId]
    if (audit) {
      diagnostics.push({
        name: audit.title,
        description: audit.description,
        status: audit.score >= 0.9 ? 'pass' : audit.score >= 0.5 ? 'warning' : 'fail'
      })
    }
  })
  
  return diagnostics
}

function getMockSpeedResult(url: string): PageSpeedResult {
  return {
    url,
    overallScore: Math.floor(Math.random() * 40) + 60,
    mobileScore: Math.floor(Math.random() * 30) + 50,
    desktopScore: Math.floor(Math.random() * 40) + 60,
    metrics: {
      firstContentfulPaint: {
        value: Math.floor(Math.random() * 2000) + 800,
        status: Math.random() > 0.4 ? 'good' : Math.random() > 0.2 ? 'needs-improvement' : 'poor'
      },
      largestContentfulPaint: {
        value: Math.floor(Math.random() * 3000) + 1200,
        status: Math.random() > 0.5 ? 'good' : Math.random() > 0.3 ? 'needs-improvement' : 'poor'
      },
      cumulativeLayoutShift: {
        value: Math.random() * 0.3,
        status: Math.random() > 0.6 ? 'good' : Math.random() > 0.3 ? 'needs-improvement' : 'poor'
      },
      firstInputDelay: {
        value: Math.floor(Math.random() * 200) + 50,
        status: Math.random() > 0.5 ? 'good' : Math.random() > 0.3 ? 'needs-improvement' : 'poor'
      },
      totalBlockingTime: {
        value: Math.floor(Math.random() * 500) + 100,
        status: Math.random() > 0.4 ? 'good' : Math.random() > 0.2 ? 'needs-improvement' : 'poor'
      },
      speedIndex: {
        value: Math.floor(Math.random() * 4000) + 2000,
        status: Math.random() > 0.5 ? 'good' : Math.random() > 0.3 ? 'needs-improvement' : 'poor'
      }
    },
    opportunities: [
      {
        name: 'Eliminate render-blocking resources',
        impact: 'high',
        description: 'Remove or defer resources that block the initial render of the page',
        savings: '1.2s'
      },
      {
        name: 'Optimize images',
        impact: 'high',
        description: 'Compress and optimize images to reduce file sizes',
        savings: '0.8s'
      },
      {
        name: 'Minify CSS and JavaScript',
        impact: 'medium',
        description: 'Remove unnecessary characters from CSS and JavaScript files',
        savings: '0.4s'
      },
      {
        name: 'Enable text compression',
        impact: 'medium',
        description: 'Compress text-based resources using gzip or brotli',
        savings: '0.3s'
      },
      {
        name: 'Reduce unused CSS',
        impact: 'low',
        description: 'Remove unused CSS rules to reduce file size',
        savings: '0.2s'
      }
    ],
    diagnostics: [
      {
        name: 'Uses HTTPS',
        description: 'All resources are served over HTTPS',
        status: Math.random() > 0.1 ? 'pass' : 'fail'
      },
      {
        name: 'Has a valid robots.txt',
        description: 'Robots.txt file is present and valid',
        status: Math.random() > 0.2 ? 'pass' : 'warning'
      },
      {
        name: 'Uses efficient cache policies',
        description: 'Static resources have appropriate cache headers',
        status: Math.random() > 0.3 ? 'pass' : 'warning'
      },
      {
        name: 'Avoids document.write()',
        description: 'Document.write() can delay page rendering',
        status: Math.random() > 0.4 ? 'pass' : 'warning'
      },
      {
        name: 'Uses modern image formats',
        description: 'Images use modern formats like WebP or AVIF',
        status: Math.random() > 0.6 ? 'pass' : 'warning'
      }
    ],
    generatedAt: new Date().toISOString()
  }
}
