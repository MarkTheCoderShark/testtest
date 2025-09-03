"use client"

import { useState } from 'react'
import { EnhancedHero } from '@/components/sections/enhanced-hero'
import { EnhancedPricing } from '@/components/sections/enhanced-pricing'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import { EnhancedCard } from '@/components/ui/enhanced-card'
import { AnimatedProgress } from '@/components/ui/animated-progress'
import { InteractiveTestimonial } from '@/components/ui/interactive-testimonial'
import { ArrowRight, Star, Zap, Users, Award, CheckCircle, TrendingUp, Heart, Share2 } from 'lucide-react'

const demoTestimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'The enhanced design and animations have significantly improved our user engagement. Our conversion rates increased by 40% within the first month.',
    rating: 5,
    avatar: '/api/placeholder/48/48'
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    content: 'The interactive elements and smooth animations create a premium feel that matches our brand perfectly. Highly recommended!',
    rating: 5,
    avatar: '/api/placeholder/48/48'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'DesignStudio',
    content: 'The enhanced components are incredibly flexible and easy to customize. They\'ve saved us countless hours of development time.',
    rating: 5,
    avatar: '/api/placeholder/48/48'
  }
]

const demoPricingTiers = [
  {
    name: 'Starter',
    price: 99,
    period: 'monthly' as const,
    description: 'Perfect for small businesses getting started',
    features: ['Basic analytics', 'Email support', '5 projects', 'Mobile responsive'],
    excluded: ['Advanced features', 'Priority support'],
    popular: false,
    iconName: 'Zap',
    gradient: 'from-blue-500 to-cyan-600',
    cta: 'Get Started',
    href: '/contact'
  },
  {
    name: 'Professional',
    price: 199,
    period: 'monthly' as const,
    description: 'Ideal for growing businesses',
    features: ['Advanced analytics', 'Priority support', 'Unlimited projects', 'Custom integrations'],
    excluded: ['Enterprise features'],
    popular: true,
    iconName: 'Star',
    gradient: 'from-purple-500 to-pink-600',
    cta: 'Get Started',
    href: '/contact'
  },
  {
    name: 'Enterprise',
    price: 399,
    period: 'monthly' as const,
    description: 'For large organizations with complex needs',
    features: ['Enterprise analytics', '24/7 support', 'Custom solutions', 'Dedicated manager'],
    excluded: [],
    popular: false,
    iconName: 'Award',
    gradient: 'from-green-500 to-emerald-600',
    cta: 'Contact Sales',
    href: '/contact'
  }
]

export default function EnhancedDemoPage() {
  const [progressValue, setProgressValue] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleProgressChange = () => {
    setProgressValue(Math.floor(Math.random() * 100))
  }

  const handleButtonClick = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    setIsSuccess(true)
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Enhanced Hero Section */}
      <EnhancedHero
        title="Enhanced Design & UX"
        subtitle="Component Showcase"
        description="Experience the power of our enhanced UI components with smooth animations, interactive elements, and modern design patterns."
        primaryCTA={{
          text: "Explore Components",
          href: "#components",
          variant: "gradient"
        }}
        secondaryCTA={{
          text: "View Documentation",
          href: "/docs"
        }}
        features={[
          "Smooth animations",
          "Interactive elements", 
          "Modern design patterns",
          "Mobile responsive"
        ]}
        stats={[
          { value: "40%", label: "Engagement Boost", iconName: "TrendingUp" },
          { value: "2.5x", label: "Faster Loading", iconName: "Zap" },
          { value: "95%", label: "User Satisfaction", iconName: "Users" }
        ]}
        background="pattern"
      />

      {/* Enhanced Components Showcase */}
      <section id="components" className="section-padding">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enhanced UI Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our collection of enhanced components designed to create engaging, interactive user experiences
            </p>
          </div>

          {/* Enhanced Buttons */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Enhanced Buttons</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <EnhancedButton size="lg" gradient>
                Gradient Button
              </EnhancedButton>
              <EnhancedButton size="lg" glow>
                Glow Button
              </EnhancedButton>
              <EnhancedButton size="lg" pulse>
                Pulse Button
              </EnhancedButton>
              <EnhancedButton size="lg" loading={isLoading}>
                Loading State
              </EnhancedButton>
            </div>
            <div className="text-center mt-4">
              <EnhancedButton 
                onClick={handleButtonClick}
                loading={isLoading}
                success={isSuccess}
                size="lg"
                className="mx-auto"
              >
                {isSuccess ? 'Success!' : 'Click Me!'}
              </EnhancedButton>
            </div>
          </div>

          {/* Enhanced Cards */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Enhanced Cards</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <EnhancedCard variant="default" hover interactive>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Card</h4>
                  <p className="text-gray-600">Hover to see interactive elements</p>
                </div>
              </EnhancedCard>

              <EnhancedCard variant="elevated" hover>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-2xl bg-accent-100 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-accent-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Elevated Card</h4>
                  <p className="text-gray-600">Enhanced shadows and hover effects</p>
                </div>
              </EnhancedCard>

              <EnhancedCard variant="glass" hover>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Glass Card</h4>
                  <p className="text-gray-600">Modern glassmorphism effect</p>
                </div>
              </EnhancedCard>
            </div>
          </div>

          {/* Animated Progress */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Animated Progress</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Default Progress</h4>
                <AnimatedProgress value={progressValue} max={100} />
                <button
                  onClick={handleProgressChange}
                  className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Change Progress
                </button>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Striped Progress</h4>
                <AnimatedProgress 
                  value={75} 
                  max={100} 
                  variant="success" 
                  striped 
                  showIcon 
                />
              </div>
            </div>
          </div>

          {/* Interactive Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Interactive Testimonials</h3>
            <InteractiveTestimonial
              testimonials={demoTestimonials}
              variant="card"
              autoPlay
              showControls
              showRating
            />
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <EnhancedPricing
        title="Enhanced Pricing"
        subtitle="Experience our enhanced pricing component with interactive elements and smooth animations"
        tiers={demoPricingTiers}
        showToggle
        showFeatures
        showPopular
      />

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Enhance Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your website with our enhanced components and create engaging user experiences that convert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              Get Started
              <ArrowRight className="ml-2 h-6 w-6" />
            </EnhancedButton>
            <EnhancedButton size="xl" gradient>
              View Documentation
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
