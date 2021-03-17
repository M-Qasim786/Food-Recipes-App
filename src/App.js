import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
const App = () => {
  const APP_ID = "134d1efe";
  const APP_KEY = "bcbf115d8312424e6ea1217de1be8bea";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getResponse();
  }, [query]);

  const getResponse = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="app">
      <form onSubmit={getSearch} className="search_form">
        <input
          type="text"
          value={search}
          placeholder="Search...."
          onChange={updateSearch}
          className="search_bar"
        />
        {/* <button type="submit" className="search_btn"> */}
        {/* Search */}
        {/* </button> */}
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
