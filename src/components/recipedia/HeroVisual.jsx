import React from 'react'
import TestimonialCard from './TestimonialCard'
import DecorationIcon from './DecorationIcon'

/**
 * Hero visual section (right column)
 * Contains the main food image with floating decorations and testimonials
 */
function HeroVisual() {
  // Placeholder user avatars (using UI Avatars service for demo)
  const sarahAvatar = 'https://ui-avatars.com/api/?name=Sarah+M&background=F59E0B&color=fff&size=128'
  const farellinAvatar = 'https://ui-avatars.com/api/?name=Farellin+J&background=6B7280&color=fff&size=128'

  // Testimonial data
  const testimonials = [
    {
      text: "The recipes here are not only delicious but also easy to follow.",
      userName: "Sarah M.",
      userAvatar: sarahAvatar,
      rating: 5
    },
    {
      text: "I've discovered a treasure trove of meatless recipes that have made my meals.",
      userName: "Farellin J.",
      userAvatar: farellinAvatar,
      rating: 5
    }
  ]

  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px]">
      {/* Main Food Image Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Circular background for image */}
        <div className="relative w-full max-w-lg aspect-square">
          {/* Food Image - using a circular frame */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl bg-white">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop"
              alt="Delicious healthy food"
              className="hero-img w-full h-full object-cover"
            />
          </div>

          {/* Floating Decoration Icons */}
          <DecorationIcon 
            icon="🍅" 
            position="-top-8 left-1/4"
            size="medium"
            className="animate-float animation-delay-0"
          />
          
          <DecorationIcon 
            icon="🥦" 
            position="-bottom-8 -right-8"
            size="large"
            className="animate-float animation-delay-1000"
          />

          {/* Testimonial Card - Sarah M. (Bottom Left) */}
          <div className="absolute -left-4 bottom-8 w-64 animate-fade-in-up z-10 hidden lg:block">
            <TestimonialCard
              {...testimonials[0]}
              className="shadow-xl"
            />
          </div>

          {/* Testimonial Card - Farellin J. (Top Right) */}
          <div className="absolute -right-4 top-12 w-64 animate-fade-in-up animation-delay-300 z-10 hidden lg:block">
            <TestimonialCard
              {...testimonials[1]}
              className="shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Mobile Testimonials - Stacked Below */}
      <div className="lg:hidden mt-8 space-y-4 px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroVisual
