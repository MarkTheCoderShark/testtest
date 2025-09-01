'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Search, TrendingUp, BarChart3, Target, Zap, Globe, Users, FileText } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Comprehensive keyword analysis to identify high-value opportunities your competitors are missing."
  },
  {
    icon: Target,
    title: "On-Page Optimization",
    description: "Technical SEO optimization including meta tags, content structure, and internal linking."
  },
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    description: "Continuous tracking and analysis of your SEO performance with detailed reporting."
  },
  {
    icon: Zap,
    title: "Technical SEO",
    description: "Site speed optimization, mobile responsiveness, and technical improvements for better rankings."
  },
  {
    icon: Globe,
    title: "Content Strategy",
    description: "SEO-optimized content that ranks well and provides value to your target audience."
  },
  {
    icon: Users,
    title: "Link Building",
    description: "Strategic link building to increase domain authority and improve search rankings."
  }
]

const process = [
  {
    step: "01",
    title: "SEO Audit & Analysis",
    description: "Comprehensive analysis of your current SEO performance and identification of opportunities.",
    duration: "1-2 weeks"
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Create a customized SEO strategy based on your business goals and competitive landscape.",
    duration: "1 week"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute on-page optimizations, content improvements, and technical enhancements.",
    duration: "2-4 weeks"
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring, reporting, and optimization to ensure sustained growth.",
    duration: "Ongoing"
  }
]

const results = [
  { metric: "Organic Traffic Growth", value: "200%+", description: "Average increase in 6 months" },
  { metric: "Keyword Rankings", value: "150%+", description: "More keywords on page 1" },
  { metric: "Click-Through Rate", value: "40%+", description: "Improved CTR from search results" },
  { metric: "Conversion Rate", value: "25%+", description: "Higher conversion from organic traffic" }
]

const seoFactors = [
  "Page Speed & Performance",
  "Mobile-First Indexing",
  "Core Web Vitals",
  "Content Quality & Relevance",
  "User Experience Signals",
  "Technical SEO Health"
]

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Traditional{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                SEO
              </span>{" "}
              That Drives Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Proven search engine optimization strategies that have helped hundreds of businesses 
              achieve top search rankings and sustainable organic traffic growth. We focus on 
              building lasting SEO success through white-hat techniques and continuous optimization.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Our Results
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive SEO Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              From technical optimization to content strategy, we provide end-to-end SEO 
              services that deliver sustainable, long-term results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our SEO Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach to SEO that ensures consistent progress and measurable 
              results month after month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Proven SEO Results
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our traditional SEO strategies consistently deliver measurable improvements 
              in search rankings and organic traffic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Factors Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Modern SEO Factors We Optimize
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We stay current with Google's latest algorithm updates and optimize for 
              the factors that matter most in today's search landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoFactors.map((factor) => (
              <div key={factor} className="bg-white p-6 rounded-2xl shadow-soft ring-1 ring-secondary-900/5">
                <div className="flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 mr-4">
                    <Search className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="font-semibold text-secondary-900">{factor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Traditional SEO Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
                Why Traditional SEO Still Works
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                While AI and new technologies are changing the landscape, traditional SEO 
                fundamentals remain the foundation of sustainable search success. We combine 
                proven techniques with modern insights to deliver results that last.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Sustainable Results</div>
                    <div className="text-sm text-secondary-600">Build lasting authority that withstands algorithm changes</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Proven Methodology</div>
                    <div className="text-sm text-secondary-600">Time-tested strategies that consistently deliver results</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Long-term Growth</div>
                    <div className="text-sm text-secondary-600">Organic traffic that grows steadily over time</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-primary-600 mb-4">15+</div>
              <div className="text-xl text-primary-700 mb-2">Years of SEO Experience</div>
              <div className="text-lg text-primary-600">Proven track record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-4">
              Related Services
            </h2>
            <p className="text-lg leading-8 text-secondary-600">
              Traditional SEO works best when combined with our other digital marketing services. 
              Create a comprehensive search strategy that dominates your market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI-Powered SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Enhance traditional SEO with cutting-edge AI optimization strategies.
              </p>
              <Link 
                href="/services/ai-seo" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Local SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-blue-600 transition-colors">
                Local/GEO SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Dominate local search while building national authority.
              </p>
              <Link 
                href="/services/local-seo" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Content Strategy */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                Content Strategy
              </h3>
              <p className="text-secondary-600 mb-4">
                Create content that ranks and converts for maximum SEO impact.
              </p>
              <Link 
                href="/services/digital-marketing" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Technical SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Settings className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-orange-600 transition-colors">
                Technical SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Optimize your website's technical foundation for search engines.
              </p>
              <Link 
                href="/services/web-development" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Link Building */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors mb-4">
                <Link className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-red-600 transition-colors">
                Link Building
              </h3>
              <p className="text-secondary-600 mb-4">
                Build authoritative backlinks that strengthen your SEO foundation.
              </p>
              <Link 
                href="/services/digital-marketing" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* CRO Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors mb-4">
                <TrendingUp className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-teal-600 transition-colors">
                CRO Services
              </h3>
              <p className="text-secondary-600 mb-4">
                Convert SEO traffic into customers with conversion optimization.
              </p>
              <Link 
                href="/services/cro-lead-generation" 
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's implement proven SEO strategies that drive sustainable organic growth 
            and help you capture more search traffic than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free SEO Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
