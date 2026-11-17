import React from "react";
import ClaudeListOfIngredients from "./ClaudeListOfIngredients.jsx";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import { getRecipeFromMistral } from "./ai.js";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  let [recipe, setRecipe] = React.useState('');

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown)
  }

  function addIngredients(formData) {
    const newIngredients = formData.get("ingredients")?.trim();
    if (newIngredients) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
    }
  }

  return (
    <main className="inter chef-main">
      <div className="form-wrapper">
        <form action={addIngredients} className="ingredient-form">
          <input
            className="ingredient-input"
            type="text"
            placeholder="eg: eggs"
            name="ingredients"
            aria-label="Add ingredient"
          />
          <button className="ingredient-add-btn">
            + Add ingredients
          </button>
        </form>

        {ingredients.length < 4 && (
          <p className="min-ingredients-note">
            {ingredients.length === 0
              ? "Please add at least 4 ingredients to generate a recipe."
              : `Please add at least 4 ingredients (${ingredients.length}/4 added).`}
          </p>
        )}
      </div>

      {ingredients.length > 0 && (
        <ClaudeListOfIngredients ingredients={ingredients} />
      )}

      {ingredients.length > 3 && (
        <div className="ready-for-recipe-box chef-card">
          <div className="recipe-callout-copy">
            <h3>Ready for recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button
            type="button"
            className="get-recipe-btn"
            onClick={getRecipe}
          >
            Get a recipe
          </button>
        </div>
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  )
}

