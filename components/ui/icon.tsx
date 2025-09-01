import { LucideIcon } from 'lucide-react'

interface IconProps {
  icon: LucideIcon
  size?: number
  className?: string
  color?: string
}

export function Icon({ icon: IconComponent, size = 24, className = '', color }: IconProps) {
  return (
    <IconComponent 
      size={size} 
      className={className}
      color={color}
    />
  )
}

// Export commonly used icons to avoid massive imports
export { 
  ArrowRight, TrendingUp, Users, BarChart3, Target, Zap, Shield, 
  Smartphone, Globe, Clock, Award, CheckCircle, Star, ArrowUpRight, 
  PieChart, DollarSign, Eye, MousePointer, Filter, Search, Heart, 
  Truck, CreditCard, Lock, RefreshCw, TrendingDown, AlertTriangle, 
  Lightbulb, Rocket, Code, Bot, Sparkles, Layers, Palette, Monitor,
  Mail, ShoppingCart, Phone, MessageSquare, Brain, Settings
} from 'lucide-react'
