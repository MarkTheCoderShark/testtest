import { NextRequest, NextResponse } from 'next/server'
import { testWebsiteSpeed } from '@/lib/pagespeed-api'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Validate URL
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`)
    } catch {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 })
    }

    const cleanUrl = url.startsWith('http') ? url : `https://${url}`

    // Use real PageSpeed Insights API (falls back to mock data if no API key)
    const result = await testWebsiteSpeed(cleanUrl)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Speed test error:', error)
    return NextResponse.json({ error: 'Failed to test website speed' }, { status: 500 })
  }
}
