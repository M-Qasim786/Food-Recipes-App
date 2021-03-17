import React from "react";
import "./Recipe.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe_div_style">
      <h1 className="style_recipe">{title}</h1>
      <img className="img_style" src={image} alt="" />
      <ul className="list_style">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <h2 className="text_style">{calories}</h2>
    </div>
  );
};

export default Recipe;
