'use client'

import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight, Play, Star, Users, TrendingUp, Zap, Target, Award } from "lucide-react"
// import { useConversionTracking } from "../../hooks/useConversionTracking"
// import ScrollTracker from "../analytics/scroll-tracker"

const stats = [
  { id: 1, name: "Projects Completed", value: "500+", icon: TrendingUp, color: "from-green-400 to-emerald-500" },
  { id: 2, name: "Happy Clients", value: "500+", icon: Users, color: "from-blue-400 to-cyan-500" },
  { id: 3, name: "ROI Average", value: "1,200%", icon: Zap, color: "from-red-400 to-pink-500" },
]

const reviews = [
  { id: 1, rating: 5, text: "Outstanding results and professional service", author: "Sarah M." },
  { id: 2, rating: 5, text: "Transformed our online presence completely", author: "Mike R." },
  { id: 3, rating: 5, text: "Best investment we've made this year", author: "Jennifer L." },
]

export function Hero() {
  // Temporarily disabled conversion tracking to fix build error
  // const { trackCTAClick, trackStrategySession } = useConversionTracking()

  const handleCTAClick = (buttonText: string, location: string) => {
    // trackCTAClick(buttonText, location)
    console.log('CTA clicked:', buttonText, 'at', location)
  }

  const handleStrategySessionClick = () => {
    // trackStrategySession('hero_section')
    console.log('Strategy session requested from hero section')
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900">
      {/* <ScrollTracker /> */}
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Colorful gradient overlays */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-500/10 via-green-500/10 to-blue-500/10 opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-red-400/20 to-pink-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-500/20 blur-3xl animate-pulse delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-500/30 to-pink-500/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold text-white ring-2 ring-inset ring-white/20 mb-6 sm:mb-8 shadow-2xl animate-pulse">
            <Star className="mr-2 h-4 w-4 sm:h-5 sm:w-5 fill-white" />
            <span className="hidden sm:inline">Trusted by 500+ businesses nationwide</span>
            <span className="sm:hidden">500+ businesses trust us</span>
          </div>

          {/* Slogan */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-white/90">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Design</span>
              <span className="text-white/70 mx-2">•</span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Develop</span>
              <span className="text-white/70 mx-2">•</span>
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Dominate</span>
            </h2>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Transform{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Your Business
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Results-Driven
            </span>{" "}
            Digital Marketing
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90">
            We're the digital marketing agency that doesn't just promise results—we deliver them. 
            With over 15 years of experience and proven results for our clients, we specialize 
            in AI-powered SEO, local search dominance, and conversion-focused web development that creates 
            measurable business success month after month.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              size="xl" 
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 animate-pulse" 
              onClick={handleStrategySessionClick}
              asChild
            >
              <Link href="/contact">
                🚀 Get FREE Strategy Session (Worth $500)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-primary-900 px-6 sm:px-8 py-4 text-base sm:text-lg font-bold backdrop-blur-sm" 
              onClick={() => handleCTAClick('See 300%+ Results', 'hero_section')}
              asChild
            >
              <Link href="/case-studies" className="flex items-center">
                <Play className="mr-2 h-5 w-5" />
                See 300%+ Results
              </Link>
            </Button>
          </div>
          
          {/* Urgency & Scarcity */}
          <div className="mt-6 text-center">
            <p className="text-xs sm:text-sm text-white/80 mb-2">
              ⏰ <span className="font-semibold">Limited Time:</span> Free strategy session (normally $500)
            </p>
            <p className="text-xs text-white/60">
              <span className="hidden sm:inline">Only 3 spots available this week • 500+ businesses trust us</span>
              <span className="sm:hidden">Only 3 spots this week</span>
            </p>
          </div>


        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-3 group">
                <div className={`mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <dt className="text-sm sm:text-base leading-7 text-white/80">{stat.name}</dt>
                <dd className="order-first text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-green-300 transition-colors">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Social Proof */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-6 lg:p-8 shadow-2xl ring-1 ring-white/20 border border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-1 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">4.9/5 from 200+ reviews</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review) => (
                <div key={review.id} className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mb-1">"{review.text}"</p>
                  <p className="text-xs font-medium text-white/90">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
