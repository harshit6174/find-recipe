import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const searchRecipes = async (query) => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=901f5e5b671844b9836e7e20ad85a40e`
    );
    setRecipes(response.data.results);
    setSelectedRecipeId(null); 
  };

  const handleRecipeSelect = (recipeId) => {
    setSelectedRecipeId(recipeId);
  };

  const closeRecipeDetails = () => {
    setSelectedRecipeId(null);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={searchRecipes} />
      {selectedRecipeId ? (
        <RecipeDetails recipeId={selectedRecipeId} onClose={closeRecipeDetails} />
      ) : (
        <RecipeList recipes={recipes} onSelect={handleRecipeSelect} />
      )}
    </div>
  );
};

export default App;
