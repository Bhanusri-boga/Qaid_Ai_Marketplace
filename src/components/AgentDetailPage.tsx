'use client'

import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Separator } from './ui/separator'
import { 
  Star, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Shield,
  ArrowLeft,
  Play,
  Download,
  Share,
  Heart,
  ExternalLink
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface Agent {
  id: string
  name: string
  description: string
  category: string
  icon: React.ComponentType<any>
  price: string
  rating: number
  reviews: number
  tags?: string[]
}

interface AgentDetailPageProps {
  agent: Agent | null
  onBack: () => void
  onActivate: () => void
}

const sampleReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    date: "2 days ago",
    content: "Absolutely game-changing! This agent has transformed how we handle our product descriptions. The quality is consistently excellent."
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    date: "1 week ago",
    content: "Easy to set up and integrate. The results speak for themselves - our conversion rates have improved significantly."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    date: "2 weeks ago",
    content: "Great AI agent with impressive capabilities. Would love to see more customization options in future updates."
  }
]

const integrations = [
  { name: 'Shopify', logo: '🛍️', status: 'Available' },
  { name: 'WooCommerce', logo: '🛒', status: 'Available' },
  { name: 'Magento', logo: '🏪', status: 'Available' },
  { name: 'BigCommerce', logo: '🏬', status: 'Coming Soon' },
  { name: 'Salesforce', logo: '☁️', status: 'Available' },
  { name: 'HubSpot', logo: '🎯', status: 'Available' }
]

export function AgentDetailPage({ agent, onBack, onActivate }: AgentDetailPageProps) {
  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Agent not found</h2>
          <Button onClick={onBack}>Go Back</Button>
        </div>
      </div>
    )
  }

  const IconComponent = agent.icon

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 hover:bg-muted/50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Agents
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Agent Header */}
            <div className="flex items-start space-x-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0">
                <IconComponent className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold">{agent.name}</h1>
                  <Badge variant={agent.price === 'Free' ? 'secondary' : 'default'}>
                    {agent.price}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{agent.rating}</span>
                    <span className="text-muted-foreground">({agent.reviews} reviews)</span>
                  </div>
                  <Badge variant="outline">{agent.category}</Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button onClick={onActivate} size="lg" className="px-8">
                <Zap className="h-4 w-4 mr-2" />
                Activate Agent
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="h-4 w-4 mr-2" />
                Try Demo
              </Button>
              <Button variant="outline" size="lg">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="demo">Demo</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Sample Output */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-blue-600" />
                      Sample Output
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="italic text-foreground">
                        "These sleek Wireless Earbuds ZX100 deliver crystal-clear 8 hours of immersive, noise-canceling audio with premium comfort design, perfect for both workouts and daily commutes."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* How it Works */}
                <Card>
                  <CardHeader>
                    <CardTitle>How it Works</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">1</div>
                        <div>
                          <h4 className="font-medium">Connect Your Data</h4>
                          <p className="text-sm text-muted-foreground">Integrate with your existing ecommerce platform or upload product data</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">2</div>
                        <div>
                          <h4 className="font-medium">AI Processing</h4>
                          <p className="text-sm text-muted-foreground">Advanced AI analyzes your products and generates optimized content</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">3</div>
                        <div>
                          <h4 className="font-medium">Automated Results</h4>
                          <p className="text-sm text-muted-foreground">Watch as the agent continuously improves your product listings</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'SEO Optimization',
                        'Multi-language Support',
                        'Bulk Processing',
                        'Real-time Updates',
                        'Custom Templates',
                        'Performance Analytics'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="demo" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Demo</CardTitle>
                    <CardDescription>
                      Try the agent with sample data to see how it works
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/30 rounded-lg p-8 text-center">
                      <Play className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-medium mb-2">Demo Coming Soon</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Interactive demo will be available shortly
                      </p>
                      <Button>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Request Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="integrations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Supported Integrations</CardTitle>
                    <CardDescription>
                      Connect with your favorite tools and platforms
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {integrations.map((integration, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{integration.logo}</span>
                            <span className="font-medium">{integration.name}</span>
                          </div>
                          <Badge variant={integration.status === 'Available' ? 'default' : 'secondary'}>
                            {integration.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="space-y-4">
                  {sampleReviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={review.avatar} alt={review.name} />
                            <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-medium">{review.name}</span>
                              <div className="flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <p className="text-muted-foreground">{review.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Setup Time</span>
                  </div>
                  <span className="text-sm font-medium">5 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Active Users</span>
                  </div>
                  <span className="text-sm font-medium">{agent.reviews.toLocaleString()}+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Security</span>
                  </div>
                  <span className="text-sm font-medium">Enterprise</span>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border">
                  <p className="text-sm text-muted-foreground mb-1">Starting at</p>
                  <p className="text-3xl font-bold">{agent.price}</p>
                  {agent.price !== 'Free' && (
                    <p className="text-xs text-muted-foreground">7-day free trial included</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Documentation
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}