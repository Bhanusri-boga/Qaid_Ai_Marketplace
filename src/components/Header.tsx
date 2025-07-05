'use client'

import { Moon, Sun, Menu, X, Zap, LayoutDashboard, Store, BookOpen, Phone, Plus, Bell, Wallet, TestTube, User, Code2, Info } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Switch } from './ui/switch'
import { Label } from './ui/label'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useState } from 'react'
import { ViewType, Mode } from '../App'

interface HeaderProps {
  isDark: boolean
  onThemeToggle: () => void
  currentView: ViewType
  onViewChange: (view: ViewType) => void
  currentMode: Mode
  onModeToggle: (mode: Mode) => void
  isLoggedIn: boolean
  onLogin: () => void
  onLogout: () => void
  userWallet?: {
    balance: number
    currency: string
  }
}

export function Header({
  isDark,
  onThemeToggle,
  currentView,
  onViewChange,
  currentMode,
  onModeToggle,
  isLoggedIn,
  onLogin,
  onLogout,
  userWallet
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'landing', label: 'Home', icon: null },
    { id: 'agents', label: 'Agents', icon: Store },
    { id: 'about', label: 'About', icon: Info },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Phone },
  ]

  const unreadNotifications = 3 // Mock unread count

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onViewChange('landing')}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              QAID
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = currentView === item.id

              return (
                <button
        key={item.id}
        onClick={() => onViewChange(item.id as ViewType)}
        className={`flex items-center space-x-2 px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200
          ${isActive
            ? 'bg-[#1A1A2E] text-white'
            : 'bg-white text-black border-2 border-gray-300 shadow-sm hover:bg-gray-100'}
        `}
        style={{
          boxShadow: !isActive ? '0 1px 3px rgba(0, 0, 0, 0.06)' : 'none',
          borderWidth: '1px'
        }}
      >
        {IconComponent && (
          <IconComponent className={`h-4 w-4 ${isActive ? 'text-white' : 'text-black'}`} />
        )}
        <span>{item.label}</span>
      </button>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Mode Toggle */}
            {isLoggedIn && (
              <div className="flex items-center space-x-3 px-3 py-2 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <Label className="text-sm">User</Label>
                </div>
                <Switch
                  checked={currentMode === 'developer'}
                  onCheckedChange={(checked) => onModeToggle(checked ? 'developer' : 'user')}
                />
                <div className="flex items-center space-x-2">
                  <Code2 className="h-4 w-4 text-muted-foreground" />
                  <Label className="text-sm">Developer</Label>
                </div>
                {currentMode === 'developer' && (
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs">
                    BETA
                  </Badge>
                )}
              </div>
            )}

            {isLoggedIn && (
              <>
                {/* Create Agent Button */}
                <Button
                  variant="outline"
                  onClick={() => onViewChange(currentMode === 'developer' ? 'developer-mode' : 'create-agent')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover:from-blue-700 hover:to-purple-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {currentMode === 'developer' ? 'Developer Mode' : 'Create Agent'}
                </Button>

                {/* Wallet Display */}
                {userWallet && (
                  <Button
                    variant="outline"
                    onClick={() => onViewChange('profile')}
                    className="flex items-center space-x-2"
                  >
                    <Wallet className="h-4 w-4" />
                    <span>${userWallet.balance.toFixed(2)}</span>
                  </Button>
                )}

                {/* Notifications */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onViewChange('profile')}
                  className="relative"
                >
                  <Bell className="h-4 w-4" />
                  {unreadNotifications > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-red-500 text-white">
                      {unreadNotifications}
                    </Badge>
                  )}
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          john.doe@example.com
                        </p>
                        <Badge className={`mt-1 w-fit text-xs ${currentMode === 'developer'
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          }`}>
                          {currentMode === 'developer' ? 'Developer Mode' : 'User Mode'}
                        </Badge>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onViewChange('dashboard')}>
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                    {currentMode === 'developer' && (
                      <DropdownMenuItem onClick={() => onViewChange('developer-mode')}>
                        <Code2 className="mr-2 h-4 w-4" />
                        <span>Developer Mode</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={() => onViewChange('testing-lab')}>
                      <TestTube className="mr-2 h-4 w-4" />
                      <span>Testing Lab</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onViewChange('profile')}>
                      <span>Profile & Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onViewChange('upload-agent')}>
                      <span>Upload Agent</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onViewChange('workflow-builder')}>
                      <span>Workflow Builder</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={onLogout}>
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              className="h-9 w-9"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {!isLoggedIn && (
              <Button onClick={onLogin} className="!bg-[#1A1A2E] text-white hover:bg-[#111827] border border-transparent shadow-sm"
>
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? 'default' : 'ghost'}
                    onClick={() => {
                      onViewChange(item.id as ViewType)
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-start space-x-2 w-full"
                  >
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Button>
                )
              })}

              {isLoggedIn && (
                <>
                  {/* Mode Toggle Mobile */}
                  <div className="flex items-center justify-between px-2 py-2">
                    <span className="text-sm font-medium">Mode</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">User</span>
                      <Switch
                        checked={currentMode === 'developer'}
                        onCheckedChange={(checked) => onModeToggle(checked ? 'developer' : 'user')}
                      />
                      <span className="text-xs">Developer</span>
                    </div>
                  </div>

                  <Button
                    variant={currentView === 'dashboard' ? 'default' : 'ghost'}
                    onClick={() => {
                      onViewChange('dashboard')
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-start space-x-2 w-full"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Button>

                  {currentMode === 'developer' && (
                    <Button
                      variant={currentView === 'developer-mode' ? 'default' : 'ghost'}
                      onClick={() => {
                        onViewChange('developer-mode')
                        setMobileMenuOpen(false)
                      }}
                      className="flex items-center justify-start space-x-2 w-full"
                    >
                      <Code2 className="h-4 w-4" />
                      <span>Developer Mode</span>
                    </Button>
                  )}

                  <Button
                    variant={currentView === 'testing-lab' ? 'default' : 'ghost'}
                    onClick={() => {
                      onViewChange('testing-lab')
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-start space-x-2 w-full"
                  >
                    <TestTube className="h-4 w-4" />
                    <span>Testing Lab</span>
                  </Button>

                  <Button
                    onClick={() => {
                      onViewChange(currentMode === 'developer' ? 'developer-mode' : 'create-agent')
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-start space-x-2 w-full bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    <Plus className="h-4 w-4" />
                    <span>{currentMode === 'developer' ? 'Developer Mode' : 'Create Agent'}</span>
                  </Button>

                  {userWallet && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        onViewChange('profile')
                        setMobileMenuOpen(false)
                      }}
                      className="flex items-center justify-start space-x-2 w-full"
                    >
                      <Wallet className="h-4 w-4" />
                      <span>Wallet: ${userWallet.balance.toFixed(2)}</span>
                    </Button>
                  )}
                </>
              )}

              <div className="flex items-center justify-between pt-4 border-t">
                <Button
                  variant="ghost"
                  onClick={onThemeToggle}
                  className="flex items-center space-x-2"
                >
                  {isDark ? (
                    <>
                      <Sun className="h-4 w-4" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </Button>

                {isLoggedIn ? (
                  <Button variant="outline" onClick={() => {
                    onLogout()
                    setMobileMenuOpen(false)
                  }}>
                    Sign Out
                  </Button>
                ) : (
                  <Button onClick={() => {
                    onLogin()
                    setMobileMenuOpen(false)
                  }}>
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
