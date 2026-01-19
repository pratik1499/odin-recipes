import React from 'react'

// Production-ready placeholder images
// Replace these with actual downloaded assets in production
const imgRectangle9 = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=636&h=329&fit=crop"
const imgRectangle13 = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=274&h=141&fit=crop"
const imgBrookeLarkRrzeCGujVfUUnsplash1 = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=556&h=161&fit=crop"
const imgBrookeLarkRrzeCGujVfUUnsplash2 = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=211&h=126&fit=crop"
const imgBrookeLarkRrzeCGujVfUUnsplash3 = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=556&h=161&fit=crop"
const imgBasilArrowUpOutline = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M12 19V5M5 12l7-7 7 7'/%3E%3C/svg%3E"
const imgGroup1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21' fill='none'%3E%3Ccircle cx='10.5' cy='10.5' r='8' fill='%23B6EC1D'/%3E%3C/svg%3E"
const imgFrame8 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'%3E%3Ccircle cx='12.5' cy='12.5' r='10' fill='%23fff' fill-opacity='0.5'/%3E%3C/svg%3E"
const imgChart = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='338' height='63' viewBox='0 0 338 63'%3E%3Cpath d='M0 50 Q84 30 169 40 T338 20' stroke='%23B6EC1D' stroke-width='3' fill='none'/%3E%3C/svg%3E"
const imgBasilArrowUpOutline1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M7 11V3M3 7l4-4 4 4'/%3E%3C/svg%3E"

