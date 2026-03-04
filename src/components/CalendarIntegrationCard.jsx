import React from 'react'

function CalendarIntegrationCard({ cardImage, chartImage, arrowIcon }) {
  return (
    <div className="absolute left-[72px] top-[1279px]">
      <div className="bg-card-bg h-[335px] rounded-[59px] w-[636px]" />
      <div className="absolute flex h-[126px] items-center justify-center left-[40px] top-[169px] w-[211px]">
        <div className="rotate-[90deg]">
          <div className="h-[211px] relative rounded-[30px] w-[126px]">
            <img
              alt="Calendar integration"
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full"
              src={cardImage}
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[126px] left-[267px] overflow-clip top-[169px] w-[329px]">
        <div className="absolute flex h-[126px] items-center justify-center left-0 top-0 w-[329px]">
          <div className="rotate-[90deg]">
            <div className="bg-white h-[329px] rounded-[30px] w-[126px]" />
          </div>
        </div>
        <div className="absolute h-[63px] left-[-4px] top-[37px] w-[338px]">
          <div className="absolute inset-[-2.38%_-0.44%_0_-0.32%]">
            <img alt="Chart" className="block max-w-none size-full" src={chartImage} />
          </div>
        </div>
        <div className="absolute flex items-center left-[12px] top-[14px]">
          <p className="font-medium leading-[normal] not-italic text-[12px] text-black">Increase nutrition</p>
        </div>
        <div className="absolute flex gap-[4px] items-center left-[265px] top-[14px]">
          <p className="font-medium leading-[normal] not-italic text-[12px] text-white">15%</p>
          <div className="bg-secondary flex items-center justify-center p-[16px] rounded-[33px] size-[23px]">
            <div className="flex items-center justify-center size-[19.124px]">
              <div className="rotate-[45deg]">
                <div className="relative size-[13.522px]">
                  <img alt="Arrow up" className="block max-w-none size-full" src={arrowIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute font-medium leading-[normal] left-[40px] not-italic text-[33px] text-white top-[40px] w-[518px] whitespace-pre-wrap">
        <p className="mb-0">{`Integration with Calendar &`}</p>
        <p>Nutrition Analysis</p>
      </div>
    </div>
  )
}

export default CalendarIntegrationCard

