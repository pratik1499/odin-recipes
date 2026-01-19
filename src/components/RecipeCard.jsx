import { Link } from 'react-router-dom'
import '../styles/RecipeCard.css'

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <div className="recipe-card-image">
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <div className="recipe-card-content">
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <span className="view-recipe">View Recipe →</span>
      </div>
    </Link>
  )
}

export default RecipeCard
