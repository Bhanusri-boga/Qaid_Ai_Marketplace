'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Textarea } from './ui/textarea'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'
import { 
  ArrowLeft, 
  Send, 
  Wand2, 
  Play, 
  Rocket, 
  ShoppingBag,
  MessageCircle,
  Bot,
  Sparkles,
  Zap
} from 'lucide-react'

interface AgentPreview {
  name: string
  description: string
  capabilities: string[]
  category: string
  estimatedCost: string
}

interface CreateAgentPageProps {
  onBack: () => void
  onDeploy: (agent: AgentPreview) => void
}

export function CreateAgentPage({ onBack, onDeploy }: CreateAgentPageProps) {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [agentPreview, setAgentPreview] = useState<AgentPreview | null>(null)
  const [chatHistory, setChatHistory] = useState<Array<{
    type: 'user' | 'assistant'
    content: string
    timestamp: Date
  }>>([
    {
      type: 'assistant',
      content: "Hi! I'm here to help you create your custom AI agent. Describe what you want your agent to do, and I'll generate it for you. For example:\n\n• \"Create an agent that writes product reviews for electronics\"\n• \"I need an agent that manages customer support tickets\"\n• \"Build an agent that analyzes social media sentiment\"",
      timestamp: new Date()
    }
  ])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    // Add user message to chat
    const userMessage = {
      type: 'user' as const,
      content: prompt,
      timestamp: new Date()
    }
    setChatHistory(prev => [...prev, userMessage])
    setPrompt('')
    setIsGenerating(true)

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Generate agent preview based on prompt
    const preview = generateAgentPreview(userMessage.content)
    setAgentPreview(preview)

    // Add assistant response
    const assistantMessage = {
      type: 'assistant' as const,
      content: `Great! I've created "${preview.name}" based on your requirements. This agent will ${preview.description.toLowerCase()}. You can refine the agent, try a demo, or deploy it to your workspace.`,
      timestamp: new Date()
    }
    setChatHistory(prev => [...prev, assistantMessage])
    setIsGenerating(false)
  }

  const generateAgentPreview = (userPrompt: string): AgentPreview => {
    // Simple keyword-based agent generation for demo
    const lowercasePrompt = userPrompt.toLowerCase()
    
    if (lowercasePrompt.includes('review') || lowercasePrompt.includes('product')) {
      return {
        name: 'ReviewCraft Pro',
        description: 'Generates detailed, authentic product reviews with SEO optimization and sentiment analysis',
        capabilities: ['Product Analysis', 'Review Generation', 'SEO Optimization', 'Sentiment Analysis'],
        category: 'Content Generation',
        estimatedCost: '$0.02/review'
      }
    } else if (lowercasePrompt.includes('support') || lowercasePrompt.includes('customer')) {
      return {
        name: 'SupportMaster AI',
        description: 'Handles customer inquiries, ticket routing, and provides intelligent responses 24/7',
        capabilities: ['Ticket Management', 'Auto-Response', 'Sentiment Detection', 'Escalation Logic'],
        category: 'Customer Support',
        estimatedCost: '$0.05/interaction'
      }
    } else if (lowercasePrompt.includes('social') || lowercasePrompt.includes('sentiment')) {
      return {
        name: 'SocialSense Analytics',
        description: 'Monitors social media mentions and analyzes sentiment across multiple platforms',
        capabilities: ['Social Monitoring', 'Sentiment Analysis', 'Trend Detection', 'Report Generation'],
        category: 'Analytics',
        estimatedCost: '$0.01/mention'
      }
    } else {
      return {
        name: 'CustomFlow Agent',
        description: 'A versatile AI agent tailored to your specific workflow requirements',
        capabilities: ['Custom Logic', 'Data Processing', 'API Integration', 'Workflow Automation'],
        category: 'General Purpose',
        estimatedCost: '$0.03/operation'
      }
    }
  }

  const handleRefine = () => {
    const refinePrompt = `Please refine the agent "${agentPreview?.name}" to:`
    setPrompt(refinePrompt)
  }

  const handleDeploy = () => {
    if (agentPreview) {
      onDeploy(agentPreview)
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Create AI Agent</h1>
            <p className="text-muted-foreground">Describe your agent in natural language and watch it come to life</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Interface */}
          <div className="space-y-6">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                  Agent Creation Assistant
                </CardTitle>
                <CardDescription>
                  Describe what you want your AI agent to do
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {chatHistory.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground ml-4'
                            : 'bg-muted mr-4'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isGenerating && (
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg mr-4">
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                          <span className="text-sm">Generating your agent...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Textarea
                    placeholder="Describe your AI agent..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="flex-1 min-h-[60px] resize-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSubmit(e)
                      }
                    }}
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={!prompt.trim() || isGenerating}
                    className="px-6"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Agent Preview */}
          <div className="space-y-6">
            {agentPreview ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bot className="h-5 w-5 mr-2 text-purple-600" />
                    Agent Preview
                  </CardTitle>
                  <CardDescription>
                    Review your generated agent before deployment
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Agent Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg">{agentPreview.name}</h3>
                      <p className="text-muted-foreground">{agentPreview.description}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Badge>{agentPreview.category}</Badge>
                      <Badge variant="outline">{agentPreview.estimatedCost}</Badge>
                    </div>
                  </div>

                  <Separator />

                  {/* Capabilities */}
                  <div>
                    <h4 className="font-medium mb-3">Capabilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {agentPreview.capabilities.map((capability, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <Sparkles className="h-3 w-3 text-blue-500" />
                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Sample Output */}
                  <div>
                    <h4 className="font-medium mb-3">Sample Output</h4>
                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-sm italic">
                        {agentPreview.category === 'Content Generation' 
                          ? `"The Wireless Earbuds ZX100 deliver exceptional audio quality with active noise cancellation and 8-hour battery life. Perfect for commuters and fitness enthusiasts seeking premium sound in a compact design."`
                          : agentPreview.category === 'Customer Support'
                          ? `"Thank you for contacting us about the ZX100 earbuds. I can help you with setup, troubleshooting, or any questions about features. What specific assistance do you need today?"`
                          : `"Positive sentiment detected: 85% satisfaction rate. Key mentions: 'great sound quality', 'comfortable fit', 'excellent battery life'. Trending hashtags: #ZX100 #WirelessAudio"`
                        }
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3">
                    <Button onClick={handleRefine} variant="outline" className="w-full">
                      <Wand2 className="h-4 w-4 mr-2" />
                      Refine Agent
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Try Demo
                    </Button>
                    <Button className="w-full" onClick={handleDeploy}>
                      <Rocket className="h-4 w-4 mr-2" />
                      Deploy Agent
                    </Button>
                    <Button variant="outline" className="w-full">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Buy API Access
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-[600px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">No Agent Generated Yet</h3>
                    <p className="text-sm text-muted-foreground">
                      Start describing your agent in the chat to see a preview here
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}