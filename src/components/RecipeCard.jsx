 import "../App.css";

function RecipeCard({ recipe }) {
  const addToFavorites = () => {
    const oldFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyExists = oldFavorites.find(
      (item) => item.idMeal === recipe.idMeal
    );

    if (alreadyExists) {
      alert("Already Added ❤️");
      return;
    }

    oldFavorites.push(recipe);

    localStorage.setItem(
      "favorites",
      JSON.stringify(oldFavorites)
    );

    alert("Added to Favorites ❤️");
  };

  return (
    <div className="recipe-card">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />

      <h2>{recipe.strMeal}</h2>

      <button onClick={addToFavorites}>
        Add to Favorites ❤️
      </button>
    </div>
  );
}

export default RecipeCard;