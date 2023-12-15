import React from "react";
import { FaTrash } from "react-icons/fa";
import useMilk from "../../hooks/useMilk";
import formatTime from "../../lib/formatTime";

function MilkRender() {

  const {milk, deleteMilk} = useMilk();

  return (
    <div className="flex flex-col gap-4">
      {milk.map((milk) => (
        <div
          key={milk.id}
          className="flex justify-between items-center border-b shadow-sm p-2"
        >
          <div>
            <p>{milk.liters} Litros</p>
            <span className="text-xs text-gray-400">
              {formatTime(milk.createdAt)} - {milk.name}
            </span>
          </div>
            <button className="text-danger" onClick={() => deleteMilk(milk.id)}>
              <FaTrash />
            </button>
        </div>
      ))}
    </div>
  );
}

export default MilkRender;
