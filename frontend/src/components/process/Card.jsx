import React, { useEffect, useState } from "react";
import formatTime from "../../lib/formatTime";
import Ingredient from "../ingredient/Ingredient";
import useTimer from "../../hooks/useTimer";
import { Button, Input } from "@nextui-org/react";
import useEditProcess from "../../hooks/useEditProcess";

function ProcessCard({ process }) {
  const [result, setResult] = useState(null);
  const { nextStage, finishProcess } = useEditProcess(process);

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
            {process.status !==2 ? JSON.parse(process.processStages)[process.currentStage].name : "Finalizado"}
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

      <footer className="flex items-center">
       {process.status !== 2 && <div className="flex flex-col mt-4 w-full">
          <span>Temporizador</span>
          <span
            className={`text-md ${
              seconds < 0 ? "text-danger" : "text-success"
            }`}
          >
            {hours} : {minutes} : {seconds}
          </span>
        </div>}

        {process.status !== 2 ? (
          <div>
            {process.currentStage === processStages.length - 1 ? (
              <form className="flex flex-col gap-2 mt-4">
                <Input
                  onInput={(e) => setResult(e.target.value)}
                  name="quantity"
                  placeholder="Cantidad"
                  endContent={process.measuramentUnit}
                />
                <Button
                  onPress={() => finishProcess(result)}
                  color="success"
                  variant="flat"
                >
                  Finalizar Proceso
                </Button>
              </form>
            ) : (
              <Button onPress={nextStage} color="success" variant="flat">
                Iniciar {processStages[process.currentStage + 1].name}
              </Button>
            )}
          </div>
        ) : (
          <div className="w-1/2 mt-4">
            <span className="text-md text-danger">Proceso Finalizado</span>
            <span>
              <br />
              {formatTime(process.finishedAt)}
            </span>
            <span>
              {" "}
              <br />
              {process.result} {process.measuramentUnit}
            </span>
          </div>
        )}
      </footer>
    </article>
  );
}

export default ProcessCard;
