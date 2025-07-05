import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LandingPage } from '@/components/LandingPage'
import { AgentListingPage } from '@/components/AgentListingPage'
import { AgentDetailPage } from '@/components/AgentDetailPage'
import { Dashboard } from '@/components/Dashboard'
import { BlogPage } from '@/components/BlogPage'
import { BlogPostPage } from '@/components/BlogPostPage'
import { ContactPage } from '@/components/ContactPage'
import { AboutPage } from '@/components/AboutPage'
import { PricingPage } from '@/components/PricingPage'
import { IntegrationsPage } from '@/components/IntegrationsPage'
import { APIDocsPage } from '@/components/APIDocsPage'
import { DocumentationPage } from '@/components/DocumentationPage'
import { CommunityForumPage } from '@/components/CommunityForumPage'
import { GitHubIssuesPage } from '@/components/GitHubIssuesPage'
import { PremiumSupportPage } from '@/components/PremiumSupportPage'
import { ChangelogPage } from '@/components/ChangelogPage'
import { CareersPage } from '@/components/CareersPage'
import { JobApplicationPage } from '@/components/JobApplicationPage'
import { PressKitPage } from '@/components/PressKitPage'
import { HelpCenterPage } from '@/components/HelpCenterPage'
import { CommunityPage } from '@/components/CommunityPage'
import { TutorialsPage } from '@/components/TutorialsPage'
import { CaseStudiesPage } from '@/components/CaseStudiesPage'
import { WebinarsPage } from '@/components/WebinarsPage'
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage'
import { TermsOfServicePage } from '@/components/TermsOfServicePage'
import { CookiePolicyPage } from '@/components/CookiePolicyPage'
import { GDPRPage } from '@/components/GDPRPage'
import { SecurityPage } from '@/components/SecurityPage'
import { CreateAgentPage } from '@/components/CreateAgentPage'
import { WorkflowBuilder } from '@/components/WorkflowBuilder'
import { UploadAgentPage } from '@/components/UploadAgentPage'
import { ProfilePage } from '@/components/ProfilePage'
import { TestingLabPage } from '@/components/TestingLabPage'
import { DeveloperModeLayout } from '@/components/DeveloperModeLayout'
import { AuthModal } from '@/components/AuthModal'

export type ViewType = 'landing' | 'home' | 'agents' | 'agent-detail' | 'dashboard' | 'blog' | 'blog-post' | 'contact' | 'about' | 'create-agent' | 'workflow-builder' | 'upload-agent' | 'profile' | 'testing-lab' | 'developer-mode' | 'pricing' | 'integrations' | 'api-docs' | 'documentation' | 'community-forum' | 'github-issues' | 'premium-support' | 'changelog' | 'careers' | 'apply' | 'press' | 'help' | 'community' | 'tutorials' | 'case-studies' | 'webinars' | 'privacy' | 'terms' | 'cookies' | 'gdpr' | 'security'

