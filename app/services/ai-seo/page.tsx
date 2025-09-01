import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Brain, TrendingUp, Target, BarChart3, Users, Clock, CheckCircle, Cpu, Network, Database, Globe, Sparkles, Play, Pause, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumb, generateBreadcrumbs } from '@/components/ui/breadcrumb'

const features = [
  {
    title: "AI-Powered Keyword Research",
    description: "Advanced algorithms analyze search patterns, user intent, and competitive landscapes to identify high-opportunity keywords.",
    icon: Brain,
    benefits: ["Data-driven insights", "Competitive advantage", "Higher conversion potential", "Reduced research time"],
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Intelligent Content Optimization",
    description: "AI analyzes top-performing content and automatically suggests optimizations for better search rankings.",
    icon: Target,
    benefits: ["Improved rankings", "Better user engagement", "Higher click-through rates", "Content that converts"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Predictive Performance Analytics",
    description: "Machine learning models predict content performance and suggest improvements before publishing.",
    icon: BarChart3,
    benefits: ["Proactive optimization", "Better ROI", "Faster results", "Data-backed decisions"],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Automated Competitive Analysis",
    description: "AI continuously monitors competitors and identifies opportunities to outperform them in search results.",
    icon: TrendingUp,
    benefits: ["Stay ahead of competition", "Identify gaps", "Strategic advantage", "Continuous improvement"],
    color: "from-orange-500 to-red-600"
  }
]

const process = [
  {
    step: "01",
    title: "AI Analysis & Strategy",
    description: "Our AI analyzes your current performance, competitors, and market opportunities to create a data-driven strategy.",
    duration: "1-2 weeks",
    icon: Brain
  },
  {
    step: "02",
    title: "Content Optimization",
    description: "AI-powered tools optimize existing content and guide creation of new, high-performing content.",
    duration: "2-4 weeks",
    icon: Target
  },
  {
    step: "03",
    title: "Performance Monitoring",
    description: "Continuous AI monitoring tracks performance, identifies trends, and suggests real-time optimizations.",
    duration: "Ongoing",
    icon: BarChart3
  },
  {
    step: "04",
    title: "Results & Optimization",
    description: "AI analyzes results and automatically implements improvements for continuous growth.",
    duration: "Monthly",
    icon: TrendingUp
  }
]

const results = [
  { metric: "Traffic Increase", value: "300%+", description: "Average organic traffic growth" },
  { metric: "Ranking Improvement", value: "85%", description: "Keywords moved to page 1" },
  { metric: "Conversion Rate", value: "250%+", description: "Increase in lead generation" },
  { metric: "ROI", value: "1,500%+", description: "Return on investment" }
]

export default function AISeOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with AI Visualization */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
        {/* Animated AI Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-accent-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <Breadcrumb 
            items={generateBreadcrumbs('service', { title: 'AI-Powered SEO' })} 
            className="mb-8"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 text-sm font-semibold mb-8 shadow-lg">
                <Zap className="mr-2 h-4 w-4" />
                AI-Powered SEO
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl mb-6">
                Supercharge Your SEO with{" "}
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Artificial Intelligence
                </span>
              </h1>
              
              <p className="text-lg leading-8 text-secondary-600 mb-8">
                Leverage cutting-edge AI technology to identify opportunities, optimize content, and achieve 
                search rankings that traditional SEO methods can't match. Our AI analyzes millions of data 
                points to uncover hidden keywords, predict content performance, and outmaneuver your competition.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-lg" asChild>
                  <Link href="/contact">
                    Get AI SEO Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/case-studies">View AI SEO Results</Link>
                </Button>
              </div>
            </div>

            {/* AI Neural Network Visualization */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Neural Network Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
              
              {/* Central AI Brain */}
              <div className="relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl mb-6 animate-pulse">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary-900 mb-2">AI Core</div>
                  <div className="text-sm text-secondary-600">Processing Center</div>
                </div>
              </div>

              {/* Neural Network Nodes */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                <Target className="w-8 h-8 text-white" />
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="neural1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="neural2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="url(#neural1)" strokeWidth="2" className="animate-pulse" />
                <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="url(#neural1)" strokeWidth="2" className="animate-pulse" />
                <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="url(#neural2)" strokeWidth="2" className="animate-pulse" />
                <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="url(#neural2)" strokeWidth="2" className="animate-pulse" />
              </svg>

              {/* Floating Data Particles */}
              <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.9s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="mr-2 h-4 w-4" />
              AI Technology Showcase
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              How AI Transforms SEO
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our AI-powered approach goes beyond traditional SEO to deliver faster, more accurate, and more profitable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="group relative">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 rounded-3xl blur-xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6">
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-sm text-secondary-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary-600 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* AI Processing Indicator */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-secondary-500">AI Processing</span>
                    </div>
                    <div className="text-xs text-primary-600 font-medium">Active</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process Visualization */}
      <section className="py-24 bg-gradient-to-br from-secondary-50 to-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our AI SEO Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A systematic approach that combines human expertise with AI intelligence for maximum results.
            </p>
          </div>

          <div className="relative">
            {/* Process Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {process.map((step, index) => (
                <div key={step.step} className="text-center group">
                  <div className="relative">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-2xl font-bold text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-lg">
                      {step.step}
                    </div>
                    
                    {/* AI Processing Animation */}
                    <div className="absolute inset-0 rounded-full border-4 border-primary-300 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4">
                    {step.description}
                  </p>

                  <div className="flex items-center justify-center text-sm text-primary-600">
                    <Clock className="mr-1 h-4 w-4" />
                    {step.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive AI Results Dashboard */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Proven AI SEO Results
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              See the real impact of AI-powered SEO on business growth and online visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={result.metric} className="text-center group">
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      {result.value}
                    </div>
                    <div className="text-lg font-semibold text-secondary-900 mb-2">{result.metric}</div>
                    <div className="text-sm text-secondary-500">{result.description}</div>
                    
                    {/* AI Success Indicator */}
                    <div className="mt-4 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-xs text-green-600 font-medium">AI Optimized</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Performance Graph */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                AI Performance Analytics Dashboard
              </h3>
              <p className="text-lg text-secondary-600">
                Real-time monitoring and predictive analytics powered by artificial intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium text-secondary-600">AI Processing Power</div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-primary-600">99.9%</div>
                <div className="text-xs text-secondary-500">Uptime</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium text-secondary-600">Data Points Analyzed</div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-primary-600">2.4M+</div>
                <div className="text-xs text-secondary-500">Per Day</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium text-secondary-600">AI Accuracy Rate</div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-primary-600">94.7%</div>
                <div className="text-xs text-secondary-500">Prediction Rate</div>
              </div>
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
              AI SEO works best when combined with our other digital marketing services. 
              Discover the complete solution for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Traditional SEO */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-green-600 transition-colors">
                Traditional SEO
              </h3>
              <p className="text-secondary-600 mb-4">
                Proven SEO strategies that complement AI optimization for comprehensive search visibility.
              </p>
              <Link 
                href="/services/seo" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group-hover:underline"
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
                Dominate local search results with AI-enhanced local SEO strategies.
              </p>
              <Link 
                href="/services/local-seo" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Web Development */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-orange-600 transition-colors">
                Web Development
              </h3>
              <p className="text-secondary-600 mb-4">
                AI-optimized websites built for conversions and search engine success.
              </p>
              <Link 
                href="/services/web-development" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* UI/UX Design */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-purple-600 transition-colors">
                UI/UX Design
              </h3>
              <p className="text-secondary-600 mb-4">
                User-centered design that works seamlessly with AI SEO strategies.
              </p>
              <Link 
                href="/services/ui-ux-design" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* CRO Services */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors mb-4">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-red-600 transition-colors">
                CRO Services
              </h3>
              <p className="text-secondary-600 mb-4">
                Convert AI-driven traffic into customers with conversion rate optimization.
              </p>
              <Link 
                href="/services/cro-lead-generation" 
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Content Strategy */}
            <div className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors mb-4">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-teal-600 transition-colors">
                Content Strategy
              </h3>
              <p className="text-secondary-600 mb-4">
                AI-optimized content that ranks and converts for maximum ROI.
              </p>
              <Link 
                href="/services/digital-marketing" 
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium group-hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-800 via-primary-900 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-30"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white/90 mb-6 border border-white/20">
            <Cpu className="mr-2 h-4 w-4" />
            AI-POWERED SEO READY
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience AI-Powered SEO?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join the future of search engine optimization and leave your competitors behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100" asChild>
              <Link href="/contact">Get Free AI SEO Audit</Link>
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
