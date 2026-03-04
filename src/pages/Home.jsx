import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import NutrientProgressBar from '../components/NutrientProgressBar'
import RequiredRecipeCard from '../components/RequiredRecipeCard'
import NutrientsRequiredCard from '../components/NutrientsRequiredCard'
import DontForgetSection from '../components/DontForgetSection'
import CalendarIntegrationCard from '../components/CalendarIntegrationCard'
import BottomCtaSection from '../components/BottomCtaSection'

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

const REQUIRED_RECIPE_TIMES = ["07:00", "10:00", "13:00", "18:00"]

const NUTRIENT_PROGRESS_CONFIG = [
  { label: "Calories", current: 1100, max: 2000, top: "615px" },
  { label: "Carbohydrates", current: 300, max: 325, top: "682px" },
  { label: "Proteins", current: 10, max: 75, top: "749px" }
]

const NUTRIENT_TAGS = ["Calories", "Carbohydrates", "Proteins", "Fat"]

const Home = () => {
  return (
    <div className="bg-dark-bg relative rounded-[16px] min-h-[1800px] w-full">
      <Header />

      <Hero
        heroImage={imgRectangle9}
        arrowIcon={imgBasilArrowUpOutline}
        nutritionIcon={imgGroup1}
        mealPlanIcon={imgGroup1}
        connectorIcon={imgFrame8}
      />

      <RequiredRecipeCard times={REQUIRED_RECIPE_TIMES} imageSrc={imgRectangle13} />
      <NutrientsRequiredCard />

      {NUTRIENT_PROGRESS_CONFIG.map(config => (
        <NutrientProgressBar
          key={config.label}
          label={config.label}
          current={config.current}
          max={config.max}
          top={config.top}
        />
      ))}

      <DontForgetSection tags={NUTRIENT_TAGS} />

      <FeatureCard
        title="Recipe Search by Ingredient"
        image={imgBrookeLarkRrzeCGujVfUUnsplash1}
        position="left"
        top="904px"
      />

      <CalendarIntegrationCard
        cardImage={imgBrookeLarkRrzeCGujVfUUnsplash2}
        chartImage={imgChart}
        arrowIcon={imgBasilArrowUpOutline1}
      />

      <FeatureCard
        title="Automatic Meal Plan"
        image={imgBrookeLarkRrzeCGujVfUUnsplash3}
        position="right"
        top="904px"
      />

      <BottomCtaSection arrowIcon={imgBasilArrowUpOutline} />
    </div>
  )
}

export default Home
