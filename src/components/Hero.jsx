import React from 'react'
import PropTypes from 'prop-types'

/**
 * Hero section with title, description, CTA buttons, and hero image
 */
function Hero({ heroImage, arrowIcon, nutritionIcon, mealPlanIcon, connectorIcon }) {
  return (
    <>
      {/* Hero Section */}
      <p className="absolute font-semibold leading-[89px] left-[72px] not-italic text-[70px] text-white top-[192px] w-[595px] whitespace-pre-wrap">
        Recipe and Meal Plan App with Ai
      </p>

      {/* Hero Description */}
      <p className="absolute font-normal leading-[normal] left-[72px] not-italic text-text-gray text-[20px] top-[381px] w-[572px] whitespace-pre-wrap">
        Save time in planning meals according to available ingredients and help users to have a healthy or customized diet.
      </p>

      {/* Hero CTA Buttons */}
      <div className="absolute flex gap-[8px] items-center left-[72px] top-[494px]">
        <div className="bg-secondary flex items-center justify-center px-[24px] py-[16px] rounded-[33px]">
          <p className="font-medium leading-[normal] not-italic text-gray-900 text-[18px]">
            Try for Free
          </p>
        </div>
        <div className="bg-white flex h-[59.42px] items-center justify-center p-[16px] rounded-[33px] w-[59px]">
          <div className="flex items-center justify-center size-[33.941px]">
            <div className="rotate-[45deg]">
              <div className="relative size-[24px]">
                <img alt="Arrow up" className="block max-w-none size-full" src={arrowIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute h-[329px] right-[72px] rounded-[24px] top-[176px] w-[636px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="Meal plan hero" className="absolute h-[129.68%] left-[-0.53%] max-w-none top-[-14.84%] w-[100.53%]" src={heroImage} />
        </div>
      </div>

      {/* Nutrition Analysis Badge */}
      <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.38)] border border-solid border-white flex flex-col items-start right-[512px] p-[10px] rounded-[47px] top-[230px]">
        <div className="bg-white flex gap-[8px] items-center justify-center p-[10px] rounded-[33px]">
          <div className="size-[21px]">
            <img alt="Nutrition icon" className="block max-w-none size-full" src={nutritionIcon} />
          </div>
          <p className="font-medium leading-[normal] not-italic text-gray-900 text-[12px]">
            Nutrition Analysis
          </p>
        </div>
      </div>

      {/* Automatic Meal Plan Badge */}
      <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.38)] border border-solid border-white flex flex-col items-start right-[247px] p-[10px] rounded-[47px] top-[402px]">
        <div className="bg-white flex gap-[8px] items-center justify-center p-[10px] rounded-[33px]">
          <div className="size-[21px]">
            <img alt="Meal plan icon" className="block max-w-none size-full" src={mealPlanIcon} />
          </div>
          <p className="font-medium leading-[normal] not-italic text-gray-900 text-[12px]">
            Automatic Meal Plan
          </p>
        </div>
      </div>

      {/* Connector Line and Icon */}
      <div className="absolute flex h-[22.052px] items-center justify-center left-[1016.81px] top-[284.82px] w-[14.865px]">
        <div className="rotate-[327.892deg]">
          <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.38)] border-[0.5px] border-solid border-white h-[24.779px] w-[2px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1011px] size-[34.464px] top-[283px]">
        <div className="rotate-[327.892deg]">
          <div className="relative size-[25px]">
            <img alt="Connector" className="block max-w-none size-full" src={connectorIcon} />
          </div>
        </div>
      </div>
    </>
  )
}

Hero.propTypes = {
  heroImage: PropTypes.string.isRequired,
  arrowIcon: PropTypes.string.isRequired,
  nutritionIcon: PropTypes.string.isRequired,
  mealPlanIcon: PropTypes.string.isRequired,
  connectorIcon: PropTypes.string.isRequired,
}

export default Hero
