import React from 'react'

function RequiredRecipeCard({ times, imageSrc }) {
  return (
    <div className="absolute left-[732px] top-[527px]">
      <div className="bg-card-bg h-[297px] rounded-[20px] w-[306px]" />
      <p className="absolute font-semibold leading-[normal] left-[16px] not-italic text-[23px] text-white top-[16px]">
        Required Recipe
      </p>
      <p className="absolute font-medium leading-[normal] left-[16px] not-italic text-[15px] text-white top-[109px]">
        Recipe by the hour
      </p>
      <div className="absolute flex gap-[8px] items-center left-[16px] top-[59px]">
        {times.map((time, index) => {
          const isFirst = index === 0
          const containerClasses = isFirst
            ? 'bg-white flex items-center justify-center px-[12px] py-[4px] rounded-[66px]'
            : 'bg-border-gray flex items-center justify-center px-[12px] py-[4px] rounded-[66px]'

          const textClasses = isFirst
            ? 'font-normal leading-[normal] not-italic text-gray-900 text-[12px]'
            : 'font-normal leading-[normal] not-italic text-[12px] text-white'

          return (
            <div key={time} className={containerClasses}>
              <p className={textClasses}>{time}</p>
            </div>
          )
        })}
      </div>
      <div className="absolute h-[141px] left-[16px] rounded-[14px] top-[140px] w-[274px]">
        <img
          alt="Recipe"
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full"
          src={imageSrc}
        />
      </div>
    </div>
  )
}

export default RequiredRecipeCard

