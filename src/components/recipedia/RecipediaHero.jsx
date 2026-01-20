import React from 'react'
import RecipediaHeader from './RecipediaHeader'
import HeroTextContent from './HeroTextContent'
import HeroVisual from './HeroVisual'
import './RecipediaHero.css'

/**
 * Main Recipedia Hero Section
 * Full-width hero with header, two-column layout (text + visual)
 */
function RecipediaHero() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <RecipediaHeader />

      {/* Hero Content Container */}
      <section className="w-full px-8 py-12 lg:px-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Two-column grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="order-1 lg:order-1">
              <HeroTextContent />
            </div>

            {/* Right Column - Visual Content */}
            <div className="order-2 lg:order-2">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecipediaHero
