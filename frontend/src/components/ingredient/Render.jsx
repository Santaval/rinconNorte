import React from "react";
import { FaTrash } from "react-icons/fa";
import useIngredients from "../../hooks/useIngredients";

function IngredientsRender() {

  const {ingredients, deleteIngredient} = useIngredients();

  return (
    <div className="flex flex-col gap-4">
      {ingredients.map((ingredient) => (
        <div
          key={ingredient.id}
          className="flex justify-between items-center border-b shadow-sm p-2"
        >
          <div>
            <p>{ingredient.name}</p>
            <span className="text-xs text-gray-400">
              {ingredient.measuramentUnit}
            </span>
          </div>
            <button className="text-danger" onClick={() => deleteIngredient(ingredient.id)}>
              <FaTrash />
            </button>
        </div>
      ))}
    </div>
  );
}

export default IngredientsRender;
