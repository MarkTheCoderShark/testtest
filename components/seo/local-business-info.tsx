'use client'

interface LocalBusinessInfoProps {
  businessName: string
  address?: {
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  telephone?: string
  email?: string
  hours?: string[]
}

export function LocalBusinessInfo({
  businessName,
  address,
  telephone,
  email,
  hours,
}: LocalBusinessInfoProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {businessName} - Local Digital Marketing Services
      </h3>
      
      {address && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Business Address</h4>
          <address className="text-sm text-gray-600 not-italic">
            {address.streetAddress && <div>{address.streetAddress}</div>}
            <div>
              {address.addressLocality}, {address.addressRegion} {address.postalCode}
            </div>
            <div>{address.addressCountry}</div>
          </address>
        </div>
      )}
      
      {telephone && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Phone</h4>
          <a 
            href={`tel:${telephone}`}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {telephone}
          </a>
        </div>
      )}
      
      {email && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Email</h4>
          <a 
            href={`mailto:${email}`}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {email}
          </a>
        </div>
      )}
      
      {hours && hours.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Business Hours</h4>
          <div className="text-sm text-gray-600">
            {hours.map((hour, index) => (
              <div key={index}>{hour}</div>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">
          Serving Local Businesses
        </h4>
        <p className="text-sm text-blue-800">
          We provide digital marketing services to local businesses across the United States. 
          Our local SEO strategies help businesses dominate their local market and attract 
          nearby customers searching for their services.
        </p>
      </div>
    </div>
  )
}
