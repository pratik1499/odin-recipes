import React from 'react'

function DontForgetSection({ tags }) {
  return (
    <div className="absolute flex flex-col gap-[24px] items-start left-[72px] top-[683px] w-[595px]">
      <p className="font-semibold leading-[normal] not-italic text-[23px] text-white whitespace-pre-wrap">
        {`Don't forget to replenish the nutrients you need in a day.`}
      </p>
      <div className="flex gap-[8px] items-center">
        {tags.map(tag => (
          <div
            key={tag}
            className="border border-card-bg border-solid flex items-center justify-center px-[16px] py-[10px] rounded-[66px]"
          >
            <p className="font-normal leading-[normal] not-italic text-[18px] text-white">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DontForgetSection

