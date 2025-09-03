import { Metadata } from 'next'
import { WebsiteSpeedTest } from '@/components/tools/website-speed-test'
import { SpeedTestBenefits } from '@/components/tools/speed-test-benefits'
import { SpeedTestExamples } from '@/components/tools/speed-test-examples'

export const metadata: Metadata = {
  title: 'Free Website Speed Checker - Test Your Site Performance | Web Vello',
  description: 'Check your website speed for free with our comprehensive speed checker tool. Analyze Core Web Vitals, page load time, and get optimization recommendations to improve your site performance.',
  keywords: 'free website speed checker, website speed test, page speed analyzer, Core Web Vitals, website performance checker, speed optimization tool',
  openGraph: {
    title: 'Free Website Speed Checker - Test Your Site Performance | Web Vello',
    description: 'Check your website speed for free with our comprehensive speed checker tool. Analyze Core Web Vitals and get optimization recommendations.',
    type: 'website',
  },
  alternates: {
    canonical: '/website-speed-test',
  },
}

export default function WebsiteSpeedTestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              ⚡ FREE WEBSITE SPEED CHECKER
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Free Website Speed Checker - 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                Test Your Site Performance
              </span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              Check your website speed for free in seconds. Our comprehensive speed checker analyzes 
              Core Web Vitals, page load time, and provides actionable recommendations to improve 
              your site performance and user experience.
            </p>
            
            {/* Speed Test Tool Component */}
            <WebsiteSpeedTest />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <SpeedTestBenefits />

      {/* Examples Section */}
      <SpeedTestExamples />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Optimizing Your Website Performance?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our performance experts can help you implement speed optimizations and create a 
            comprehensive strategy to improve your Core Web Vitals and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              Get Free Speed Optimization Consultation
            </a>
            <a 
              href="/services/web-development" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              View Web Development Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
