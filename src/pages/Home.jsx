import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { recipes } from '../data/recipes'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h2>Welcome to Our Recipe Collection</h2>
        <p>Explore our carefully curated selection of delicious recipes</p>
      </div>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default Home
