import React from 'react'
import PropTypes from 'prop-types'

/**
 * Testimonial card component with star rating and user info
 */
function TestimonialCard({ 
  text, 
  userName, 
  userAvatar, 
  rating = 5,
  className = '' 
}) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      {/* Star Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-recipedia-star' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-recipedia-dark text-sm leading-relaxed mb-4">
        {text}
      </p>

      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={userAvatar} 
            alt={userName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-recipedia-dark text-sm">
            {userName}
          </span>
        </div>
        
        {/* Heart Icon */}
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  rating: PropTypes.number,
  className: PropTypes.string
}

export default TestimonialCard
