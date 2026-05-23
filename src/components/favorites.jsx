 import { useEffect, useState } from "react";
import "../App.css";

function Favorites() {

  const [favorites, setFavorites] = useState([]);
 
  useEffect(() => {

    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);

  }, []);
 
  const clearFavorites = () => {

    localStorage.removeItem("favorites");

    setFavorites([]);
  };

  return (
    <div className="container">

      <div className="favorite-top">

        <h1>Favorite Recipes ❤️</h1>

        <button
          className="clear-btn"
          onClick={clearFavorites}
        >
          Remove All ❌
        </button>

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