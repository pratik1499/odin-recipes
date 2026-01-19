import React from 'react'

// Image URLs from Figma
const imgRectangle9 = "https://www.figma.com/api/mcp/asset/71780348-c687-4ba8-8f6c-fd6597aedf34"
const imgRectangle13 = "https://www.figma.com/api/mcp/asset/57df5478-2027-4590-a949-c9c773b109c4"
const imgBrookeLarkRrzeCGujVfUUnsplash1 = "https://www.figma.com/api/mcp/asset/936551cf-bfc9-4b6d-8a85-e00a89724113"
const imgBrookeLarkRrzeCGujVfUUnsplash2 = "https://www.figma.com/api/mcp/asset/779e372f-10ef-456c-a97c-0aea2851818b"
const imgBrookeLarkRrzeCGujVfUUnsplash3 = "https://www.figma.com/api/mcp/asset/14ce7280-6d55-45b1-8de5-d619311baa66"
const imgBasilArrowUpOutline = "https://www.figma.com/api/mcp/asset/0771e9f6-9ab3-4f72-9853-5b0adc48f466"
const imgGroup1 = "https://www.figma.com/api/mcp/asset/c81dbe22-5b18-448e-8b97-87acefea669b"
const imgFrame8 = "https://www.figma.com/api/mcp/asset/98b60029-54b4-481a-ad00-84c3641f0963"
const imgChart = "https://www.figma.com/api/mcp/asset/f6586b4b-5199-4f46-8906-ab53ff30c453"
const imgBasilArrowUpOutline1 = "https://www.figma.com/api/mcp/asset/a758d0bc-c99e-4412-ac17-6ea64e42dbcd"

