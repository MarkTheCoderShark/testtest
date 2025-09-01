import { Check, Star, Zap, TrendingUp, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with digital marketing",
    price: "$2,500",
    period: "/month",
    features: [
      "Local SEO optimization",
      "Google My Business management",
      "Monthly performance reports",
      "Basic keyword research",
      "On-page SEO audit",
      "Email support",
    ],
    popular: false,
    icon: TrendingUp,
    cta: "Get Started",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "Comprehensive digital marketing for growing businesses",
    price: "$5,000",
    period: "/month",
    features: [
      "Everything in Starter, plus:",
      "AI-powered SEO strategy",
      "Content marketing (8 articles/month)",
      "Social media management",
      "Advanced analytics & reporting",
      "Priority support",
      "Monthly strategy calls",
      "Competitor analysis",
    ],
    popular: true,
    icon: Zap,
    cta: "Most Popular",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "Full-service digital marketing for established companies",
    price: "$12,000",
    period: "/month",
    features: [
      "Everything in Professional, plus:",
      "Custom web development",
      "Advanced AI SEO implementation",
      "PPC campaign management",
      "Video content creation",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Custom reporting dashboard",
      "White-label options",
    ],
    popular: false,
    icon: Crown,
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
  },
]

const additionalServices = [
  {
    name: "One-Time SEO Audit",
    price: "$1,500",
    description: "Comprehensive website analysis with actionable recommendations",
  },
  {
    name: "Content Package",
    price: "$500",
    description: "5 high-quality, SEO-optimized blog posts",
  },
  {
    name: "Local SEO Setup",
    price: "$800",
    description: "Complete local search optimization for one location",
  },
  {
    name: "Technical SEO Fix",
    price: "$300",
    description: "Fix critical technical SEO issues",
  },
]

