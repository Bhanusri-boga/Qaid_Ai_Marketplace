'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

import { 
  ShoppingCart, 
  DollarSign, 
  Package, 
  Search, 
  MessageCircle, 
  Star, 
  TrendingUp, 
  Tag,
  Zap,
  Filter,
  SortAsc
} from 'lucide-react'

interface Agent {
  id: string
  name: string
  description: string
  category: string
  industry: string
  icon: React.ComponentType<any>
  price: string
  rating: number
  reviews: number
  isNew?: boolean
  isPremium?: boolean
  tags: string[]
}

const allAgents: Agent[] = [
  {
    id: '1',
    name: 'SmartSummarizer',
    description: 'AI-powered product descriptions that convert browsers into buyers with compelling, SEO-optimized content.',
    category: 'Content Generation',
    industry: 'E-commerce',
    icon: ShoppingCart,
    price: 'Free',
    rating: 4.8,
    reviews: 1247,
    isNew: false,
    tags: ['SEO', 'Content', 'Product Descriptions']
  },
  {
    id: '2',
    name: 'PriceOptimizerAI',
    description: 'Smart pricing optimization that adjusts rates in real-time based on market conditions and competitor analysis.',
    category: 'Sales Optimization',
    industry: 'Retail',
    icon: DollarSign,
    price: '$29/mo',
    rating: 4.9,
    reviews: 892,
    isPremium: true,
    tags: ['Pricing', 'Dynamic', 'Competitive Analysis']
  },
  {
    id: '3',
    name: 'StockSense',
    description: 'Predictive inventory control that prevents stockouts and reduces overstock with intelligent demand forecasting.',
    category: 'Inventory Management',
    industry: 'E-commerce',
    icon: Package,
    price: '$39/mo',
    rating: 4.7,
    reviews: 654,
    tags: ['Inventory', 'Forecasting', 'Supply Chain']
  },
  {
    id: '4',
    name: 'VisionCartBot',
    description: 'Revolutionary image-based product discovery that lets customers find items using photos instead of keywords.',
    category: 'Customer Experience',
    industry: 'Fashion',
    icon: Search,
    price: '$49/mo',
    rating: 4.6,
    reviews: 423,
    isNew: true,
    tags: ['Visual Search', 'Image Recognition', 'Mobile']
  },
  {
    id: '5',
    name: 'SupportGenie',
    description: '24/7 intelligent customer service that handles inquiries, processes returns, and escalates complex issues.',
    category: 'Customer Support',
    industry: 'General',
    icon: MessageCircle,
    price: '$19/mo',
    rating: 4.8,
    reviews: 1156,
    tags: ['Chat', '24/7', 'Support Automation']
  },
  {
    id: '6',
    name: 'ReviewSentinel',
    description: 'Advanced sentiment analysis that monitors customer feedback and provides actionable insights.',
    category: 'Analytics',
    industry: 'E-commerce',
    icon: Star,
    price: '$24/mo',
    rating: 4.5,
    reviews: 338,
    tags: ['Sentiment Analysis', 'Reviews', 'Insights']
  },
  {
    id: '7',
    name: 'SalesOracle',
    description: 'Predictive analytics that accurately forecasts sales trends, seasonal patterns, and revenue projections.',
    category: 'Sales Optimization',
    industry: 'Retail',
    icon: TrendingUp,
    price: '$59/mo',
    rating: 4.9,
    reviews: 267,
    isPremium: true,
    tags: ['Forecasting', 'Analytics', 'Revenue']
  },
  {
    id: '8',
    name: 'TagMaster',
    description: 'Automated product categorization and tagging system that improves searchability and organization.',
    category: 'Content Generation',
    industry: 'E-commerce',
    icon: Tag,
    price: '$14/mo',
    rating: 4.4,
    reviews: 512,
    tags: ['Tagging', 'Categorization', 'Organization']
  }
]

interface AgentListingPageProps {
  onAgentSelect: (agent: Agent) => void
  isLoggedIn: boolean
  onCreateWorkflow: () => void
}

export function AgentListingPage({ onAgentSelect, isLoggedIn, onCreateWorkflow }: AgentListingPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')
  const [priceFilter, setPriceFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('rating')

  const categories = ['all', ...new Set(allAgents.map(agent => agent.category))]
  const industries = ['all', ...new Set(allAgents.map(agent => agent.industry))]

  const filteredAgents = allAgents
    .filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory
      const matchesIndustry = selectedIndustry === 'all' || agent.industry === selectedIndustry
      const matchesPrice = priceFilter === 'all' || 
                          (priceFilter === 'free' && agent.price === 'Free') ||
                          (priceFilter === 'premium' && agent.price !== 'Free')
      
      return matchesSearch && matchesCategory && matchesIndustry && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'reviews':
          return b.reviews - a.reviews
        case 'name':
          return a.name.localeCompare(b.name)
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen">
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              AI Agent Marketplace
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover and deploy specialized AI agents to automate your business workflows.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-lg p-6 mb-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search agents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Industry Filter */}
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Filter */}
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {filteredAgents.length} of {allAgents.length} agents
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">View:</span>
              <Button variant="outline" size="sm">Grid</Button>
              <Button variant="ghost" size="sm">List</Button>
            </div>
          </div>

          {/* Agent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAgents.map((agent) => {
              const IconComponent = agent.icon
              return (
                <Card 
                  key={agent.id} 
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-primary/20 bg-card relative"
                  onClick={() => onAgentSelect(agent)}
                >
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                    {agent.isNew && (
                      <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                        New
                      </Badge>
                    )}
                    {agent.isPremium && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        Premium
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant={agent.price === 'Free' ? 'secondary' : 'default'}>
                        {agent.price}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {agent.name}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{agent.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{agent.reviews} reviews</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <CardDescription className="mb-4 line-clamp-3">
                      {agent.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {agent.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {agent.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{agent.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {agent.category} • {agent.industry}
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      variant="outline"
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          {/* Empty state */}
          {filteredAgents.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No agents found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedIndustry('all')
                setPriceFilter('all')
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      

    </div>
  )
}