function Home() {
  return (
    <div className="bg-[#262626] overflow-clip relative rounded-[16px] min-h-screen w-full">
      {/* Logo */}
      <p className="absolute font-bold leading-[0] left-[72px] not-italic text-[#171543] text-[30px] top-[40px]">
        <span className="leading-[normal] text-white">Meal</span>
        <span className="leading-[normal] text-[#99ce03]">plan</span>
      </p>

      {/* Navigation Menu */}
      <div className="absolute bg-[#363636] flex gap-[16px] items-center left-1/2 p-[8px] rounded-[71px] top-[31px] translate-x-[-50%]">
        <div className="bg-[#b6ec1d] flex items-center justify-center px-[16px] py-[10px] rounded-[33px]">
          <p className="font-medium leading-[normal] not-italic text-[#212121] text-[18px]">
            Home
          </p>
        </div>
        <div className="flex items-center justify-center px-[16px] py-[10px] rounded-[33px]">
          <p className="font-medium leading-[normal] not-italic text-[18px] text-white">
            Services
          </p>
        </div>
        <div className="flex items-center justify-center px-[16px] py-[10px] rounded-[33px]">
          <p className="font-medium leading-[normal] not-italic text-[18px] text-white">
            Contact
          </p>
        </div>
        <div className="flex items-center justify-center px-[16px] py-[10px] rounded-[33px]">
          <p className="font-medium leading-[normal] not-italic text-[18px] text-white">
            Choose Plan
          </p>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="absolute bg-[#b6ec1d] flex items-center justify-center right-[72px] px-[24px] py-[16px] rounded-[33px] top-[33px]">
        <p className="font-medium leading-[normal] not-italic text-[#212121] text-[18px]">
          Contact Us
        </p>
      </div>

      {/* Hero Section */}
      <p className="absolute font-semibold leading-[89px] left-[72px] not-italic text-[70px] text-white top-[192px] w-[595px] whitespace-pre-wrap">
        Recipe and Meal Plan App with Ai
      </p>

      {/* Hero Description */}
      <p className="absolute font-normal leading-[normal] left-[72px] not-italic text-[#b2b2b2] text-[20px] top-[381px] w-[572px] whitespace-pre-wrap">
        Save time in planning meals according to available ingredients and help users to have a healthy or customized diet.
      </p>

      {/* Hero CTA Buttons */}
      <div className="absolute flex gap-[8px] items-center left-[72px] top-[494px]">
        <div className="bg-[#b6ec1d] flex items-center justify-center px-[24px] py-[16px] rounded-[33px]">
          <p className="font-medium leading-[normal] not-italic text-[#212121] text-[18px]">
            Try for Free
          </p>
        </div>
        <div className="bg-white flex h-[59.42px] items-center justify-center p-[16px] rounded-[33px] w-[59px]">
          <div className="flex items-center justify-center size-[33.941px]">
            <div className="rotate-[45deg]">
              <div className="relative size-[24px]">
                <img alt="Arrow up" className="block max-w-none size-full" src={imgBasilArrowUpOutline} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute h-[329px] right-[72px] rounded-[24px] top-[176px] w-[636px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="Meal plan hero" className="absolute h-[129.68%] left-[-0.53%] max-w-none top-[-14.84%] w-[100.53%]" src={imgRectangle9} />
        </div>
      </div>

      {/* Nutrition Analysis Badge */}
      <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.38)] border border-solid border-white flex flex-col items-start right-[512px] p-[10px] rounded-[47px] top-[230px]">
        <div className="bg-white flex gap-[8px] items-center justify-center p-[10px] rounded-[33px]">
          <div className="size-[21px]">
            <img alt="Nutrition icon" className="block max-w-none size-full" src={imgGroup1} />
          </div>
          <p className="font-medium leading-[normal] not-italic text-[#212121] text-[12px]">
            Nutrition Analysis
          </p>
        </div>
      </div>

      {/* Automatic Meal Plan Badge */}
      <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.38)] border border-solid border-white flex flex-col items-start right-[247px] p-[10px] rounded-[47px] top-[402px]">
        <div className="bg-white flex gap-[8px] items-center justify-center p-[10px] rounded-[33px]">
          <div className="size-[21px]">
            <img alt="Meal plan icon" className="block max-w-none size-full" src={imgGroup1} />
          </div>
          <p className="font-medium leading-[normal] not-italic text-[#212121] text-[12px]">
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
            <img alt="Connector" className="block max-w-none size-full" src={imgFrame8} />
          </div>
        </div>
      </div>

      {/* Required Recipe Card */}
      <div className="absolute left-[732px] top-[527px]">
        <div className="bg-[#363636] h-[297px] rounded-[20px] w-[306px]" />
        <p className="absolute font-semibold leading-[normal] left-[16px] not-italic text-[23px] text-white top-[16px]">
          Required Recipe
        </p>
        <p className="absolute font-medium leading-[normal] left-[16px] not-italic text-[15px] text-white top-[109px]">
          Recipe by the hour
        </p>
        <div className="absolute flex gap-[8px] items-center left-[16px] top-[59px]">
          <div className="bg-white flex items-center justify-center px-[12px] py-[4px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[#212121] text-[12px]">
              07:00
            </p>
          </div>
          <div className="bg-[#545454] flex items-center justify-center px-[12px] py-[4px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[12px] text-white">
              10:00
            </p>
          </div>
          <div className="bg-[#545454] flex items-center justify-center px-[12px] py-[4px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[12px] text-white">
              13:00
            </p>
          </div>
          <div className="bg-[#545454] flex items-center justify-center px-[12px] py-[4px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[12px] text-white">
              18:00
            </p>
          </div>
        </div>
        <div className="absolute h-[141px] left-[16px] rounded-[14px] top-[140px] w-[274px]">
          <img alt="Recipe" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgRectangle13} />
        </div>
      </div>

      {/* Nutrients Required Card */}
      <div className="absolute left-[1062px] top-[527px]">
        <div className="bg-[#363636] h-[297px] rounded-[20px] w-[306px]" />
        <p className="absolute font-semibold leading-[normal] left-[16px] not-italic text-[23px] text-white top-[16px]">
          Nutrients required
        </p>
        <p className="absolute font-normal leading-[normal] left-[16px] not-italic text-[#b2b2b2] text-[16px] top-[55px]">
          nutrients needed in a day
        </p>
      </div>

      {/* Calories Progress Bar */}
      <div className="absolute flex flex-col gap-[4px] items-start left-[1078px] top-[615px] w-[274px]">
        <div className="flex font-medium items-center justify-between leading-[normal] not-italic text-[14px] text-white w-full">
          <p>Calories</p>
          <p>1100/2000</p>
        </div>
        <div className="relative w-full">
          <div className="bg-[#545454] h-[34px] rounded-[9px] w-full" />
          <div className="absolute left-0 top-0 h-[34px] overflow-clip rounded-[9px] w-[150px]">
            <div className="bg-[#b6ec1d] h-[34px] rounded-[9px] w-[150px]" />
            {[...Array(11)].map((_, i) => (
              <div key={i} className="absolute flex h-[85.027px] items-center justify-center w-[68.422px]" style={{left: `${-3.18 + i * 15}px`, top: '-27px'}}>
                <div className="rotate-[322.074deg]">
                  <div className="bg-[#c1f824] h-[102.337px] w-[7px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carbohydrates Progress Bar */}
      <div className="absolute flex flex-col gap-[4px] items-start left-[1078px] top-[682px] w-[274px]">
        <div className="flex font-medium items-center justify-between leading-[normal] not-italic text-[14px] text-white w-full">
          <p>Carbohydrates</p>
          <p>300/325</p>
        </div>
        <div className="relative w-full">
          <div className="bg-[#545454] h-[34px] rounded-[9px] w-full" />
          <div className="absolute left-0 top-0 h-[34px] overflow-clip rounded-[9px] w-[215px]">
            <div className="bg-[#b6ec1d] h-[34px] rounded-[9px] w-[215px]" />
            {[...Array(16)].map((_, i) => (
              <div key={i} className="absolute flex h-[85.027px] items-center justify-center w-[68.422px]" style={{left: `${-3.18 + i * 15}px`, top: '-27px'}}>
                <div className="rotate-[322.074deg]">
                  <div className="bg-[#c1f824] h-[102.337px] w-[7px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proteins Progress Bar */}
      <div className="absolute flex flex-col gap-[4px] items-start left-[1078px] top-[749px] w-[274px]">
        <div className="flex font-medium items-center justify-between leading-[normal] not-italic text-[14px] text-white w-full">
          <p>Proteins</p>
          <p>10/75</p>
        </div>
        <div className="relative w-full">
          <div className="bg-[#545454] h-[34px] rounded-[9px] w-full" />
          <div className="absolute left-0 top-0 h-[34px] overflow-clip rounded-[9px] w-[56px]">
            <div className="bg-[#b6ec1d] h-[34px] rounded-[9px] w-[215px]" />
            {[...Array(16)].map((_, i) => (
              <div key={i} className="absolute flex h-[85.027px] items-center justify-center w-[68.422px]" style={{left: `${-3.18 + i * 15}px`, top: '-27px'}}>
                <div className="rotate-[322.074deg]">
                  <div className="bg-[#c1f824] h-[102.337px] w-[7px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Don't Forget Section */}
      <div className="absolute flex flex-col gap-[24px] items-start left-[72px] top-[683px] w-[595px]">
        <p className="font-semibold leading-[normal] not-italic text-[23px] text-white whitespace-pre-wrap">{`Don't forget to replenish the nutrients you need in a day.`}</p>
        <div className="flex gap-[8px] items-center">
          <div className="border border-[#363636] border-solid flex items-center justify-center px-[16px] py-[10px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[18px] text-white">
              Calories
            </p>
          </div>
          <div className="border border-[#363636] border-solid flex items-center justify-center px-[16px] py-[10px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[18px] text-white">
              Carbohydrates
            </p>
          </div>
          <div className="border border-[#363636] border-solid flex items-center justify-center px-[16px] py-[10px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[18px] text-white">
              Proteins
            </p>
          </div>
          <div className="border border-[#363636] border-solid flex items-center justify-center px-[16px] py-[10px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[18px] text-white">
              Fat
            </p>
          </div>
        </div>
      </div>

      {/* Recipe Search by Ingredient Card */}
      <div className="absolute left-[72px] top-[904px]">
        <div className="bg-[#363636] h-[335px] rounded-[59px] w-[636px]" />
        <div className="absolute flex h-[161px] items-center justify-center left-[40px] top-[134px] w-[556px]">
          <div className="rotate-[90deg]">
            <div className="h-[556px] relative rounded-[235px] w-[161px]">
              <img alt="Recipe search" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[235px] size-full" src={imgBrookeLarkRrzeCGujVfUUnsplash1} />
            </div>
          </div>
        </div>
        <p className="absolute font-medium leading-[normal] left-[40px] not-italic text-[33px] text-white top-[40px] w-[518px] whitespace-pre-wrap">
          Recipe Search by Ingredient
        </p>
      </div>

      {/* Integration with Calendar Card */}
      <div className="absolute left-[72px] top-[1279px]">
        <div className="bg-[#363636] h-[335px] rounded-[59px] w-[636px]" />
        <div className="absolute flex h-[126px] items-center justify-center left-[40px] top-[169px] w-[211px]">
          <div className="rotate-[90deg]">
            <div className="h-[211px] relative rounded-[30px] w-[126px]">
              <img alt="Calendar integration" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgBrookeLarkRrzeCGujVfUUnsplash2} />
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
              <img alt="Chart" className="block max-w-none size-full" src={imgChart} />
            </div>
          </div>
          <div className="absolute flex items-center left-[12px] top-[14px]">
            <p className="font-medium leading-[normal] not-italic text-[12px] text-black">
              Increase nutrition
            </p>
          </div>
          <div className="absolute flex gap-[4px] items-center left-[265px] top-[14px]">
            <p className="font-medium leading-[normal] not-italic text-[12px] text-white">
              15%
            </p>
            <div className="bg-[#b6ec1d] flex items-center justify-center p-[16px] rounded-[33px] size-[23px]">
              <div className="flex items-center justify-center size-[19.124px]">
                <div className="rotate-[45deg]">
                  <div className="relative size-[13.522px]">
                    <img alt="Arrow up" className="block max-w-none size-full" src={imgBasilArrowUpOutline1} />
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

      {/* Automatic Meal Plan Card */}
      <div className="absolute right-[72px] top-[904px]">
        <div className="bg-[#363636] h-[335px] rounded-[59px] w-[636px]" />
        <div className="absolute flex h-[161px] items-center justify-center left-[40px] top-[134px] w-[556px]">
          <div className="rotate-[90deg]">
            <div className="h-[556px] relative rounded-[235px] w-[161px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[235px]">
                <img alt="Automatic meal plan" className="absolute h-full left-[-191.66%] max-w-none top-0 w-[517.95%]" src={imgBrookeLarkRrzeCGujVfUUnsplash3} />
              </div>
            </div>
          </div>
        </div>
        <p className="absolute font-medium leading-[normal] left-[40px] not-italic text-[33px] text-white top-[40px] w-[518px] whitespace-pre-wrap">
          Automatic Meal Plan
        </p>
      </div>

      {/* Bottom CTA Section */}
      <div className="absolute flex flex-col gap-[24px] items-start right-[72px] top-[1335px] w-[450px]">
        <p className="font-semibold leading-[normal] not-italic text-[44px] text-white whitespace-pre-wrap">
          What you need we will provide
        </p>
        <div className="flex gap-[8px] items-center">
          <div className="bg-[#b6ec1d] flex items-center justify-center px-[24px] py-[16px] rounded-[33px]">
            <p className="font-medium leading-[normal] not-italic text-[#212121] text-[18px]">
              Try for Free
            </p>
          </div>
          <div className="bg-white flex h-[59.42px] items-center justify-center p-[16px] rounded-[33px] w-[59px]">
            <div className="flex items-center justify-center size-[33.941px]">
              <div className="rotate-[45deg]">
                <div className="relative size-[24px]">
                  <img alt="Arrow up" className="block max-w-none size-full" src={imgBasilArrowUpOutline} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
