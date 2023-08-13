import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";



export default function AddMilk({ milkArray, id }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [milkArr] = useState(JSON.parse(milkArray));

  return (
    <>
      <Button color="secondary" variant="flat" onPress={onOpen}>
        Leche
      </Button>
      <Modal isOpen={isOpen} size="sm" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Leche
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-2 mt-4">
                  {milkArr.map((milk) => (
                    <div className="flex gap-2">
                      <span>{milk.liters} litros</span>
                      <span>{milk.provider}</span>
                    </div>
                  ))}

                  <span>
                    Total:{" "}
                    {milkArr.reduce(
                      (acc, milk) => parseInt(acc) + parseInt(milk.liters),
                      0
                    )}{" "}
                    Litros
                  </span>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="success"
                  variant="flat"
                  onClick={onClose}
                >
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
