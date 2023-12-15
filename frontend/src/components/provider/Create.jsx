import { Button, Input } from "@nextui-org/react";
import useNewMilkProvider from "../../hooks/useNewMilkProvider";

export default function CreateMilkProvider() {
  const { handelChange, handelSubmit, loading } = useNewMilkProvider();

  return (
    <form action="" onSubmit={handelSubmit}>
      <Input
        name="name"
        type="text"
        placeholder="Nombre del proveedor"
        label="Proveedor"
        onInput={handelChange}
      />

      <Button
        color="primary"
        variant="flat"
        type="submit"
        className="w-full mt-8"
        isLoading={loading}
      >
        Crear proveedor
      </Button>
    </form>
  );
}
