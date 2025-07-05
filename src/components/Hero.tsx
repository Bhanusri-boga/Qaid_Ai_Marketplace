'use client'

import { Button } from './ui/button'
import { ArrowRight, Sparkles, Zap, TrendingUp, Play } from 'lucide-react'

interface HeroProps {
  onExploreAgents: () => void
  onGetStarted: () => void
}

export function Hero({ onExploreAgents, onGetStarted }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center py-20 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full mb-8 border border-blue-200/50 dark:border-blue-800/50 shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
              Next-Generation AI Automation Platform
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-tight">
            <span className="block mb-2">Unlock the Power of</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              AI Agents
            </span>
            <span className="block">for Your Business</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your ecommerce operations with intelligent AI agents that work 24/7. 
            From customer support to inventory management, automate everything seamlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button 
              onClick={onExploreAgents}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Agents
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={onGetStarted}
              variant="outline" 
              size="lg" 
              className="px-10 py-6 text-lg font-medium rounded-xl border-2 border-gray-300 hover:border-blue-400 bg-white/90 hover:bg-white text-gray-900 hover:text-blue-700 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm dark:bg-gray-800/90 dark:hover:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:border-blue-400"
            >
              <Play className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">8+</div>
              <div className="text-base text-muted-foreground font-medium">Specialized AI Agents</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">40%</div>
              <div className="text-base text-muted-foreground font-medium">Average Efficiency Boost</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-base text-muted-foreground font-medium">Automated Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}