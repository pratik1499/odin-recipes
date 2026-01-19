import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import NutrientProgressBar from '../components/NutrientProgressBar'

// Local image assets - production ready
const imgRectangle9 = "/assets/images/hero-meal.svg"
const imgRectangle13 = "/assets/images/recipe-card.svg"
const imgBrookeLarkRrzeCGujVfUUnsplash1 = "/assets/images/ingredient-search.svg"
const imgBrookeLarkRrzeCGujVfUUnsplash2 = "/assets/images/calendar-integration.svg"
const imgBrookeLarkRrzeCGujVfUUnsplash3 = "/assets/images/meal-plan-auto.svg"
const imgBasilArrowUpOutline = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M12 19V5M5 12l7-7 7 7'/%3E%3C/svg%3E"
const imgGroup1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21' fill='none'%3E%3Ccircle cx='10.5' cy='10.5' r='8' fill='%23B6EC1D'/%3E%3C/svg%3E"
const imgFrame8 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'%3E%3Ccircle cx='12.5' cy='12.5' r='10' fill='%23fff' fill-opacity='0.5'/%3E%3C/svg%3E"
const imgChart = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='338' height='63' viewBox='0 0 338 63'%3E%3Cpath d='M0 50 Q84 30 169 40 T338 20' stroke='%23B6EC1D' stroke-width='3' fill='none'/%3E%3C/svg%3E"
const imgBasilArrowUpOutline1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='M7 11V3M3 7l4-4 4 4'/%3E%3C/svg%3E"

function Home() {
  return (
    <div className="bg-dark-bg overflow-clip relative rounded-[16px] min-h-screen w-full">
      {/* Header with logo, navigation, and contact button */}
      <Header />

      {/* Hero section with main content and CTA */}
      <Hero 
        heroImage={imgRectangle9}
        arrowIcon={imgBasilArrowUpOutline}
        nutritionIcon={imgGroup1}
        mealPlanIcon={imgGroup1}
        connectorIcon={imgFrame8}
      />

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

      {/* Nutrient Progress Bars - using reusable component */}
      <NutrientProgressBar label="Calories" current={1100} max={2000} top="615px" />
      <NutrientProgressBar label="Carbohydrates" current={300} max={325} top="682px" />
      <NutrientProgressBar label="Proteins" current={10} max={75} top="749px" />

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

      {/* Feature Cards */}
      <FeatureCard 
        title="Recipe Search by Ingredient"
        image={imgBrookeLarkRrzeCGujVfUUnsplash1}
        position="left"
        top="904px"
      />

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

      <FeatureCard 
        title="Automatic Meal Plan"
        image={imgBrookeLarkRrzeCGujVfUUnsplash3}
        position="right"
        top="904px"
      />

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
