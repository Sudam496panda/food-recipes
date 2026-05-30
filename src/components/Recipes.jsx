 import React from "react";
import rp16 from "../assets/r16.webp";
import r17 from "../assets/r17.webp";
import r18 from "../assets/r18.webp";
import r19 from "../assets/r19.webp";
import r20 from "../assets/r20.webp";
import r21 from "../assets/r21.webp";
import r22 from "../assets/r22.webp";
import r23 from "../assets/r23.webp";

import "../App.css";

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      name: "Chicken Curry",
      image: rp16,
    },
    {
      id: 2,
      name: "Paneer Tikka",
      image: r17,
    },
    {
      id: 3,
      name: "Veg Biryani",
      image: r18,
    },
    {
      id: 4,
      name: "Momos",
      image: r19,
    },
    {
      id: 5,
      name: "Pizza",
      image: r20,
    },
    {
      id: 6,
      name: "Burger",
      image: r21,
    },
    {
      id: 7,
      name: "Pasta",
      image: r22,
    },
    {
      id: 8,
      name: "Chocolate Cake",
      image: r23,
    },
  ];

  return (
    <div className="container">

      <div className="recent-recipes">
        <h2>All Recipes</h2>
      </div>

      <div className="food-gallery">
        {recipes.map((recipe) => (
          <div
            className="recipe-card"
            key={recipe.id}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
            />

            <h2>{recipe.name}</h2>

            <button>
              View Recipe
            </button>
          </div>
        ))}
      </div>
 <div className="recent-recipes">
  <h2>Contact Us</h2>
</div>

<div className="contact-section">

  <form className="contact-form">

    <input
      type="text"
      placeholder="Enter Your Name"
      required
    />

    <input
      type="email"
      placeholder="Enter Your Email"
      required
    />

    <input
      type="text"
      placeholder="Subject"
      required
    />

    <textarea
      rows="6"
      placeholder="Your Message"
      required
    ></textarea>

    <button type="submit">
      Send Message
    </button>

  </form>

</div>

    </div>
  );
};

export default Recipes;