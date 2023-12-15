import { useState } from "react";
import apiv1 from "../lib/apiv1";
import { toast } from "sonner";

const useNewProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    materials: [], // object {name: "", measuramentUnit: "g", quantity: 0}
    processStages: [], // object {name: "", duration: 0}
    measuramentUnit: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleMaterials = (newMaterial) => {
    setNewProduct({
      ...newProduct,
      materials: [...newProduct.materials, newMaterial],
    });
  };

  const handleProcessStages = (newStage) => {
    setNewProduct({
      ...newProduct,
      processStages: [...newProduct.processStages, newStage],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiv1.post("/products", newProduct);
      toast.success("Producto creado");
      e.target.reset();
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };

  return {
    newProduct,
    loading,
    handleChange,
    handleMaterials,
    handleProcessStages,
    handleSubmit,
  };
};

export default useNewProduct;