export type Mode = 'user' | 'developer'

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const [currentView, setCurrentView] = useState<ViewType>('landing')
  const [currentMode, setCurrentMode] = useState<Mode>('user')
  const [selectedAgent, setSelectedAgent] = useState<any>(null)
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [userWallet, setUserWallet] = useState({
    balance: 156.42,
    currency: 'USD'
  })

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }

    // Check for saved mode preference
    const savedMode = localStorage.getItem('qaid-mode') as Mode
    if (savedMode && (savedMode === 'user' || savedMode === 'developer')) {
      setCurrentMode(savedMode)
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleMode = (mode: Mode) => {
    setCurrentMode(mode)
    localStorage.setItem('qaid-mode', mode)
    
    // Switch to appropriate view based on mode
    if (mode === 'developer' && isLoggedIn) {
      setCurrentView('developer-mode')
    } else if (mode === 'user' && currentView === 'developer-mode') {
      setCurrentView('dashboard')
    }
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowAuthModal(false)
    
    // Navigate to appropriate view based on current mode
    if (currentMode === 'developer') {
      setCurrentView('developer-mode')
    } else {
      setCurrentView('dashboard')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentView('landing')
  }

  const handleAgentSelect = (agent: any) => {
    setSelectedAgent(agent)
    setCurrentView('agent-detail')
  }

  const handleBlogPostSelect = (post: any) => {
    setSelectedBlogPost(post)
    setCurrentView('blog-post')
  }

  const showAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  // Placeholder component for pages that don't have dedicated components yet
  const PlaceholderPage = ({ title, description }: { title: string; description: string }) => (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {description}
          </p>
          <div className="bg-muted/30 rounded-lg p-8 mb-8">
            <p className="text-muted-foreground">
              This page is coming soon. We're working hard to bring you amazing content and features.
            </p>
          </div>
          <button
            onClick={() => setCurrentView('landing')}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
      case 'home':
        return (
          <LandingPage 
            onExploreAgents={() => setCurrentView('agents')}
            onGetStarted={() => isLoggedIn ? setCurrentView('dashboard') : showAuth('signup')}
            onAgentSelect={handleAgentSelect}
            onCreateAgent={() => isLoggedIn ? setCurrentView('create-agent') : showAuth('signup')}
          />
        )
      case 'agents':
        return (
          <AgentListingPage 
            onAgentSelect={handleAgentSelect}
            isLoggedIn={isLoggedIn}
            onCreateWorkflow={() => setCurrentView('workflow-builder')}
          />
        )
      case 'agent-detail':
        return (
          <AgentDetailPage 
            agent={selectedAgent} 
            onBack={() => setCurrentView('agents')}
            onActivate={() => {
              if (isLoggedIn) {
                setCurrentView('dashboard')
              } else {
                showAuth('signup')
              }
            }}
          />
        )
      case 'dashboard':
        return (
          <Dashboard 
            userWallet={userWallet}
            onCreateAgent={() => setCurrentView('create-agent')}
            onViewWorkflows={() => setCurrentView('workflow-builder')}
            onUploadAgent={() => setCurrentView('upload-agent')}
            onViewProfile={() => setCurrentView('profile')}
            onTestingLab={() => setCurrentView('testing-lab')}
          />
        )
      case 'developer-mode':
        return (
          <DeveloperModeLayout 
            onBack={() => setCurrentView('dashboard')}
            userWallet={userWallet}
          />
        )
      case 'blog':
        return <BlogPage onPostSelect={handleBlogPostSelect} />
      case 'blog-post':
        return (
          <BlogPostPage 
            post={selectedBlogPost} 
            onBack={() => setCurrentView('blog')} 
          />
        )
      case 'contact':
        return <ContactPage />
      case 'about':
        return (
          <AboutPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'create-agent':
        return (
          <CreateAgentPage 
            onBack={() => setCurrentView('dashboard')}
            onDeploy={(agent: any) => {
              // Add agent to user's collection
              setCurrentView('dashboard')
            }}
          />
        )
      case 'workflow-builder':
        return (
          <WorkflowBuilder 
            onBack={() => setCurrentView('dashboard')}
            selectedAgent={selectedAgent}
          />
        )
      case 'upload-agent':
        return (
          <UploadAgentPage 
            onBack={() => setCurrentView('dashboard')}
            onUploadComplete={() => setCurrentView('profile')}
          />
        )
      case 'profile':
        return (
          <ProfilePage 
            onBack={() => setCurrentView('dashboard')}
            userWallet={userWallet}
            onWalletUpdate={setUserWallet}
          />
        )
      case 'testing-lab':
        return (
          <TestingLabPage 
            onBack={() => setCurrentView('dashboard')}
            selectedAgent={selectedAgent}
            onSelectAgent={setSelectedAgent}
          />
        )
      // Pricing page
      case 'pricing':
        return (
          <PricingPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'integrations':
        return (
          <IntegrationsPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'api-docs':
        return (
          <APIDocsPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'documentation':
        return (
          <DocumentationPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'community-forum':
        return (
          <CommunityForumPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'github-issues':
        return (
          <GitHubIssuesPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'premium-support':
        return (
          <PremiumSupportPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'changelog':
        return (
          <ChangelogPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'careers':
        return (
          <CareersPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'apply':
        return (
          <JobApplicationPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'press':
        return (
          <PressKitPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'help':
        return (
          <HelpCenterPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'community':
        return (
          <CommunityPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'tutorials':
        return (
          <TutorialsPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'case-studies':
        return (
          <CaseStudiesPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'webinars':
        return (
          <WebinarsPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'privacy':
        return (
          <PrivacyPolicyPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'terms':
        return (
          <TermsOfServicePage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'cookies':
        return (
          <CookiePolicyPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'gdpr':
        return (
          <GDPRPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      case 'security':
        return (
          <SecurityPage 
            onViewChange={setCurrentView}
            isLoggedIn={isLoggedIn}
            onShowAuth={showAuth}
          />
        )
      default:
        return (
          <LandingPage 
            onExploreAgents={() => setCurrentView('agents')}
            onGetStarted={() => isLoggedIn ? setCurrentView('dashboard') : showAuth('signup')}
            onAgentSelect={handleAgentSelect}
            onCreateAgent={() => isLoggedIn ? setCurrentView('create-agent') : showAuth('signup')}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        isDark={isDark}
        onThemeToggle={toggleTheme}
        currentView={currentView}
        onViewChange={setCurrentView}
        currentMode={currentMode}
        onModeToggle={toggleMode}
        isLoggedIn={isLoggedIn}
        onLogin={() => showAuth('login')}
        onLogout={handleLogout}
        userWallet={userWallet}
      />
      
      {renderCurrentView()}

      {/* Footer - only show on non-dashboard and non-developer-mode views */}
      {!['dashboard', 'developer-mode', 'create-agent', 'workflow-builder', 'upload-agent', 'profile', 'testing-lab'].includes(currentView) && (
        <Footer onViewChange={setCurrentView} />
      )}

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
        onLogin={handleLogin}
      />
    </div>
  )
}