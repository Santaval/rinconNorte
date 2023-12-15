import { Button, Input } from "@nextui-org/react";
import useNewMilkProvider from "../../hooks/useNewMilkProvider";

export default function CreateMilkProvider() {
  const { handelChange, handelSubmit } = useNewMilkProvider();

  return (
    <form action="" className="p-8" onSubmit={handelSubmit}>
      <Input
        type="text"
        placeholder="Nombre del proveedor"
        label="Proveedor"
        onInput={handelChange}
      />

      <Button color="primary" variant="flat" type="submit" className="w-full mt-8">
        Crear proveedor
      </Button>
    </form>
  );
}
