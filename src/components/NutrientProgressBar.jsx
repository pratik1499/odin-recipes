import React from 'react'
import PropTypes from 'prop-types'

/**
 * Reusable nutrient progress bar component
 * Displays progress with a styled bar and optional decorative pattern
 */
function NutrientProgressBar({ label, current, max, top }) {
  const percentage = (current / max) * 100
  const progressWidth = Math.round((percentage / 100) * 274) // 274px is the full width

  return (
    <div className={`absolute flex flex-col gap-[4px] items-start left-[1078px] w-[274px]`} style={{ top }}>
      <div className="flex font-medium items-center justify-between leading-[normal] not-italic text-[14px] text-white w-full">
        <p>{label}</p>
        <p>{current}/{max}</p>
      </div>
      <div className="relative w-full">
        {/* Background bar */}
        <div className="bg-border-gray h-[34px] rounded-[9px] w-full" />
        
        {/* Progress bar with decorative pattern */}
        <div 
          className="absolute left-0 top-0 h-[34px] overflow-clip rounded-[9px]"
          style={{ width: `${progressWidth}px` }}
        >
          {/* Solid progress fill */}
          <div 
            className="bg-secondary h-[34px] rounded-[9px]" 
            style={{ width: `${progressWidth}px` }}
          />
          
          {/* Decorative diagonal pattern overlay using CSS repeating gradient */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              background: `repeating-linear-gradient(
                135deg,
                transparent,
                transparent 10px,
                rgba(193, 248, 36, 0.5) 10px,
                rgba(193, 248, 36, 0.5) 12px
              )`
            }}
          />
        </div>
      </div>
    </div>
  )
}

NutrientProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default NutrientProgressBar
