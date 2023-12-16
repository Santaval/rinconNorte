import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import useProducts from "../../hooks/useProducts";
import useNewProcess from "../../hooks/useNewProcess";

function CreateProcess() {
  const { products } = useProducts();
  const {handleChange, handleSubmit} = useNewProcess();

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <Select
          items={products}
          label="Producto"
          placeholder="Selecciona un producto"
          onChange={handleChange}
          name="product"
        >
          {(product) => (
            <SelectItem key={product.id}>{product.name}</SelectItem>
          )}
        </Select>

        <Input
          type="number"
          placeholder="Ingresa cantidad de leche"
          label="Leche"
          name="milk"
          onInput={handleChange}
        />
      </div>

      <Button className="mt-4 w-full" type="submit" color="primary" >
        Crear proceso
      </Button>
    </form>
  );
}

export default CreateProcess;
