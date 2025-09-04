import { Button } from '../../../components/ui/button'
import { ArrowRight, Code, Database, Cloud, Shield, Zap, Users, BarChart3, FileText, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions built specifically for your business needs and workflows."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Robust database architecture that scales with your business and ensures data integrity."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud-based applications that grow with your business and reduce infrastructure costs."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security built into every application to protect your data and users."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "High-performance applications that handle your workload efficiently and provide fast user experiences."
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Intuitive interfaces designed for your users, ensuring high adoption rates and satisfaction."
  }
]

const process = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "Deep dive into your business needs, workflows, and technical requirements.",
    duration: "1-2 weeks"
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "Design scalable, secure architecture that meets your current and future needs.",
    duration: "1-2 weeks"
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with continuous testing to ensure quality and functionality.",
    duration: "4-12 weeks"
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Smooth deployment and ongoing support to ensure your software runs perfectly.",
    duration: "1 week + ongoing"
  }
]

const results = [
  { metric: "Development Speed", value: "40% Faster", description: "Than industry average" },
  { metric: "Bug Rate", value: "60% Lower", description: "Than traditional development" },
  { metric: "User Adoption", value: "85%+", description: "User satisfaction rate" },
  { metric: "Performance", value: "3x Faster", description: "Than legacy systems" }
]

const technologies = [
  "Frontend", "Backend", "Database", "Cloud",
  "Mobile", "API Development", "DevOps", "Security"
]

const techStack = {
  "Frontend": ["React", "Vue.js", "Angular", "Next.js"],
  "Backend": ["Node.js", "Python", "Java", ".NET"],
  "Database": ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  "Cloud": ["AWS", "Azure", "Google Cloud", "Vercel"]
}

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Custom{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Software Development
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              We build custom software solutions that streamline your operations, 
              improve efficiency, and give you a competitive advantage. From web applications 
              to enterprise systems, we deliver software that works exactly how you need it to.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/case-studies">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive Software Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              From concept to deployment, we provide end-to-end software development 
              services that transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl bg-white p-8 shadow-soft ring-1 ring-secondary-900/5 hover-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-200 transition-colors mb-6">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Development Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A proven methodology that ensures your software is built right, on time, 
              and delivers the results you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 mb-3">
                  {step.description}
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Results That Drive Business Growth
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Our software solutions consistently deliver measurable improvements 
              in efficiency, productivity, and business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-secondary-900 mb-1">{result.metric}</div>
                <div className="text-sm text-secondary-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Modern Technology Stack
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We use cutting-edge technologies and frameworks to build scalable, 
              secure, and future-proof software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category} className="bg-white p-6 rounded-2xl shadow-soft ring-1 ring-secondary-900/5">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4 text-center">
                  {category}
                </h3>
                <div className="space-y-2">
                  {techs.map((tech) => (
                    <div key={tech} className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom Software Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 mb-6">
                Why Custom Software Beats Off-the-Shelf
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                While off-the-shelf solutions might seem cost-effective initially, 
                custom software provides long-term value that far exceeds the investment. 
                Here's why custom development is the smart choice for growing businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Perfect Fit</div>
                    <div className="text-sm text-secondary-600">Built specifically for your business processes and needs</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Scalability</div>
                    <div className="text-sm text-secondary-600">Grows with your business without limitations</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Competitive Advantage</div>
                    <div className="text-sm text-secondary-600">Unique solutions that set you apart from competitors</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-primary-600 mb-4">100+</div>
              <div className="text-xl text-primary-700 mb-2">Custom Applications Built</div>
              <div className="text-lg text-primary-600">For businesses like yours</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Custom Software?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss your software needs and create a solution that transforms 
            your business operations and drives growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
