'use client'

import { Hero } from './Hero'
import { HowItWorks } from './HowItWorks'
import { FeaturedAgents } from './FeaturedAgents'
import { Categories } from './Categories'
import { Testimonials } from './Testimonials'
import { CallToAction } from './CallToAction'

interface LandingPageProps {
  onExploreAgents: () => void
  onGetStarted: () => void
  onAgentSelect: (agent: any) => void
  onCreateAgent: () => void
}

export function LandingPage({ onExploreAgents, onGetStarted, onAgentSelect, onCreateAgent }: LandingPageProps) {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section - Full viewport with consistent spacing */}
      <Hero onExploreAgents={onExploreAgents} onGetStarted={onGetStarted} />
      
      {/* How It Works - Alternating background with proper spacing */}
      <HowItWorks />
      
      {/* Featured Agents - White background for contrast */}
      <FeaturedAgents onAgentSelect={onAgentSelect} onExploreAgents={onExploreAgents} />
      
      {/* Categories - Muted background for visual separation */}
      <Categories />
      
      {/* Testimonials - White background for readability */}
      <Testimonials />
      
      {/* Call to Action - Gradient background for final conversion */}
      <CallToAction onGetStarted={onGetStarted} />
    </div>
  )
}