"use client"

import { forwardRef, useEffect, useState } from 'react'
import { CheckCircle, AlertCircle, Clock, TrendingUp } from 'lucide-react'

export interface AnimatedProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'gradient'
  size?: 'sm' | 'default' | 'lg'
  showLabel?: boolean
  showIcon?: boolean
  animated?: boolean
  striped?: boolean
  children?: React.ReactNode
}

const AnimatedProgress = forwardRef<HTMLDivElement, AnimatedProgressProps>(
  ({ 
    className, 
    value = 0, 
    max = 100,
    variant = 'default',
    size = 'default',
    showLabel = true,
    showIcon = false,
    animated = true,
    striped = false,
    children, 
    ...props 
  }, ref) => {
    const [displayValue, setDisplayValue] = useState(0)
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    useEffect(() => {
      if (animated) {
        const timer = setTimeout(() => {
          setDisplayValue(percentage)
        }, 100)
        return () => clearTimeout(timer)
      } else {
        setDisplayValue(percentage)
      }
    }, [percentage, animated])

    const baseClasses = `relative overflow-hidden rounded-full transition-all duration-500 ${
      // Size variants
      size === 'sm' ? 'h-2' :
      size === 'default' ? 'h-3' :
      size === 'lg' ? 'h-4' : 'h-3'
    } ${
      // Variant styles
      variant === 'default' ? 'bg-gray-200' :
      variant === 'success' ? 'bg-success-100' :
      variant === 'warning' ? 'bg-warning-100' :
      variant === 'danger' ? 'bg-danger-100' :
      variant === 'gradient' ? 'bg-gradient-to-r from-primary-100 to-primary-200' : ''
    } ${className || ''}`

    const progressClasses = `h-full transition-all duration-1000 ease-out flex items-center justify-center ${
      // Variant styles
      variant === 'default' ? 'bg-primary-600' :
      variant === 'success' ? 'bg-success-600' :
      variant === 'warning' ? 'bg-warning-600' :
      variant === 'danger' ? 'bg-danger-600' :
      variant === 'gradient' ? 'bg-gradient-primary' : ''
    } ${
      // Striped effect
      striped ? 'bg-gradient-to-r from-current via-current to-transparent bg-[length:20px_20px] animate-shimmer' : ''
    }`

    const getIcon = () => {
      if (percentage >= 100) return <CheckCircle className="h-4 w-4 text-white" />
      if (percentage >= 75) return <TrendingUp className="h-4 w-4 text-white" />
      if (percentage >= 50) return <Clock className="h-4 w-4 text-white" />
      return <AlertCircle className="h-4 w-4 text-white" />
    }

    const getVariantColor = () => {
      switch (variant) {
        case 'success': return 'text-success-700'
        case 'warning': return 'text-warning-700'
        case 'danger': return 'text-danger-700'
        default: return 'text-primary-700'
      }
    }

    return (
      <div ref={ref} className="w-full" {...props}>
        {/* Progress bar */}
        <div className={baseClasses}>
          <div
            className={progressClasses}
            style={{ width: `${displayValue}%` }}
          >
            {/* Icon in progress bar */}
            {showIcon && displayValue > 20 && (
              <div className="flex items-center justify-center w-full">
                {getIcon()}
              </div>
            )}
          </div>
          
          {/* Striped overlay */}
          {striped && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          )}
        </div>
        
        {/* Label */}
        {showLabel && (
          <div className="flex items-center justify-between mt-2 text-sm">
            <span className={`font-medium ${getVariantColor()}`}>
              {children || `${Math.round(displayValue)}%`}
            </span>
            <span className="text-gray-500">
              {value} / {max}
            </span>
          </div>
        )}
      </div>
    )
  }
)

AnimatedProgress.displayName = 'AnimatedProgress'

export { AnimatedProgress }
