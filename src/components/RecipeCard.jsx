import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired
}

export default RecipeCard
