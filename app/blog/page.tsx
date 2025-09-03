import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Vello Blog | Digital Marketing & Web Development Insights',
  description: 'Stay updated with the latest trends in web development, digital marketing, and AI consulting. Expert insights, tips, and strategies for business growth.',
  keywords: 'web development blog, digital marketing insights, SEO tips, AI consulting, business growth strategies',
  openGraph: {
    title: 'Web Vello Blog | Digital Marketing & Web Development Insights',
    description: 'Expert insights on web development, digital marketing, and AI consulting. Stay ahead with the latest trends and strategies.',
    url: 'https://webvello.com/blog',
    siteName: 'Web Vello',
    locale: 'en_US',
    type: 'website',
  },
}

// Sample blog posts - in production, these would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: '10 Essential Features Every Business Website Needs in 2024',
    excerpt: 'Discover the must-have features that can make or break your business website. From mobile optimization to AI integration, learn what your customers expect.',
    slug: 'essential-website-features-2024',
    category: 'Web Development',
    author: 'Web Vello Team',
    date: '2024-01-15',
    readTime: '8 min read',
    image: '/api/placeholder/800/400',
    featured: true
  },
  {
    id: 2,
    title: 'AI-Powered SEO: How Machine Learning is Revolutionizing Search',
    excerpt: 'Explore how artificial intelligence is transforming SEO strategies and learn how to leverage AI tools for better search rankings.',
    slug: 'ai-powered-seo-machine-learning',
    category: 'Digital Marketing',
    author: 'Web Vello Team',
    date: '2024-01-12',
    readTime: '6 min read',
    image: '/api/placeholder/800/400',
    featured: true
  },
  {
    id: 3,
    title: 'Local SEO Checklist: 25 Steps to Dominate Local Search',
    excerpt: 'Complete guide to local SEO optimization. Learn proven strategies to help your business rank higher in local search results.',
    slug: 'local-seo-checklist-25-steps',
    category: 'SEO',
    author: 'Web Vello Team',
    date: '2024-01-10',
    readTime: '12 min read',
    image: '/api/placeholder/800/400',
    featured: false
  },
  {
    id: 4,
    title: 'Custom vs. Template Websites: Which is Right for Your Business?',
    excerpt: 'Compare custom and template website solutions to make the best choice for your business needs and budget.',
    slug: 'custom-vs-template-websites',
    category: 'Web Development',
    author: 'Web Vello Team',
    date: '2024-01-08',
    readTime: '7 min read',
    image: '/api/placeholder/800/400',
    featured: false
  },
  {
    id: 5,
    title: 'ChatGPT for Business: 10 Practical Applications',
    excerpt: 'Discover how businesses are using ChatGPT to improve productivity, customer service, and content creation.',
    slug: 'chatgpt-business-applications',
    category: 'AI Consulting',
    author: 'Web Vello Team',
    date: '2024-01-05',
    readTime: '9 min read',
    image: '/api/placeholder/800/400',
    featured: false
  },
  {
    id: 6,
    title: 'Conversion Rate Optimization: 15 Strategies That Actually Work',
    excerpt: 'Learn proven CRO strategies that can significantly increase your website conversions and boost your bottom line.',
    slug: 'conversion-rate-optimization-strategies',
    category: 'Digital Marketing',
    author: 'Web Vello Team',
    date: '2024-01-03',
    readTime: '10 min read',
    image: '/api/placeholder/800/400',
    featured: false
  }
]

const categories = ['All', 'Web Development', 'Digital Marketing', 'SEO', 'AI Consulting']

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Web Vello <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead with expert insights on web development, digital marketing, and AI consulting. 
            Discover strategies that drive real business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-blue-600 mr-2" />
              Weekly Updates
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 text-blue-600 mr-2" />
              Expert Insights
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 text-blue-600 mr-2" />
              Industry Trends
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">Featured Image</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Web Vello
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights on web development, digital marketing, and AI consulting delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  )
}
