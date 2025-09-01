import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, Target, Users, TrendingUp, Mail, Globe, Zap } from 'lucide-react'
import Link from 'next/link'

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">
                Digital Marketing
              </span>{" "}
              Strategies
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Drive growth and engagement with our comprehensive digital marketing solutions 
              that combine data-driven insights with creative excellence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/case-studies" className="text-sm font-semibold leading-6 text-secondary-900">
                View Case Studies <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Digital Marketing That Drives Results
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our comprehensive digital marketing services cover every aspect of your online presence 
              to maximize reach, engagement, and conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-teal-100 mb-6">
                <BarChart3 className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Data-Driven Strategy</h3>
              <p className="text-secondary-600">
                Build marketing strategies based on real data and performance analytics for optimal results.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Audience Targeting</h3>
              <p className="text-secondary-600">
                Reach your ideal customers with precision targeting and personalized messaging.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-indigo-100 mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Social Media Marketing</h3>
              <p className="text-secondary-600">
                Engage your audience across all social platforms with compelling content and campaigns.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 mb-6">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Email Marketing</h3>
              <p className="text-secondary-600">
                Nurture leads and drive sales with strategic email campaigns and automation.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Content Marketing</h3>
              <p className="text-secondary-600">
                Create valuable content that attracts, engages, and converts your target audience.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 mb-6">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Performance Marketing</h3>
              <p className="text-secondary-600">
                Drive measurable results with performance-based marketing strategies and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Ready to Transform Your Digital Marketing?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Let our digital marketing experts create strategies that drive growth and engagement.
          </p>
          <Button size="lg" variant="secondary" className="text-teal-600">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

