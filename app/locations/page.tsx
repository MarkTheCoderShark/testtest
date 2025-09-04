import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowLeft, Globe, Users, TrendingUp } from 'lucide-react'
import { Button } from '../../components/ui/button'

export const metadata: Metadata = {
  title: 'Service Locations | Web Vello Digital Marketing',
  description: 'Web Vello serves businesses nationwide with professional digital marketing services. Find your city and discover how we can help your business grow.',
  keywords: 'digital marketing locations, SEO services nationwide, web development cities, local SEO, business marketing',
}

export default function LocationsPage() {
  const cities = [
    { name: 'New York, NY', slug: 'new-york-ny', state: 'NY' },
    { name: 'Los Angeles, CA', slug: 'los-angeles-ca', state: 'CA' },
    { name: 'Chicago, IL', slug: 'chicago-il', state: 'IL' },
    { name: 'Houston, TX', slug: 'houston-tx', state: 'TX' },
    { name: 'Phoenix, AZ', slug: 'phoenix-az', state: 'AZ' },
    { name: 'Philadelphia, PA', slug: 'philadelphia-pa', state: 'PA' },
    { name: 'San Antonio, TX', slug: 'san-antonio-tx', state: 'TX' },
    { name: 'San Diego, CA', slug: 'san-diego-ca', state: 'CA' },
    { name: 'Dallas, TX', slug: 'dallas-tx', state: 'TX' },
    { name: 'San Jose, CA', slug: 'san-jose-ca', state: 'CA' },
    { name: 'Austin, TX', slug: 'austin-tx', state: 'TX' },
    { name: 'Jacksonville, FL', slug: 'jacksonville-fl', state: 'FL' },
    { name: 'Fort Worth, TX', slug: 'fort-worth-tx', state: 'TX' },
    { name: 'Columbus, OH', slug: 'columbus-oh', state: 'OH' },
    { name: 'Indianapolis, IN', slug: 'indianapolis-in', state: 'IN' },
    { name: 'Charlotte, NC', slug: 'charlotte-nc', state: 'NC' },
    { name: 'San Francisco, CA', slug: 'san-francisco-ca', state: 'CA' },
    { name: 'Seattle, WA', slug: 'seattle-wa', state: 'WA' },
    { name: 'Denver, CO', slug: 'denver-co', state: 'CO' },
    { name: 'Washington, DC', slug: 'washington-dc', state: 'DC' },
    { name: 'Nashville, TN', slug: 'nashville-tn', state: 'TN' },
    { name: 'Oklahoma City, OK', slug: 'oklahoma-city-ok', state: 'OK' },
    { name: 'El Paso, TX', slug: 'el-paso-tx', state: 'TX' },
    { name: 'Boston, MA', slug: 'boston-ma', state: 'MA' },
    { name: 'Portland, OR', slug: 'portland-or', state: 'OR' },
    { name: 'Las Vegas, NV', slug: 'las-vegas-nv', state: 'NV' },
    { name: 'Detroit, MI', slug: 'detroit-mi', state: 'MI' },
    { name: 'Memphis, TN', slug: 'memphis-tn', state: 'TN' },
    { name: 'Louisville, KY', slug: 'louisville-ky', state: 'KY' },
    { name: 'Baltimore, MD', slug: 'baltimore-md', state: 'MD' },
    { name: 'Milwaukee, WI', slug: 'milwaukee-wi', state: 'WI' },
    { name: 'Albuquerque, NM', slug: 'albuquerque-nm', state: 'NM' },
    { name: 'Tucson, AZ', slug: 'tucson-az', state: 'AZ' },
    { name: 'Fresno, CA', slug: 'fresno-ca', state: 'CA' },
    { name: 'Sacramento, CA', slug: 'sacramento-ca', state: 'CA' },
    { name: 'Kansas City, MO', slug: 'kansas-city-mo', state: 'MO' },
    { name: 'Mesa, AZ', slug: 'mesa-az', state: 'AZ' }
  ]

  // Group cities by state
  const citiesByState = cities.reduce((acc, city) => {
    if (!acc[city.state]) {
      acc[city.state] = []
    }
    acc[city.state].push(city)
    return acc
  }, {} as Record<string, typeof cities>)

  const stats = [
    { number: '38+', label: 'Cities Served', icon: MapPin },
    { number: '50+', label: 'States Covered', icon: Globe },
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '300%', label: 'Average Growth', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              We Serve Businesses Nationwide
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Professional digital marketing services available in major cities across the United States. 
              Find your location and discover how Web Vello can help your business grow.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-primary-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            All Service Locations
          </h2>
          <p className="text-lg text-gray-600">
            Click on your city to learn more about our local digital marketing services
          </p>
        </div>

        {/* Cities by State */}
        <div className="space-y-12">
          {Object.entries(citiesByState)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([state, stateCities]) => (
              <div key={state} className="border-b border-gray-200 pb-8 last:border-b-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-primary-600" />
                  {state}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {stateCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}`}
                      className="group p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-primary-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-900 group-hover:text-primary-600 transition-colors font-medium">
                          {city.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See Your City?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We provide digital marketing services to businesses nationwide, regardless of location. 
            Our remote-first approach means we can deliver exceptional results no matter where you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
