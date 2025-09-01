"use client"

import { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

interface SearchResult {
  title: string
  description: string
  href: string
  type: 'service' | 'solution' | 'page'
  category?: string
}

const searchData: SearchResult[] = [
  // Services
  { title: "Website Design", description: "Custom website design that converts visitors to customers", href: "/services/website-design", type: "service", category: "Creative Solutions" },
  { title: "AI Consulting", description: "Strategic AI implementation for your business", href: "/services/ai-consulting", type: "service", category: "Intelligent Solutions" },
  { title: "Web Development", description: "Custom web development and programming services", href: "/services/web-development", type: "service", category: "Technical Solutions" },
  { title: "Local SEO", description: "Local search optimization and Google My Business", href: "/services/local-seo", type: "service", category: "Intelligent Solutions" },
  { title: "CRO E-commerce", description: "Optimize your online store for maximum conversions", href: "/services/cro-ecommerce", type: "service", category: "Conversion Optimization" },
  { title: "UI/UX Design", description: "User experience and interface design services", href: "/services/ui-ux-design", type: "service", category: "Technical Solutions" },
  { title: "Digital Marketing", description: "Comprehensive digital marketing strategies", href: "/services/digital-marketing", type: "service", category: "Intelligent Solutions" },
  { title: "SEO Services", description: "Search engine optimization and digital marketing", href: "/services/seo", type: "service", category: "Technical Solutions" },
  { title: "Software Development", description: "Custom software and application development", href: "/services/software-development", type: "service", category: "Technical Solutions" },
  { title: "App Design & Development", description: "Custom mobile app design and development", href: "/services/app-design-development", type: "service", category: "Creative Solutions" },
  
  // Solutions
  { title: "Website Not Driving Leads", description: "Transform your website into a lead generation machine", href: "/solutions/website-leads", type: "solution", category: "Problem Solvers" },
  { title: "Declining Website Traffic", description: "Reverse declining traffic with proven strategies", href: "/solutions/declining-traffic", type: "solution", category: "Problem Solvers" },
  { title: "Website Not Converting", description: "Optimize your website for maximum conversions", href: "/solutions/website-conversion", type: "solution", category: "Problem Solvers" },
  { title: "Not Showing Up on Google", description: "Improve your search engine visibility and rankings", href: "/solutions/google-visibility", type: "solution", category: "Problem Solvers" },
  
  // Pages
  { title: "About Us", description: "Learn about our team and mission", href: "/about", type: "page" },
  { title: "Case Studies", description: "Real results from real businesses", href: "/case-studies", type: "page" },
  { title: "Pricing", description: "Transparent pricing for all services", href: "/pricing", type: "page" },
  { title: "Contact", description: "Get in touch with our team", href: "/contact", type: "page" },
  { title: "Industries", description: "Industry-specific solutions", href: "/industries", type: "page" },
  { title: "Resources", description: "Free tools and resources", href: "/resources", type: "page" },
]

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([])
      return
    }

    setIsSearching(true)
    const timeoutId = setTimeout(() => {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category?.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered.slice(0, 8))
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (results.length > 0) {
      // Navigate to first result or show results
      setIsOpen(true)
    }
  }

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search services, solutions, or pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && (query.trim().length > 0 || results.length > 0) && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          {isSearching ? (
            <div className="p-4 text-center text-sm text-gray-500">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-2 h-2 rounded-full ${
                      result.type === 'service' ? 'bg-blue-500' :
                      result.type === 'solution' ? 'bg-green-500' :
                      'bg-gray-500'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {result.title}
                      </p>
                      {result.category && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {result.category}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {result.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                </Link>
              ))}
            </div>
          ) : query.trim().length > 0 ? (
            <div className="p-4 text-center text-sm text-gray-500">
              No results found for "{query}"
            </div>
          ) : null}
          
          <div className="border-t border-gray-200 p-3">
            <p className="text-xs text-gray-500 text-center">
              Press Enter to search or use arrow keys to navigate
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
