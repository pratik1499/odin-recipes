import React from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Recipedia Header with logo, navigation, and action icons
 */
function RecipediaHeader() {
  const { pathname } = useLocation()
  
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Recipe', href: '/recipe' },
    { label: 'Community', href: '/community' },
    { label: 'About Us', href: '/about' }
  ]

  return (
    <header className="w-full py-6 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🍜</span>
          <span className="text-2xl font-bold text-recipedia-dark">
            Recipedia
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.href === pathname
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  isActive
                    ? 'text-recipedia-dark'
                    : 'text-recipedia-gray hover:text-recipedia-dark'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <svg className="w-6 h-6 text-recipedia-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* User/Profile Icon */}
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="User profile"
          >
            <svg className="w-6 h-6 text-recipedia-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-recipedia-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default RecipediaHeader
