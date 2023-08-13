import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import axios from "axios";
import API from "../lib/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function AddMilk({ milkArray, id }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [milk, setMilk] = useState(null);
  const [provider, setProvider] = useState(null);
  const [milkArr, setMilkArr] = useState(milkArray);

  const handdleNewMilk = async () => {
    await axios.put(`${API}/cheese/${id}`, {
      milk: milkArr.concat({
        liters: milk,
        provider,
      }),
    });
    setMilkArr(
      milkArr.concat({
        liters: milk,
        provider,
      })
    );
  };

  const handdleDeleteMilk = async (liters, provider) => {
    await axios.put(`${API}/cheese/${id}`, {
      milk: milkArr.filter(
        (milk) => milk.liters !== liters && milk.provider !== provider
      ),
    });
    setMilkArr(
      milkArr.filter(
        (milk) => milk.liters !== liters && milk.provider !== provider
      )
    );
  };

  return (
    <>
      <Button onPress={onOpen}>Leche</Button>
      <Modal isOpen={isOpen} size="sm" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Agregar Leche
              </ModalHeader>
              <ModalBody>
                <div className="flex gap-3">
                  <Input
                    onChange={(evt) => setMilk(evt.target.value)}
                    type="number"
                    placeholder="Litros de leche"
                  />
                  <Input
                    onChange={(evt) => setProvider(evt.target.value)}
                    type="text"
                    placeholder="Proveedor"
                  />

                  {milk && milk > 0 && provider && (
                    <Button
                      onPress={handdleNewMilk}
                      color="primary"
                      variant="flat"
                    >
                      Agregar
                    </Button>
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  {milkArr.map((milk) => (
                    <div className="flex gap-2">
                      <span>{milk.liters} litros</span>
                      <span>{milk.provider}</span>
                      <Button
                        onPress={() =>
                          handdleDeleteMilk(milk.liters, milk.provider)
                        }
                        color="danger"
                        variant="flat"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </Button>
                    </div>
                  ))}

                  {milkArr.length === 0 && <span>No hay leche</span>}

                  {milkArr.length !== 0 && (
                    <span>
                      Total:{" "}
                      {milkArr.reduce((acc, milk) => acc + milk.liters, 0)} {" "}
                      Litros
                    </span>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
