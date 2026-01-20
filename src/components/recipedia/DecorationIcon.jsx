import React from 'react'
import PropTypes from 'prop-types'

/**
 * Floating decoration icon component
 */
function DecorationIcon({ 
  icon, 
  position = 'top-0 left-0',
  size = 'medium',
  animate = true,
  className = '' 
}) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20'
  }
  
  const iconSizeClasses = {
    small: 'text-4xl',
    medium: 'text-5xl',
    large: 'text-6xl'
  }
  
  const animationClass = animate ? 'animate-float' : ''
  
  return (
    <div 
      className={`absolute ${position} ${sizeClasses[size]} ${animationClass} ${className} z-10`}
    >
      <div className={iconSizeClasses[size]}>
        {icon}
      </div>
    </div>
  )
}

DecorationIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  position: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  animate: PropTypes.bool,
  className: PropTypes.string
}

export default DecorationIcon
