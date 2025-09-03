import { Button } from '@/components/ui/button'
import { ArrowRight, Bot, Zap, Users, BarChart3, Shield, Clock, Target, Code, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function AIAgentDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Custom{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                AI Agents
              </span>{" "}
              for Business Automation
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Transform your business operations with intelligent AI agents that automate complex tasks, 
              enhance customer interactions, and drive operational efficiency.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
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
              Intelligent Automation That Works
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our AI agents are designed to handle complex business processes with human-like intelligence 
              and 24/7 availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 mb-6">
                <Bot className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Custom AI Agents</h3>
              <p className="text-secondary-600">
                Tailored AI agents designed specifically for your business processes and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-indigo-100 mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Process Automation</h3>
              <p className="text-secondary-600">
                Automate repetitive tasks and complex workflows to increase efficiency and reduce errors.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Customer Interaction</h3>
              <p className="text-secondary-600">
                AI agents that provide 24/7 customer support and personalized interactions.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-6">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Data Analysis</h3>
              <p className="text-secondary-600">
                Intelligent agents that analyze data and provide actionable insights for decision-making.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 mb-6">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Security & Compliance</h3>
              <p className="text-secondary-600">
                Built-in security measures and compliance features for enterprise-grade protection.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">24/7 Operation</h3>
              <p className="text-secondary-600">
                AI agents that work around the clock without breaks or downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
            Let our AI experts create custom agents that transform your operations and drive growth.
          </p>
          <Button size="lg" variant="secondary" className="text-purple-600">
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