export function Pricing() {
  return (
    <section className="py-16 sm:py-24 bg-secondary-50" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-secondary-900">
            Transparent Pricing That Drives Results
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-secondary-600">
            Choose the plan that fits your business needs. All plans include our proven methodology 
            and dedicated support to ensure your success.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-12 sm:mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-3xl bg-white p-6 sm:p-8 shadow-soft ring-1 ring-secondary-900/5",
                plan.popular && "ring-2 ring-primary-600 shadow-large"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-white">
                    <Star className="mr-1 h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary-100">
                    <plan.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-secondary-900">{plan.name}</h3>
                <p className="mt-2 text-xs sm:text-sm text-secondary-600">{plan.description}</p>
                
                <div className="mt-4 sm:mt-6 flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-secondary-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-xs sm:text-sm text-secondary-600">{plan.period}</span>
                </div>

                <Button
                  variant={plan.ctaVariant}
                  size="lg"
                  className="mt-6 sm:mt-8 w-full animate-pulse"
                  asChild
                >
                  <a href="/contact">🚀 {plan.cta}</a>
                </Button>
              </div>

              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary-600 mt-0.5" />
                    <span className="text-xs sm:text-sm text-secondary-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mx-auto mt-16 sm:mt-20 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-secondary-900">
              Additional Services
            </h3>
            <p className="mt-4 text-base sm:text-lg text-secondary-600">
              Need something specific? We offer à la carte services to complement any plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl bg-white p-4 sm:p-6 shadow-soft ring-1 ring-secondary-900/5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-secondary-900">
                      {service.name}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-secondary-600">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-bold text-primary-600">
                      {service.price}
                    </div>
                    <Button variant="outline" size="sm" className="mt-2" asChild>
                      <a href="/contact">🎯 Get Quote</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-20 max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-secondary-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-secondary-900/5">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                How long does it take to see results?
              </h4>
              <p className="text-secondary-600">
                Most clients see initial improvements within 30-60 days, with significant results 
                typically appearing in 3-6 months. Local SEO can show faster results.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-secondary-900/5">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Can I cancel or change my plan?
              </h4>
              <p className="text-secondary-600">
                Yes, you can modify or cancel your plan at any time. We offer flexible month-to-month 
                contracts with no long-term commitments.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-secondary-900/5">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Do you offer custom solutions?
              </h4>
              <p className="text-secondary-600">
                Absolutely! Our Enterprise plan includes custom development, and we can create 
                tailored solutions for businesses with unique needs.
              </p>
            </div>
          </div>
        </div>

        {/* Services Included in Each Plan */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold tracking-tight text-secondary-900">
              Services Included in Each Plan
            </h3>
            <p className="mt-4 text-lg text-secondary-600">
              Every pricing tier includes specific services designed to deliver measurable results. 
              Discover which services are included in each plan and how they work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter Plan Services */}
            <div className="bg-white rounded-2xl p-8 shadow-soft ring-1 ring-secondary-900/5">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-secondary-900 mb-2">Starter Plan</h4>
                <div className="text-2xl font-bold text-secondary-900 mb-2">$2,500/month</div>
                <p className="text-sm text-secondary-600">Perfect for small businesses getting started</p>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Local SEO Services</h5>
                  <p className="text-sm text-secondary-600">Google My Business optimization, local keyword targeting, review management</p>
                  <a href="/services/local-seo" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Basic SEO Audit</h5>
                  <p className="text-sm text-secondary-600">On-page optimization, keyword research, technical SEO basics</p>
                  <a href="/services/seo" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Performance Reporting</h5>
                  <p className="text-sm text-secondary-600">Monthly reports, analytics tracking, performance insights</p>
                  <a href="/services/analytics-consulting" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Plan Services */}
            <div className="bg-white rounded-2xl p-8 shadow-soft ring-2 ring-primary-600 shadow-large">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <Zap className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-secondary-900 mb-2">Professional Plan</h4>
                <div className="text-2xl font-bold text-secondary-900 mb-2">$5,000/month</div>
                <p className="text-sm text-secondary-600">Comprehensive digital marketing for growing businesses</p>
                <span className="inline-flex items-center rounded-full bg-primary-600 px-3 py-1 text-sm font-semibold text-white mt-2">
                  <Star className="mr-1 h-4 w-4" />
                  Most Popular
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">AI-Powered SEO</h5>
                  <p className="text-sm text-secondary-600">Advanced SEO strategies, content optimization, technical SEO</p>
                  <a href="/services/ai-seo" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Content Marketing</h5>
                  <p className="text-sm text-secondary-600">8 SEO-optimized articles per month, content strategy, blog management</p>
                  <a href="/services/content-strategy" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Social Media Management</h5>
                  <p className="text-sm text-secondary-600">Social media strategy, content creation, community management</p>
                  <a href="/services/social-media-marketing" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Advanced Analytics</h5>
                  <p className="text-sm text-secondary-600">Detailed reporting, competitor analysis, performance optimization</p>
                  <a href="/services/analytics-consulting" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Enterprise Plan Services */}
            <div className="bg-white rounded-2xl p-8 shadow-soft ring-1 ring-secondary-900/5">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                    <Crown className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-secondary-900 mb-2">Enterprise Plan</h4>
                <div className="text-2xl font-bold text-secondary-900 mb-2">$12,000/month</div>
                <p className="text-sm text-secondary-600">Full-service digital marketing for established companies</p>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Custom Web Development</h5>
                  <p className="text-sm text-secondary-600">Custom websites, e-commerce solutions, conversion optimization</p>
                  <a href="/services/web-development" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Advanced AI SEO</h5>
                  <p className="text-sm text-secondary-600">Cutting-edge AI implementation, advanced technical SEO, automation</p>
                  <a href="/services/ai-seo" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">PPC Campaign Management</h5>
                  <p className="text-sm text-secondary-600">Google Ads, Facebook Ads, campaign optimization, ROI tracking</p>
                  <a href="/services/ppc-management" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Video Content Creation</h5>
                  <p className="text-sm text-secondary-600">Video marketing, YouTube optimization, video SEO, content strategy</p>
                  <a href="/services/video-marketing" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-secondary-900 mb-1">Dedicated Account Management</h5>
                  <p className="text-sm text-secondary-600">Personal account manager, weekly calls, custom reporting, white-label options</p>
                  <a href="/services/account-management" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <div className="rounded-3xl bg-gradient-to-r from-primary-600 to-primary-500 p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              Get a free strategy session and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="animate-pulse" asChild>
                <a href="/contact">🚀 Get FREE Strategy Session (Worth $500)</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
                <a href="/case-studies">See 300%+ Results</a>
              </Button>
            </div>
            
            {/* Urgency & Scarcity */}
            <div className="mt-6 text-center">
              <p className="text-sm text-white/80 mb-2">
                ⏰ <span className="font-semibold">Limited Time:</span> Free strategy session (normally $500)
              </p>
              <p className="text-xs text-white/60">
                Only 3 spots available this week • 500+ businesses trust us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
