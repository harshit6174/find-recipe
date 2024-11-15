import React from 'react';

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div className="recipe-card" onClick={() => onSelect(recipe.id)}>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
    </div>
  );
};

export default RecipeCard;
