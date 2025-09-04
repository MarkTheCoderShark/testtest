import { Button } from '../../../components/ui/button'
import { ArrowRight, ShoppingCart, Zap, Shield, Users, BarChart3, Globe, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function ShopifyDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              High-Performance{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Shopify Development
              </span>{" "}
              Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Build scalable, high-converting Shopify stores with custom functionality, 
              optimized performance, and seamless user experiences that drive sales.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
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

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Shopify Development Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              From custom themes to advanced apps, we deliver Shopify solutions that maximize conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Custom Themes</h3>
              <p className="text-secondary-600">
                Bespoke Shopify themes designed for your brand and optimized for conversions.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-emerald-100 mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">App Development</h3>
              <p className="text-secondary-600">
                Custom Shopify apps that add unique functionality and enhance user experience.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Performance Optimization</h3>
              <p className="text-secondary-600">
                Optimize your Shopify store for speed, SEO, and search engine rankings.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Ecommerce Features</h3>
              <p className="text-secondary-600">
                Advanced product management, inventory systems, and customer experience features.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 mb-6">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Analytics & Conversion</h3>
              <p className="text-secondary-600">
                Built-in analytics, A/B testing, and conversion optimization tools.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-6">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Multi-channel Integration</h3>
              <p className="text-secondary-600">
                Integrate with social media, marketplaces, and other sales channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Ready to Build Your Shopify Store?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Let our Shopify experts create a high-converting online store for your business.
          </p>
          <Button size="lg" variant="secondary" className="text-green-600">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