// TODO: This component is very large (350+ lines) and uses absolute positioning extensively.
// Consider breaking it down into smaller, reusable components (Header, Hero, NutrientCard, FeatureCard)
// and using Flexbox/Grid with responsive variants for better maintainability and mobile support.
function Home() {
  return (
    <div className="bg-dark-bg overflow-clip relative rounded-[16px] min-h-screen w-full">
      {/* Logo */}
      <p className="absolute font-bold leading-[0] left-[72px] not-italic text-primary text-[30px] top-[40px]">
        <span className="leading-[normal] text-white">Meal</span>
        <span className="leading-[normal] text-lime-green">plan</span>
      </p>

      {/* Navigation Menu */}
      <nav className="absolute bg-card-bg flex gap-[16px] items-center left-1/2 p-[8px] rounded-[71px] top-[31px] translate-x-[-50%]">
        <ul className="flex gap-[16px] items-center list-none m-0 p-0">
          <li>
            <a href="/" className="bg-secondary flex items-center justify-center px-[16px] py-[10px] rounded-[33px] no-underline">
              <span className="font-medium leading-[normal] not-italic text-gray-900 text-[18px]">
                Home
              </span>
            </a>
          </li>
          <li>
            <a href="/services" className="flex items-center justify-center px-[16px] py-[10px] rounded-[33px] no-underline">
              <span className="font-medium leading-[normal] not-italic text-[18px] text-white">
                Services
              </span>
            </a>
          </li>
          <li>
            <a href="/contact" className="flex items-center justify-center px-[16px] py-[10px] rounded-[33px] no-underline">
              <span className="font-medium leading-[normal] not-italic text-[18px] text-white">
                Contact
              </span>
            </a>
          </li>
          <li>
            <a href="/choose-plan" className="flex items-center justify-center px-[16px] py-[10px] rounded-[33px] no-underline">
              <span className="font-medium leading-[normal] not-italic text-[18px] text-white">
                Choose Plan
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Us Button */}
      <div className="absolute bg-secondary flex items-center justify-center right-[72px] px-[24px] py-[16px] rounded-[33px] top-[33px]">
        <p className="font-medium leading-[normal] not-italic text-gray-900 text-[18px]">
          Contact Us
        </p>
      </div>

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
          <p className="font-medium leading-[normal] not-italic text-gray-900 text-[12px]">
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
            <img alt="Connector" className="block max-w-none size-full" src={imgFrame8} />
          </div>
        </div>
      </div>

      {/* Required Recipe Card */}
      <div className="absolute left-[732px] top-[527px]">
        <div className="bg-card-bg h-[297px] rounded-[20px] w-[306px]" />
        <p className="absolute font-semibold leading-[normal] left-[16px] not-italic text-[23px] text-white top-[16px]">
          Required Recipe
        </p>
        <p className="absolute font-medium leading-[normal] left-[16px] not-italic text-[15px] text-white top-[109px]">
          Recipe by the hour
        </p>
        <div className="absolute flex gap-[8px] items-center left-[16px] top-[59px]">
          <div className="bg-white flex items-center justify-center px-[12px] py-[4px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-gray-900 text-[12px]">
              07:00
            </p>
          </div>
          <div className="bg-border-gray flex items-center justify-center px-[12px] py-[4px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[12px] text-white">
              10:00
            </p>
          </div>
          <div className="bg-border-gray flex items-center justify-center px-[12px] py-[4px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[12px] text-white">
              13:00
            </p>
          </div>
          <div className="bg-border-gray flex items-center justify-center px-[12px] py-[4px] rounded-[66px]">
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
        <div className="bg-card-bg h-[297px] rounded-[20px] w-[306px]" />
        <p className="absolute font-semibold leading-[normal] left-[16px] not-italic text-[23px] text-white top-[16px]">
          Nutrients required
        </p>
        <p className="absolute font-normal leading-[normal] left-[16px] not-italic text-text-gray text-[16px] top-[55px]">
          nutrients needed in a day
        </p>
      </div>

      {/* TODO: The Calories, Carbohydrates, and Proteins progress bars are nearly identical.
           Extract into a reusable NutrientProgressBar component to reduce duplication and improve maintainability. */}
      {/* TODO: The diagonal lines implementation uses magic numbers and inline styles that are brittle.
           Consider refactoring to use CSS pseudo-elements, SVG, or a simpler background pattern. */}
      {/* Calories Progress Bar */}
      <div className="absolute flex flex-col gap-[4px] items-start left-[1078px] top-[615px] w-[274px]">
        <div className="flex font-medium items-center justify-between leading-[normal] not-italic text-[14px] text-white w-full">
          <p>Calories</p>
          <p>1100/2000</p>
        </div>
        <div className="relative w-full">
          <div className="bg-border-gray h-[34px] rounded-[9px] w-full" />
          <div className="absolute left-0 top-0 h-[34px] overflow-clip rounded-[9px] w-[150px]">
            <div className="bg-secondary h-[34px] rounded-[9px] w-[150px]" />
            {[...Array(11)].map((_, i) => (
              <div key={i} className="absolute flex h-[85.027px] items-center justify-center w-[68.422px]" style={{left: `${-3.18 + i * 15}px`, top: '-27px'}}>
                <div className="rotate-[322.074deg]">
                  <div className="bg-lime-green h-[102.337px] w-[7px]" />
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
          <div className="bg-border-gray h-[34px] rounded-[9px] w-full" />
          <div className="absolute left-0 top-0 h-[34px] overflow-clip rounded-[9px] w-[215px]">
            <div className="bg-secondary h-[34px] rounded-[9px] w-[215px]" />
            {[...Array(16)].map((_, i) => (
              <div key={i} className="absolute flex h-[85.027px] items-center justify-center w-[68.422px]" style={{left: `${-3.18 + i * 15}px`, top: '-27px'}}>
                <div className="rotate-[322.074deg]">
                  <div className="bg-lime-green h-[102.337px] w-[7px]" />
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
          <div className="bg-border-gray h-[34px] rounded-[9px] w-full" />
          <div className="absolute left-0 top-0 h-[34px] overflow-clip rounded-[9px] w-[56px]">
            <div className="bg-secondary h-[34px] rounded-[9px] w-[56px]" />
            {[...Array(16)].map((_, i) => (
              <div key={i} className="absolute flex h-[85.027px] items-center justify-center w-[68.422px]" style={{left: `${-3.18 + i * 15}px`, top: '-27px'}}>
                <div className="rotate-[322.074deg]">
                  <div className="bg-lime-green h-[102.337px] w-[7px]" />
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
          <div className="border border-card-bg border-solid flex items-center justify-center px-[16px] py-[10px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[18px] text-white">
              Calories
            </p>
          </div>
          <div className="border border-card-bg border-solid flex items-center justify-center px-[16px] py-[10px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[18px] text-white">
              Carbohydrates
            </p>
          </div>
          <div className="border border-card-bg border-solid flex items-center justify-center px-[16px] py-[10px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[18px] text-white">
              Proteins
            </p>
          </div>
          <div className="border border-card-bg border-solid flex items-center justify-center px-[16px] py-[10px] rounded-[66px]">
            <p className="font-normal leading-[normal] not-italic text-[18px] text-white">
              Fat
            </p>
          </div>
        </div>
      </div>

      {/* Recipe Search by Ingredient Card */}
      <div className="absolute left-[72px] top-[904px]">
        <div className="bg-card-bg h-[335px] rounded-[59px] w-[636px]" />
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
        <div className="bg-card-bg h-[335px] rounded-[59px] w-[636px]" />
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
            <div className="bg-secondary flex items-center justify-center p-[16px] rounded-[33px] size-[23px]">
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
        <div className="bg-card-bg h-[335px] rounded-[59px] w-[636px]" />
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
          <div className="bg-secondary flex items-center justify-center px-[24px] py-[16px] rounded-[33px]">
            <p className="font-medium leading-[normal] not-italic text-gray-900 text-[18px]">
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
