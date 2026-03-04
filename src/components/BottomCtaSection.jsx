import React from 'react'

function BottomCtaSection({ arrowIcon }) {
  return (
    <div className="absolute flex flex-col gap-[24px] items-start right-[72px] top-[1335px] w-[450px]">
      <p className="font-semibold leading-[normal] not-italic text-[44px] text-white whitespace-pre-wrap">
        What you need we will provide
      </p>
      <div className="flex gap-[8px] items-center">
        <div className="bg-secondary flex items-center justify-center px-[24px] py-[16px] rounded-[33px]">
          <p className="font-medium leading-[normal] not-italic text-gray-900 text-[18px]">Try for Free</p>
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
    </div>
  )
}

export default BottomCtaSection

