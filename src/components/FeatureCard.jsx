import React from 'react'
import PropTypes from 'prop-types'

/**
 * Reusable feature card component for displaying app features
 */
function FeatureCard({ title, image, position = 'left', top }) {
  const positionClass = position === 'left' ? 'left-[72px]' : 'right-[72px]'
  
  return (
    <div className={`absolute ${positionClass}`} style={{ top }}>
      <div className="bg-card-bg h-[335px] rounded-[59px] w-[636px]" />
      <div className="absolute flex h-[161px] items-center justify-center left-[40px] top-[134px] w-[556px]">
        <div className="rotate-[90deg]">
          <div className="h-[556px] relative rounded-[235px] w-[161px]">
            {position === 'right' ? (
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[235px]">
                <img alt={title} className="absolute h-full left-[-191.66%] max-w-none top-0 w-[517.95%]" src={image} />
              </div>
            ) : (
              <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[235px] size-full" src={image} />
            )}
          </div>
        </div>
      </div>
      <p className="absolute font-medium leading-[normal] left-[40px] not-italic text-[33px] text-white top-[40px] w-[518px] whitespace-pre-wrap">
        {title}
      </p>
    </div>
  )
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  position: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default FeatureCard
