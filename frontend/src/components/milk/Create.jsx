import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import useProviders from "../../hooks/useProviders";
import useNewMilk from "../../hooks/useNewMilk";

function CreateMilk() {
  const { providers } = useProviders();
  const { handleChange, handleSubmit, loading } = useNewMilk();

  return (
    <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        name="liters"
        label="Litros"
        placeholder="Litos de leche"
        type="number"
        onInput={handleChange}
      />

      <Select
        items={providers}
        label="Proveedores"
        placeholder="Selecciona un proveedor"
      >
        {(provider) => (
          <SelectItem
            onPress={handleChange({
              target: { name: "provider", value: provider.id },
            })}
            key={provider.id}
          >
            {provider.name}
          </SelectItem>
        )}
      </Select>

      <Button color="primary" type="submit" isLoading={loading}>
        Guardar
      </Button>
    </form>
  );
}

export default CreateMilk;
