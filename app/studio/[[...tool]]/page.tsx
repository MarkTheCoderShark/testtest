'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// Generate static params for static export
// Return empty array since studio is not part of static site
export async function generateStaticParams() {
  return []
}

export default function StudioPage() {
  return <NextStudio config={config} />
}
