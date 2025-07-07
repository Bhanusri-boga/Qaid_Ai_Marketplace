'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import {
  MessageCircle,
  TrendingUp,
  Package,
  Megaphone,
  FileText,
  BarChart3,
  Users,
  Zap
} from 'lucide-react'

const categories = [
  {
    id: 'customer-support',
    name: 'Customer Support',
    icon: MessageCircle,
    count: 12,
    description: 'AI agents that handle customer inquiries, support tickets, and provide 24/7 assistance.',
    color: 'from-blue-500 to-blue-600',
    agents: ['SupportGenie', 'ChatBot Pro', 'Help Desk AI']
  },
  {
    id: 'sales',
    name: 'Sales',
    icon: TrendingUp,
    count: 8,
    description: 'Boost revenue with pricing optimization, sales forecasting, and conversion enhancement.',
    color: 'from-green-500 to-green-600',
    agents: ['PriceOptimizerAI', 'Sales Predictor', 'Revenue Booster']
  },
  {
    id: 'inventory',
    name: 'Inventory',
    icon: Package,
    count: 6,
    description: 'Smart inventory management, demand forecasting, and stock optimization.',
    color: 'from-purple-500 to-purple-600',
    agents: ['StockSense', 'Inventory Oracle', 'Supply Chain AI']
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: Megaphone,
    count: 10,
    description: 'Content generation, campaign optimization, and audience targeting.',
    color: 'from-pink-500 to-pink-600',
    agents: ['SmartSummarizer', 'Ad Optimizer', 'Content Creator']
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: BarChart3,
    count: 7,
    description: 'Business intelligence, performance monitoring, and predictive analytics.',
    color: 'from-indigo-500 to-indigo-600',
    agents: ['Analytics Pro', 'Insight Engine', 'Data Wizard']
  },
  {
    id: 'content',
    name: 'Content',
    icon: FileText,
    count: 9,
    description: 'Automated content creation, SEO optimization, and product descriptions.',
    color: 'from-orange-500 to-orange-600',
    agents: ['Content AI', 'SEO Writer', 'Description Pro']
  }
]

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <section className="py-20 sm:py-32 bg-[#ECECF04D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ">
            Categories & Use Cases
          </h2>
          <p className="text-lg sm:text-xl text-customGray max-w-3xl mx-auto leading-relaxed">
            Find the perfect AI agents for your specific business needs and workflows.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 ">
        <Button
  onClick={() => setSelectedCategory(null)}
  className={`rounded-full border-2 transition-colors px-4 py-2 flex items-center  !focus:outline-none !focus:ring-0 !focus:border-gray-300
    ${selectedCategory === null 
      ? '!bg-black text-white border-black' 
      : '!bg-white !text-black !border-gray-300 hover:!bg-gray-100'
    }`}
>
  All Categories
  <Badge
    variant="outline"
    className={`ml-2 text-xs px-2 py-0.5 rounded-md
      ${selectedCategory === null 
        ? 'bg-white text-black' 
        : 'bg-gray-200 text-black'
      }`}
  >
    {categories.reduce((sum, cat) => sum + cat.count, 0)}
  </Badge>
</Button>


          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full border-2 transition-colors px-4 py-2 ${selectedCategory === category.id
                ? '!bg-black text-white border-black'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100 '
                }`
    }
            >
              {category.name}
              <Badge
                variant="outline"
                className={`ml-2 text-xs ${selectedCategory === category.id ? 'bg-white text-black' : 'bg-gray-200'
                  }`}
              >
                {category.count}
              </Badge>
            </Button>

          ))}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !px-24 sm:px-8 lg:px-10 ">
          {categories
            .filter(category => selectedCategory === null || category.id === selectedCategory)
            .map((category) => {
              const IconComponent = category.icon
              return (
                <div
                  key={category.id}
                  className="group bg-white bg-card-white rounded-xl p-6 border border-gray-300 hover:border-gray-300 transition-all duration-300 hover:shadow-lg cursor-pointer"
                  onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-customGray">
                        {category.count} agents available
                      </p>
                    </div>
                  </div>

                  <p className="text-customGray text-base mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 ">
                    {category.agents.slice(0, 3).map((agent, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-300">
                        {agent}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center text-sm text-primary font-medium group-hover:text-primary/80 transition-colors">
                    <Zap className="h-4 w-4 mr-1" />
                    Explore {category.name}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}