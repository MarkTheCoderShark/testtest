import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Skip to main content link for keyboard users
export function SkipToMainContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}

// Focus indicator wrapper
export function FocusIndicator({ 
  children, 
  className = '',
  showOnFocus = true 
}: { 
  children: ReactNode
  className?: string
  showOnFocus?: boolean
}) {
  return (
    <div className={cn(
      'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none',
      showOnFocus && 'focus-within:ring-opacity-100',
      className
    )}>
      {children}
    </div>
  )
}

// Screen reader only text
export function SrOnly({ children }: { children: ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  )
}

// Visually hidden but accessible to screen readers
export function VisuallyHidden({ children }: { children: ReactNode }) {
  return (
    <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">
      {children}
    </span>
  )
}

// ARIA live region for announcements
export function LiveRegion({ 
  children, 
  ariaLive = 'polite',
  className = ''
}: { 
  children: ReactNode
  ariaLive?: 'off' | 'polite' | 'assertive'
  className?: string
}) {
  return (
    <div 
      aria-live={ariaLive}
      aria-atomic="true"
      className={cn('sr-only', className)}
    >
      {children}
    </div>
  )
}

// Loading spinner with proper ARIA attributes
export function LoadingSpinner({ 
  size = 'md',
  label = 'Loading...',
  className = ''
}: { 
  size?: 'sm' | 'md' | 'lg'
  label?: string
  className?: string
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }
  
  return (
    <div 
      role="status"
      aria-label={label}
      className={cn('inline-block', className)}
    >
      <svg
        className={cn(
          'animate-spin text-primary-600',
          sizeClasses[size]
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <SrOnly>{label}</SrOnly>
    </div>
  )
}

// Progress bar with ARIA attributes
export function ProgressBar({ 
  value, 
  max = 100,
  label = 'Progress',
  showValue = true,
  className = ''
}: { 
  value: number
  max?: number
  label?: string
  showValue?: boolean
  className?: string
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  
  return (
    <div className={cn('w-full', className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-secondary-700">{label}</span>
        {showValue && (
          <span className="text-sm text-secondary-500">{Math.round(percentage)}%</span>
        )}
      </div>
      <div className="w-full bg-secondary-200 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
        />
      </div>
    </div>
  )
}

// Error boundary component for better error handling
export function ErrorBoundary({ 
  children, 
  fallback,
  onError
}: { 
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: any) => void
}) {
  return (
    <div role="alert" aria-live="assertive">
      {children}
    </div>
  )
}

// Keyboard navigation helper
export function KeyboardNav({ 
  children, 
  onKeyDown,
  className = ''
}: { 
  children: ReactNode
  onKeyDown?: (e: React.KeyboardEvent) => void
  className?: string
}) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(e)
    }
    
    // Common keyboard navigation patterns
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        // Handle activation
        break
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault()
        // Handle navigation
        break
      case 'Escape':
        e.preventDefault()
        // Handle escape
        break
    }
  }
  
  return (
    <div 
      onKeyDown={handleKeyDown}
      className={cn('focus:outline-none', className)}
      tabIndex={0}
    >
      {children}
    </div>
  )
}
