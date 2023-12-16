import React, { useEffect } from "react";
import formatTime from "../../lib/formatTime";
import Ingredient from "../ingredient/Ingredient";
import useTimer from "../../hooks/useTimer";

function ProcessCard({ process }) {
  const processStages = JSON.parse(process.processStages);
  const stagesTimes = JSON.parse(process.stagesTimes);
  const currentStage = processStages[process.currentStage];

  const { hours, minutes, seconds } = useTimer(
    stagesTimes[process.currentStage],
    currentStage.duration
  );

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
          <span className="text-xs text-gray-400">
            {formatTime(process.createdAt)}
          </span>
        </div>
      </header>

      <h5 className="mt-4">Ingredientes</h5>
      <ul className="mt-4">
        {JSON.parse(process.materials).map((item) => (
          <li key={item.id}>
            <Ingredient
              ingredientId={item.name}
              milk={process.milk}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>

      <div className="flex flex-col mt-4 w-full">
        <span>Temporizador</span>
        <span
          className={`text-md ${
            seconds < 0 ? "text-danger" : "text-success"
          }`}
        >
          {hours} : {minutes} : {seconds}
        </span>
      </div>
    </article>
  );
}

export default ProcessCard;
