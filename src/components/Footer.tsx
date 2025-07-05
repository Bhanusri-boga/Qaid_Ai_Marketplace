'use client'

import { Zap, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

interface FooterProps {
  onViewChange: (view: string) => void
}

export function Footer({ onViewChange }: FooterProps) {
  const handleNavigation = (page: string) => {
    onViewChange(page)
  }

  const footerLinks = {
    product: [
      { label: 'AI Agents', page: 'agents' },
      { label: 'Pricing', page: 'pricing' },
      { label: 'Integrations', page: 'integrations' },
      { label: 'API Documentation', page: 'api-docs' },
      { label: 'Changelog', page: 'changelog' }
    ],
    company: [
      { label: 'About Us', page: 'about' },
      { label: 'Careers', page: 'careers' },
      { label: 'Blog', page: 'blog' },
      { label: 'Press Kit', page: 'press' },
      { label: 'Contact', page: 'contact' }
    ],
    resources: [
      { label: 'Help Center', page: 'help' },
      { label: 'Community', page: 'community' },
      { label: 'Tutorials', page: 'tutorials' },
      { label: 'Case Studies', page: 'case-studies' },
      { label: 'Webinars', page: 'webinars' }
    ],
    legal: [
      { label: 'Privacy Policy', page: 'privacy' },
      { label: 'Terms of Service', page: 'terms' },
      { label: 'Cookie Policy', page: 'cookies' },
      { label: 'GDPR', page: 'gdpr' },
      { label: 'Security', page: 'security' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/qaid_ai', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/qaid-ai', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/qaid-ai', label: 'GitHub' }
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div 
                className="flex items-center space-x-2 mb-4 cursor-pointer"
                onClick={() => handleNavigation('home')}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  QAID
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering businesses with intelligent AI agents that automate workflows, 
                boost productivity, and drive growth. Transform your operations today.
              </p>
              
              {/* Contact info */}
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <div 
                  className="flex items-center space-x-2 cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => handleNavigation('contact')}
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@qaid.ai</span>
                </div>
                <div 
                  className="flex items-center space-x-2 cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => handleNavigation('contact')}
                >
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div 
                  className="flex items-center space-x-2 cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => handleNavigation('contact')}
                >
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 hover:bg-primary/10 hover:text-primary transition-colors"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <IconComponent className="h-4 w-4" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Links sections */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:col-span-3">
              <div>
                <h3 className="font-medium mb-4">Product</h3>
                <ul className="space-y-2">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <button 
                        onClick={() => handleNavigation(link.page)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <button 
                        onClick={() => handleNavigation(link.page)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <button 
                        onClick={() => handleNavigation(link.page)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="font-medium mb-4">Legal</h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <button 
                        onClick={() => handleNavigation(link.page)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 QAID. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Built with ❤️ for the future of AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}