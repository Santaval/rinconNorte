import React from "react";
import { Link } from "react-router-dom";
import IngredientsRender from "../components/ingredient/Render";

function Ingredients() {
  return (
    <main className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Ingredientes</h1>
        <Link to="/ingredients/new" className="text-primary">
          Nuevo ingrediente
        </Link>
      </header>

      <IngredientsRender />
    </main>
  );
}

export default Ingredients;
