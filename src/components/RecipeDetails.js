import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeDetails = ({ recipeId, onClose }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=901f5e5b671844b9836e7e20ad85a40e`
      );
      setRecipe(response.data);
    };

    if (recipeId) {
      fetchRecipeDetails();
    }
  }, [recipeId]);

  if (!recipe) return null;

  return (
    <div className="recipe-details">
      <button onClick={onClose} className="close-btn">X</button>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p dangerouslySetInnerHTML={{ __html: recipe.description }}></p>
      <h3>Ingredients :</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p dangerouslySetInnerHTML={{ __html:recipe.instructions }}></p>
    </div>
  );
};

export default RecipeDetails;
