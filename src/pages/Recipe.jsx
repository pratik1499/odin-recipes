import { useParams, Link } from 'react-router-dom'
import { recipes } from '../data/recipes'
import '../styles/Recipe.css'

function Recipe() {
  const { id } = useParams()
  const recipe = recipes.find((r) => r.id === id)

  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe not found</h2>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="recipe">
      <Link to="/" className="back-button">← Back to Recipes</Link>
      
      <div className="recipe-header">
        <div className="recipe-image">
          <img src={recipe.image} alt={recipe.name} />
        </div>
        <div className="recipe-info">
          <h1>{recipe.name}</h1>
          <p className="recipe-description">{recipe.description}</p>
        </div>
      </div>

      <div className="recipe-content">
        <section className="recipe-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="recipe-section">
          <h2>Steps</h2>
          <ol className="steps-list">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}

export default Recipe
