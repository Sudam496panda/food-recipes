 import { useEffect, useState } from "react";
import "../App.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
  }, []);

  // Remove a single recipe
  const removeFavorite = (idMeal) => {
    const updatedFavorites = favorites.filter(
      (recipe) => recipe.idMeal !== idMeal
    );

    setFavorites(updatedFavorites);
    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <div className="container">
      <div className="favorite-top">
        <h1>Favourite Recipes ❤️</h1>
      </div>

      <div className="food-gallery">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <div
              className="food-card"
              key={recipe.idMeal}
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />

              <h3>{recipe.strMeal}</h3>

              <button
                className="remove-btn"
                onClick={() => removeFavorite(recipe.idMeal)}
              >
                Remove ❌
              </button>
            </div>
          ))
        ) : (
          <h2>No Favorite Recipes</h2>
        )}
      </div>
    </div>
  );
}

export default Favorites;