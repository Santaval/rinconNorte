import React from "react";
import formatTime  from "../../lib/formatTime";
import Ingredient from "../ingredient/Ingredient";

function ProcessCard({ process }) {
  return (
    <article className="shadow-lg p-2 rounded-md">
      <header className="flex justify-between">
        <div className="flex flex-col">
          <span>Proceso - {process.name}</span>
          <span className="text-xs text-gray-400">#{process.id}</span>
        </div>
        <div className="flex flex-col">
          <span>Etapa Actual</span>
          <span className="text-xs text-gray-400">
            {JSON.parse(process.processStages)[process.currentStage].name}
          </span>
        </div>

        <div className="flex flex-col">
          <span>Fecha de creación</span>
          <span className="text-xs text-gray-400">{formatTime(process.createdAt)}</span>
        </div>
      </header>

        <h5 className="mt-4">
            Ingredientes
        </h5>
        <ul className="mt-4">
            {JSON.parse(process.materials).map((item) => (
                <li key={item.id}>
                    <Ingredient ingredientId={item.name} milk={process.milk} quantity={item.quantity}/>
                </li>
            ))}
        </ul>
    </article>
  );
}

export default ProcessCard;
