import React from 'react'
import Button from './Button'

/**
 * Hero section text content (left column)
 * Contains heading, description, and CTA button
 */
function HeroTextContent() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-recipedia-dark leading-tight">
        Cooking Made Fun and Easy: Unleash Your Inner Chef
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-recipedia-gray leading-relaxed">
        Discover more than{' '}
        <span className="font-semibold text-recipedia-orange">
          10,000 recipes
        </span>{' '}
        in your hand with the best recipe. Help you to find the easiest way to cook.
      </p>

      {/* CTA Button */}
      <div className="mt-4 flex items-center gap-4">
        <Button variant="primary" size="medium">
          Explore Recipes
        </Button>
        
        {/* Decorative Garlic Icon */}
        <div className="hidden sm:block text-5xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
          🧄
        </div>
      </div>
    </div>
  )
}

export default HeroTextContent
