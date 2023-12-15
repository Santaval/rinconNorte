import React from "react";
import { Chip } from "@nextui-org/react";
import ViewMilk from "./ViewMilk";

function Process({ receivedProcess }) {
  const liters = JSON.parse(receivedProcess.milk).reduce(
    (acc, milk) => parseFloat(acc) + parseFloat(milk.liters),
    0
  );

  return (
    <div>
      <div>
        <Chip color="warning" className="text-white">
          Proceso #{receivedProcess.id}
        </Chip>
        <div className="flex justify-between p-3 gray-bg">
          <div>
            <h6 className="text-gray-500">Leche</h6>
            <span>{liters} L</span>
          </div>

          <div>
            <h6 className="text-gray-500">Sal</h6>
            <span>{((liters * 2) / 98).toFixed(4)} g</span>
          </div>

          <div>
            <h6 className="text-gray-500">Calcio</h6>
            <span>{liters * 0.25} ml</span>
          </div>

          <div>
            <h6 className="text-gray-500">Cuajo</h6>
            <span>{(((liters * 0.016) / 98) * 1000).toFixed(4)} ml</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-center">
      <ViewMilk milkArray={receivedProcess.milk}/>
      <Chip color="success" className="text-white"> {receivedProcess.kg} kg </Chip>
      <Chip color="danger" className="text-white"> {new Date(receivedProcess.date)} </Chip>
      </div>
    </div>
  );
}

export default Process;
