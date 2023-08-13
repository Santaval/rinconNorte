import React, { useEffect, useState } from "react";
import AddMilk from "./AddMilk";
import { Button, Chip, Input } from "@nextui-org/react";
import timer from "../lib/timer";
import axios from "axios";
import API from "../lib/API";

function Process({ receivedProcess }) {
  const [reposeEnd, setReposeEnd] = useState(null);
  const [rennetEnd, setRennetEnd] = useState(null);
  const [process, setProcess] = useState(receivedProcess);
  const [kg, setKg] = useState(null);
  const liters = JSON.parse(process.milk).reduce(
    (acc, milk) => parseInt(acc) + parseInt(milk.liters),
    0
  );

  const handdleReposeStart = async () => {
    await axios.put(`${API}/cheese/${process.id}`, {
      reposeStart: new Date(),
    });

    setProcess({
      ...process,
      reposeStart: new Date(),
    });
  };

  const handdleRennetStart = async () => {
    await axios.put(`${API}/cheese/${process.id}`, {
      rennetStart: new Date(),
    });

    setProcess({
      ...process,
      rennetStart: new Date(),
    });
  };

  const handdleFinish = async () => {
    await axios.put(`${API}/cheese/${process.id}`, {
      kg,
    });

    setProcess({
      ...process,
      kg,
    });

    window.location.reload();
  };

  useEffect(() => {
    if (process.reposeStart) {
      setInterval(() => {
        setReposeEnd(timer(process.reposeStart, 1));
      }, 1000);
    }
  }, [process]);

  useEffect(() => {
    if (process.rennetStart) {
      setInterval(() => {
        setRennetEnd(timer(process.rennetStart, .5));
      }, 1000);
    }
  }, [process]);

  return (
    <div>
      <div>
        <Chip color="warning" className="text-white">
          Proceso #{process.id}
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
            <span>{liters * 0.25} Oz</span>
          </div>

          <div>
            <h6 className="text-gray-500">Cuajo</h6>
            <span>{((liters * 0.016) / 98).toFixed(4)} Oz</span>
          </div>
        </div>
        {!process.reposeStart && (
          <div className="flex  gap-2">
            <AddMilk milkArray={JSON.parse(process.milk)} id={process.id} />
            {process.milk && JSON.parse(process.milk).length > 0 && (
              <Button
                onPress={() => handdleReposeStart()}
                color="primary"
                variant="flat"
              >
                Iniciar reposo
              </Button>
            )}
          </div>
        )}
        {reposeEnd && reposeEnd.minutes > 0 && (
          <div>
            <h6 className="text-gray-500">Reposo</h6>
            <span>
              {reposeEnd.minutes}:{reposeEnd.seconds}
            </span>
          </div>
        )}
        {reposeEnd && reposeEnd.minutes < 0 && !process.rennetStart && (
          <Button
            onPress={() => handdleRennetStart()}
            color="primary"
            variant="flat"
          >
            Iniciar cuajo
          </Button>
        )}

        {rennetEnd && rennetEnd.minutes > 0 && (
          <div>
            <h6 className="text-gray-500">Cuajo</h6>
            <span>
              {rennetEnd.minutes}:{rennetEnd.seconds}
            </span>
          </div>
        )}

        {rennetEnd && rennetEnd.minutes < 0 && (
          <div className="flex mt-4 gap-4">
            <Input
              onInput={(evt) => setKg(evt.target.value)}
              placeholder="Ingrese el peso del queso"
              type="number"
            />
           {kg && kg > 0 && <Button onClick={handdleFinish} color="primary" variant="flat">
              {" "}
              Finalizar proceso
            </Button>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Process;
