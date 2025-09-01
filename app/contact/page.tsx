import { Metadata } from 'next'
import { ContactPageClient } from './contact-client'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-config'

export const metadata: Metadata = generateSEOMetadata('contact')

export default function ContactPage() {
  return <ContactPageClient />
}