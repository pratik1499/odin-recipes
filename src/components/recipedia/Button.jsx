import React from 'react'
import PropTypes from 'prop-types'

/**
 * Reusable button component with multiple variants
 */
function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  className = '',
  ...props 
}) {
  const baseClasses = 'font-medium rounded-full transition-all duration-200 inline-flex items-center justify-center'
  
  const variantClasses = {
    primary: 'bg-recipedia-orange hover:bg-recipedia-orange-hover text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-gray-50 text-recipedia-dark border border-gray-200',
    ghost: 'bg-transparent hover:bg-gray-100 text-recipedia-dark'
  }
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-10 py-4 text-base',
    large: 'px-12 py-5 text-lg'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Button
