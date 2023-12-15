import React from "react";
import useNewProduct from "../../hooks/useNewProduct";
import { Button, Input } from "@nextui-org/react";

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

      <Input
        label="Unidad de medida"
        type="text"
        name="measuramentUnit"
        placeholder="KG, L, etc"
      />

      <h3>Ingredientes</h3>

      <ul>
        {newProduct.materials.map((material) => (
          <li>
            ~ {material.name} - {material.quantity} {material.measuramentUnit}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 items-center">
        <Input
          label="Nombre"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={(e) =>
            setNewMaterial({ ...newMaterial, name: e.target.value })
          }
        />

        <Input
          label="Cantidad * litro"
          type="number"
          name="quantity"
          placeholder="Cantidad"
          onChange={(e) =>
            setNewMaterial({ ...newMaterial, quantity: e.target.value })
          }
        />

        <Input
          label="Unidad de medida"
          type="text"
          name="quantity"
          placeholder="Unidad de medida"
          onChange={(e) =>
            setNewMaterial({ ...newMaterial, measuramentUnit: e.target.value })
          }
        />

        <Button color="primary" className="w-full" onClick={() => handleMaterials(newMaterial)}>
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

        <Button color="primary" className="w-full"  onClick={() => handleProcessStages(newStage)}>
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
