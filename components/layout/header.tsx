"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import { SearchBar } from "../ui/search"
import { 
  Menu, X, ChevronDown, ChevronUp, Search, Phone, BarChart3, 
  Rocket, Target, Users, TrendingUp, Globe, Code, Palette, 
  Zap, Building2, BookOpen, Info, Monitor, PenTool, Settings, 
  Lightbulb, Smartphone, ShoppingCart, Mail, Eye, TrendingDown, 
  DollarSign, AlertTriangle, Search as SearchIcon, Brain, 
  MessageSquare, Bot, Factory, Shield, Wrench, Layers, Star
} from "lucide-react"
import { cn } from "../../lib/utils"

const navigation = [
  {
    name: "Creative Solutions",
    href: "#",
    description: "Design & Creative Services",
    children: [
      { 
        name: "Website Design", 
        href: "/services/website-design",
        description: "Custom website design that converts visitors to customers",
        icon: Monitor,
        color: "from-blue-500 to-cyan-600",
        popular: true
      },
      { 
        name: "Website Redesign", 
        href: "/services/website-redesign",
        description: "Transform your existing website for better performance",
        icon: Palette,
        color: "from-purple-500 to-indigo-600"
      },
      { 
        name: "Rapid Web Design", 
        href: "/services/rapid-web-design",
        description: "Fast-track website development for quick launches",
        icon: Zap,
        color: "from-yellow-500 to-orange-600"
      },
      { 
        name: "Social Media Design", 
        href: "/services/social-media-design",
        description: "Engaging social media graphics and content",
        icon: Users,
        color: "from-pink-500 to-rose-600"
      },
      { 
        name: "Ecommerce Design", 
        href: "/services/ecommerce-design",
        description: "High-converting online store designs",
        icon: ShoppingCart,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "Email Marketing Design", 
        href: "/services/email-marketing-design",
        description: "Optimized email campaigns that drive sales",
        icon: Mail,
        color: "from-red-500 to-pink-600"
      },
      { 
        name: "App Design & Development", 
        href: "/services/app-design-development",
        description: "Custom mobile app design and development",
        icon: Smartphone,
        color: "from-indigo-500 to-purple-600"
      },
    ],
  },
  {
    name: "Intelligent Solutions",
    href: "#",
    description: "AI & Advanced Marketing",
    children: [
      { 
        name: "AI Consulting", 
        href: "/services/ai-consulting",
        description: "Strategic AI implementation for your business",
        icon: Brain,
        color: "from-purple-500 to-indigo-600",
        popular: true
      },
      { 
        name: "AI Digital Marketing", 
        href: "/services/ai-digital-marketing",
        description: "AI-powered marketing strategies and automation",
        icon: Zap,
        color: "from-blue-500 to-cyan-600"
      },
      { 
        name: "AI SEO", 
        href: "/services/ai-seo",
        description: "AI-powered search engine optimization",
        icon: SearchIcon,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "ChatGPT Optimization", 
        href: "/services/chatgpt-optimization",
        description: "Optimize your ChatGPT prompts and workflows",
        icon: MessageSquare,
        color: "from-orange-500 to-red-600"
      },
      { 
        name: "Local SEO", 
        href: "/services/local-seo",
        description: "Local search optimization and Google My Business",
        icon: Globe,
        color: "from-indigo-500 to-purple-600"
      },
      { 
        name: "Digital Marketing", 
        href: "/services/digital-marketing",
        description: "Comprehensive digital marketing strategies",
        icon: BarChart3,
        color: "from-teal-500 to-blue-600"
      },
      { 
        name: "Generative Engine Optimization", 
        href: "/services/generative-engine-optimization",
        description: "AI-powered content optimization for search engines",
        icon: Bot,
        color: "from-violet-500 to-purple-600"
      },
      { 
        name: "Answer Engine Optimization", 
        href: "/services/answer-engine-optimization",
        description: "Optimize for voice search and featured snippets",
        icon: SearchIcon,
        color: "from-cyan-500 to-blue-600"
      },
      { 
        name: "AI GPT Integration", 
        href: "/services/ai-gpt-integration",
        description: "Seamless AI and GPT integration for your systems",
        icon: Bot,
        color: "from-indigo-500 to-blue-600"
      },
      { 
        name: "AI Agent Development", 
        href: "/services/ai-agent-development",
        description: "Custom AI agents for business automation",
        icon: Bot,
        color: "from-purple-500 to-indigo-600"
      },
      { 
        name: "Enterprise GEO Services", 
        href: "/services/enterprise-geo-services",
        description: "AI-powered location intelligence for enterprise growth",
        icon: Globe,
        color: "from-teal-500 to-blue-600"
      },
    ],
  },
  {
    name: "Technical Solutions",
    href: "#",
    description: "Development & Technical Services",
    children: [
      { 
        name: "Web Development", 
        href: "/services/web-development",
        description: "Custom web development and programming services",
        icon: Code,
        color: "from-indigo-500 to-purple-600",
        popular: true
      },
      { 
        name: "WordPress Development", 
        href: "/services/wordpress-development",
        description: "Custom WordPress solutions and optimization",
        icon: Code,
        color: "from-blue-500 to-cyan-600"
      },
      { 
        name: "Shopify Development", 
        href: "/services/shopify-development",
        description: "High-performance Shopify ecommerce solutions",
        icon: ShoppingCart,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "Software Development", 
        href: "/services/software-development",
        description: "Custom software and application development",
        icon: Settings,
        color: "from-gray-500 to-slate-600"
      },
      { 
        name: "Software Design & Development", 
        href: "/services/software-design-development",
        description: "Enterprise software solutions and custom applications",
        icon: Layers,
        color: "from-slate-500 to-gray-600"
      },
      { 
        name: "UI/UX Design", 
        href: "/services/ui-ux-design",
        description: "User experience and interface design services",
        icon: Eye,
        color: "from-orange-500 to-red-600"
      },
      { 
        name: "SEO Services", 
        href: "/services/seo",
        description: "Search engine optimization and digital marketing",
        icon: SearchIcon,
        color: "from-teal-500 to-blue-600"
      },
    ],
  },
  {
    name: "Conversion Optimization",
    href: "#",
    description: "CRO & Performance",
    children: [
      { 
        name: "CRO E-commerce", 
        href: "/services/cro-ecommerce",
        description: "Optimize your online store for maximum conversions",
        icon: ShoppingCart,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "CRO Lead Generation", 
        href: "/services/cro-lead-generation",
        description: "Convert more visitors into qualified leads",
        icon: Target,
        color: "from-blue-500 to-indigo-600"
      },
    ],
  },
  {
    name: "Problem Solvers",
    href: "#",
    description: "Solutions for Common Issues",
    children: [
      { 
        name: "Website Not Driving Leads", 
        href: "/solutions/website-leads",
        description: "Transform your website into a lead generation machine",
        icon: Target,
        color: "from-red-500 to-pink-600"
      },
      { 
        name: "Declining Website Traffic", 
        href: "/solutions/declining-traffic",
        description: "Reverse declining traffic with proven strategies",
        icon: TrendingDown,
        color: "from-orange-500 to-red-600"
      },
      { 
        name: "Website Not Converting", 
        href: "/solutions/website-conversion",
        description: "Optimize your website for maximum conversions",
        icon: DollarSign,
        color: "from-green-500 to-emerald-600"
      },
      { 
        name: "Website Not Driving ROI", 
        href: "/solutions/website-roi",
        description: "Get measurable ROI from your website investment",
        icon: BarChart3,
        color: "from-blue-500 to-cyan-600"
      },
      { 
        name: "Not Showing Up on Google", 
        href: "/solutions/google-visibility",
        description: "Improve your search engine visibility and rankings",
        icon: SearchIcon,
        color: "from-purple-500 to-indigo-600"
      },
      { 
        name: "Agency Not Driving Results", 
        href: "/solutions/agency-results",
        description: "Get the results you deserve from your marketing agency",
        icon: AlertTriangle,
        color: "from-yellow-500 to-orange-600"
      },
    ],
  },
  { name: "Case Studies", href: "/case-studies", description: "Success Stories" },
  { name: "Industries", href: "/industries", description: "Industry Solutions" },
  { name: "Pricing", href: "/pricing", description: "Transparent Pricing" },
  { name: "Resources", href: "/resources", description: "Free Tools & Guides" },
  { name: "About", href: "/about", description: "Our Story" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Top Revenue Bar */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-300" />
                <span className="font-semibold text-sm">SUCCESS DELIVERED FOR OUR CLIENTS</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold">$50M+</span>
                <span className="text-sm opacity-90">Revenue Generated</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Search className="h-4 w-4" />
                <span>Smart Search</span>
              </button>
              <Link href="/contact" className="hover:opacity-80 transition-opacity">
                Partner Portal
              </Link>
              <Link href="/contact" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">888-601-5359</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Rocket className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">Digital</span>
                <span className="text-2xl font-bold text-secondary-900 group-hover:text-secondary-800 transition-colors">Wagon</span>
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <SearchBar />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-x-1 px-4 py-3 text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50 group-hover:bg-primary-50 group-hover:text-primary-600">
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    {openDropdown === item.name && (
                      <div className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-4xl -translate-x-1/2 px-4">
                        <div className="w-screen max-w-4xl flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-2xl ring-1 ring-secondary-900/5 border border-gray-100">
                          <div className="p-8">
                            {/* Header */}
                            <div className="mb-6">
                              <h3 className="text-lg font-bold text-secondary-900 mb-2">{item.name}</h3>
                              <p className="text-secondary-600">{item.description}</p>
                            </div>
                            
                            {/* Grid Layout */}
                            <div className="grid grid-cols-2 gap-6">
                              {item.children.map((child) => (
                                <div key={child.name} className="group relative flex gap-x-4 rounded-xl p-4 hover:bg-secondary-50 transition-all duration-200 hover:shadow-md border border-transparent hover:border-secondary-200">
                                  <div className={cn(
                                    "flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-r",
                                    child.color
                                  )}>
                                    <child.icon className="h-6 w-6 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-x-2 mb-1">
                                      <Link
                                        href={child.href}
                                        className="font-semibold text-secondary-900 group-hover:text-primary-600 text-base"
                                      >
                                        {child.name}
                                      </Link>
                                      {child.popular && (
                                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                                          Popular
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-sm text-secondary-600 group-hover:text-secondary-700">
                                      {child.description}
                                    </p>
                                  </div>
                                  <div className="flex-none opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-3 text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 hover:shadow-xl transition-all duration-200 px-8 py-3 text-base font-semibold">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Digital Wagon</span>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-primary-600">Digital</span>
                    <span className="text-lg font-bold text-secondary-900">Wagon</span>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-secondary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-900 hover:bg-secondary-50"
                          >
                            {item.name}
                            <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          {openDropdown === item.name && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block rounded-lg px-3 py-2 text-sm leading-7 text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-secondary-900 hover:bg-secondary-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Button asChild className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
