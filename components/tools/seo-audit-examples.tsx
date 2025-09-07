import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Search,
  TrendingUp,
  Target
} from 'lucide-react'

const examples = [
  {
    website: "E-commerce Store",
    url: "example-store.com",
    score: 88,
    status: "excellent",
    improvements: [
      "Optimized meta descriptions",
      "Improved page load speed",
      "Added structured data markup"
    ],
    results: "45% increase in organic traffic, 30% higher conversion rate"
  },
  {
    website: "Local Business",
    url: "local-business.com",
    score: 72,
    status: "needs-improvement",
    improvements: [
      "Fixed duplicate content issues",
      "Added local SEO optimization",
      "Improved mobile responsiveness"
    ],
    results: "60% more local search visibility, 25% increase in phone calls"
  },
  {
    website: "Blog Platform",
    url: "blog-example.com",
    score: 95,
    status: "excellent",
    improvements: [
      "Enhanced content structure",
      "Optimized internal linking",
      "Improved Core Web Vitals"
    ],
    results: "80% increase in search rankings, 50% more time on site"
  }
]

const commonIssues = [
  {
    issue: "Missing Meta Descriptions",
    impact: "High",
    solution: "Write compelling meta descriptions for all pages",
    improvement: "15-25% CTR increase"
  },
  {
    issue: "Poor Page Titles",
    impact: "High",
    solution: "Create unique, keyword-rich titles under 60 characters",
    improvement: "20-30% ranking boost"
  },
  {
    issue: "Duplicate Content",
    impact: "High",
    solution: "Use canonical tags and create unique content",
    improvement: "Avoid search penalties"
  },
  {
    issue: "Missing Alt Text",
    impact: "Medium",
    solution: "Add descriptive alt text to all images",
    improvement: "Better accessibility and SEO"
  },
  {
    issue: "Poor Internal Linking",
    impact: "Medium",
    solution: "Create strategic internal links between related pages",
    improvement: "15-20% page authority boost"
  },
  {
    issue: "No Schema Markup",
    impact: "Medium",
    solution: "Implement structured data for rich snippets",
    improvement: "30% higher click-through rates"
  },
  {
    issue: "Slow Page Speed",
    impact: "High",
    solution: "Optimize images, minify code, enable caching",
    improvement: "Direct ranking factor improvement"
  },
  {
    issue: "Mobile Issues",
    impact: "High",
    solution: "Ensure mobile-first responsive design",
    improvement: "Essential for modern SEO"
  },
  {
    issue: "Broken Links",
    impact: "Medium",
    solution: "Regularly audit and fix broken internal/external links",
    improvement: "Better user experience and crawlability"
  }
]

export function SEOAuditExamples() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'good':
        return <CheckCircle className="w-5 h-5 text-blue-500" />
      case 'needs-improvement':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case 'poor':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 text-green-800'
      case 'good':
        return 'bg-blue-100 text-blue-800'
      case 'needs-improvement':
        return 'bg-yellow-100 text-yellow-800'
      case 'poor':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-green-100 text-green-800'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-red-100 text-red-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Real SEO Optimization Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-secondary-600">
            See how businesses have improved their search rankings and achieved 
            measurable results with SEO optimization.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-lg font-semibold text-secondary-900">
                      {example.website}
                    </CardTitle>
                    <CardDescription className="text-sm text-secondary-500">
                      {example.url}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      {example.score}
                    </div>
                    <Badge className={getStatusColor(example.status)}>
                      {example.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2 flex items-center gap-2">
                      <Search className="w-4 h-4 text-primary-500" />
                      SEO Optimizations Applied
                    </h4>
                    <ul className="space-y-1">
                      {example.improvements.map((improvement, idx) => (
                        <li key={idx} className="text-sm text-secondary-600 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Results Achieved
                    </h4>
                    <p className="text-sm text-green-700">
                      {example.results}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Common Issues and Solutions */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Common SEO Issues & Solutions
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Here are the most common SEO issues we find during audits and the solutions 
              that can help improve your search rankings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((item, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-secondary-900">
                    {item.issue}
                  </h4>
                  <Badge className={getImpactColor(item.impact)}>
                    {item.impact} Impact
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-secondary-700 mb-1">Solution:</h5>
                    <p className="text-sm text-secondary-600">
                      {item.solution}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-primary-500" />
                    <span className="text-primary-600 font-medium">
                      Expected improvement: {item.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Tips */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Quick SEO Optimization Tips
            </h3>
            <p className="text-primary-100 max-w-3xl mx-auto">
              Start improving your SEO today with these actionable tips 
              that can make an immediate difference to your search rankings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Keyword Research</h4>
              <p className="text-sm text-primary-100">
                Find relevant keywords your audience is searching for
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Content Quality</h4>
              <p className="text-sm text-primary-100">
                Create valuable, original content that answers user questions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Technical SEO</h4>
              <p className="text-sm text-primary-100">
                Fix technical issues like site speed and mobile optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Link Building</h4>
              <p className="text-sm text-primary-100">
                Build high-quality backlinks from authoritative websites
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

