 import "../App.css";
import ripe from "../assets/r1.png";
import rp1 from "../assets/r2.webp";
import rp2 from "../assets/r3.webp";
import rp3 from "../assets/r4.webp";
import rp4 from "../assets/r5.webp";
import rp5 from "../assets/r6.webp";
import rp8 from "../assets/r8.webp";
import rp9 from "../assets/r9.webp";
import rp10 from "../assets/r10.webp";
import rp11 from "../assets/r11.webp";
import rp12 from "../assets/r12.webp";
import rp13 from "../assets/r13.webp";
import rp14 from "../assets/r14.webp";
import rp15 from "../assets/r15.webp";
import RecipeCard from "./RecipeCard";

function Home({ search }) {
  const recipes = [
    {
      idMeal: "1",
      strMeal: "Chicken Tikka Masala",
      strMealThumb: rp1,
    },
    {
      idMeal: "2",
      strMeal: "Vegan Bacon",
      strMealThumb: rp2,
    },
    {
      idMeal: "3",
      strMeal: "Copycat Mcdonald's Big Mac Sauce",
      strMealThumb: rp3,
    },
    {
      idMeal: "4",
      strMeal: "Crock-Pot Beef Roast",
      strMealThumb: rp4,
    },
    {
      idMeal: "5",
      strMeal: "Oven-Baked Ribs",
      strMealThumb: rp8,
    },
    {
      idMeal: "6",
      strMeal: "Mozzarella Sticks",
      strMealThumb: rp9,
    },
    {
      idMeal: "7",
      strMeal: "5 Minute Vegan Pancakes",
      strMealThumb: rp10,
    },
    {
      idMeal: "8",
      strMeal: "Shakshuka",
      strMealThumb: rp11,
    },
    
  ];
const popularRecipes = [
  {
    idMeal: "9",
    strMeal: "Simple Oven-Baked Sea Bass",
    strMealThumb: rp12,
  },
  {
    idMeal: "10",
    strMeal: "Beef & Broccoli Stir-fry",
    strMealThumb: rp13,
  },
  {
    idMeal: "11",
    strMeal: "Fajitas",
    strMealThumb: rp14,
  },
  {
    idMeal: "12",
    strMeal: "Whipped Cream Frosting",
    strMealThumb: rp15,
  },
];

const filteredPopularRecipes = popularRecipes.filter((recipe) =>
  recipe.strMeal.toLowerCase().includes(search.toLowerCase())
);
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">

      <div className="hero">
        <img
          src={ripe}
          alt="food"
          className="hero-img"
        />

        <div className="hero-content">
          <h1>Delicious Food Recipes 🍕</h1>

          <p>
            Discover tasty recipes from around the world
          </p>
        </div>
      </div>

      <div className="recent-recipes">
        <h2>Recent Recipes</h2>
      </div>

      <div className="food-gallery">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
            />
          ))
        ) : (
          <h2 className="no-result">
            No Recipe Found
          </h2>
        )}
      </div>

      <div className="mid-section">

        <div className="mid-l">
          <img src={rp5} alt="food" />
        </div>

        <div className="mid-r">

          <h2>
            32 Best Mac & Cheese Recipes
          </h2>

          <p>
            Cheesy and oh so satisfying,
            mac and cheese can do no wrong.
            Transport yourself back to childhood
            with one of these classic or kicked-up
            options.
          </p>

        </div>

      </div>

       
  <div className="recent-recipes">
  <h2>Popular Recipes</h2>
</div>

<div className="food-gallery">
  {filteredPopularRecipes.length > 0 ? (
    filteredPopularRecipes.map((recipe) => (
      <RecipeCard
        key={recipe.idMeal}
        recipe={recipe}
      />
    ))
  ) : (
    <h2 className="no-result">
      No Recipe Found
    </h2>
  )}
</div>
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-box">

            <h2>🍔 FoodRecipe</h2>

            <p>
              Discover delicious recipes from around
              the world with easy cooking ideas.
            </p>

          </div>

          <div className="footer-box">

            <h3>Quick Links</h3>

            <ul>
              <li>Home</li>
              <li>Recipes</li>
              <li>Favorites</li>
              <li>Contact</li>
            </ul>

          </div>

          <div className="footer-box">

            <h3>Follow Us</h3>

            <div className="social-links">

              <a href="/">Instagram</a>

              <a href="/">Facebook</a>

              <a href="/">YouTube</a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 FoodRecipe | All Rights Reserved
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;