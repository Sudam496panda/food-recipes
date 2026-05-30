 import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RecipeCard from "./components/RecipeCard";
import Favorites from "./components/Favorites";
import Recipes from "./components/Recipes";


function App() {

  const [search, setSearch] = useState("");

  const recipe = {
    idMeal: "1",
    strMeal: "Chicken Burger",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
  };

  return (
    <BrowserRouter>

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Routes>
 
        <Route
          path="/"
          element={<Home search={search} />}
        /> 
        <Route
          path="/RecipeCard"
          element={
            <div className="container">
              <RecipeCard recipe={recipe} />
            </div>
          }
        />
 
        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/Recipes"
          element={<Recipes />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;