import React from 'react'
import RecipediaHero from '../components/recipedia/RecipediaHero'

/**
 * Demo page to showcase the Recipedia Hero Section
 * This is a standalone page that demonstrates the pixel-accurate implementation
 * from the Figma design
 */
function RecipediaDemo() {
  return (
    <div className="w-full min-h-screen">
      <RecipediaHero />
      
      {/* Additional Content Section (Optional) */}
      <section className="bg-recipedia-light-gray py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-recipedia-dark mb-4">
            Implementation Details
          </h2>
          <p className="text-recipedia-gray max-w-2xl mx-auto">
            This is a pixel-accurate, responsive React implementation of the Figma design.
            All components are modular, reusable, and follow React best practices.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-recipedia-dark mb-2">✅ Responsive</h3>
              <p className="text-sm text-recipedia-gray">
                Works seamlessly on mobile, tablet, and desktop screens
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-recipedia-dark mb-2">🎨 Pixel-Accurate</h3>
              <p className="text-sm text-recipedia-gray">
                Matches the Figma design exactly with proper spacing and typography
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-recipedia-dark mb-2">♻️ Reusable</h3>
              <p className="text-sm text-recipedia-gray">
                Modular components that can be used throughout your application
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecipediaDemo
