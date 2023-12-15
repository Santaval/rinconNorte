import React from "react";
import useNewProduct from "../../hooks/useNewProduct";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import useIngredients from "../../hooks/useIngredients";
import measuramentUnits from "../../lib/MeasuramentsUnits";

function CreateProduct() {
  const {
    handleChange,
    loading,
    handleProcessStages,
    handleMaterials,
    handleSubmit,
    newProduct,
  } = useNewProduct();
  const [newMaterial, setNewMaterial] = React.useState({
    name: "",
    quantity: 0,
  });
  const [newStage, setNewStage] = React.useState({
    name: "",
    duration: 0,
  });

  const { ingredients } = useIngredients();

  return (
    <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        label="Nombre del producto"
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <Input
        label="Precio de venta"
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />

      <Select
        items={measuramentUnits}
        label="Unidad de medida"
        placeholder="Selecciona una unidad de medida"
        onChange={handleChange}
        name="measuramentUnit"
      >
        {(unit) => <SelectItem key={unit.abbreviation}>{unit.name}</SelectItem>}
      </Select>

      <h3>Ingredientes</h3>

      <ul>
        {newProduct.materials.map((material) => (
          <li>
            ~ {material.name} - {material.quantity} {material.measuramentUnit}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 items-center">
        <Select
          placeholder="Selecciona un ingrediente"
          onChange={(e) =>
            setNewMaterial({ ...newMaterial, name: e.target.value })
          }
          items={ingredients}
        >
          {(ingredient) => (
            <SelectItem value={ingredient.id}>{ingredient.name}</SelectItem>
          )}
        </Select>

        <Input
          label="Cantidad * litro"
          type="number"
          name="quantity"
          placeholder="Cantidad"
          onChange={(e) =>
            setNewMaterial({ ...newMaterial, quantity: e.target.value })
          }
        />

        <Button
          color="primary"
          className="w-full"
          onClick={() => handleMaterials(newMaterial)}
        >
          Agregar ingrediente
        </Button>
      </div>

      <h3>Etapa</h3>

      <ul>
        {newProduct.processStages.map((stage) => (
          <li>
            ~ {stage.name} - {stage.duration} minutos
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 items-center">
        <Input
          label="Nombre de la etapa"
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setNewStage({ ...newStage, name: e.target.value })}
        />

        <Input
          label="Duración en minutos"
          type="number"
          name="duration"
          placeholder="Duración "
          onChange={(e) =>
            setNewStage({ ...newStage, duration: e.target.value })
          }
        />

        <Button
          color="primary"
          className="w-full"
          onClick={() => handleProcessStages(newStage)}
        >
          Agregar etapa
        </Button>
      </div>

      <Button type="submit" color="primary" isLoading={loading}>
        Crear
      </Button>
    </form>
  );
}

export default CreateProduct;
