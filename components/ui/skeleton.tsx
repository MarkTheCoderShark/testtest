import { cn } from "../../lib/utils"

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string | number
  height?: string | number
  lines?: number
}

export function Skeleton({ 
  className, 
  variant = 'rounded', 
  width, 
  height, 
  lines = 1 
}: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700"
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
    rounded: "rounded-md"
  }
  
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    className
  )
  
  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(classes, {
              'w-full': i === lines - 1,
              'w-3/4': i === 0,
              'w-1/2': i === 1,
              'w-5/6': i === 2
            })}
            style={{
              width: width,
              height: height || '1rem'
            }}
          />
        ))}
      </div>
    )
  }
  
  return (
    <div
      className={classes}
      style={{
        width: width || '100%',
        height: height || '1rem'
      }}
    />
  )
}

// Predefined skeleton components for common use cases
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="py-24 space-y-8">
      <div className="text-center space-y-4">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </div>
      <div className="flex justify-center space-x-4">
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-12 w-32" />
      </div>
    </div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-6">
      <Skeleton className="h-16 w-16 rounded-2xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="space-y-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-32" />
          </div>
        ))}
      </div>
      <Skeleton className="h-6 w-24" />
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
      <div className="flex items-center space-x-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}
