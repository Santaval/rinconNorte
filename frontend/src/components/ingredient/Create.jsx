import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import useNewIngredient from "../../hooks/useNewIngredient";
import measuramentUnits from "../../lib/MeasuramentsUnits";

function CreateIngredient() {
  const { handleChange, handleSubmit, loading } = useNewIngredient();

  return (
    <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Nombre"
        placeholder="Nombre del ingrediente"
        type="text"
        onInput={handleChange}
      />

      <Select
        items={measuramentUnits}
        label="Unidad de medida"
        placeholder="Selecciona una unidad de medida"
        onChange={handleChange}
        name="measuramentUnit"
      >
        {(unit) => (
          <SelectItem
            key={unit.abbreviation}
          >
            {unit.name}
          </SelectItem>
        )}
      </Select>

      <Button color="primary" type="submit" isLoading={loading}>
        Guardar
      </Button>
    </form>
  );
}

export default CreateIngredient;
