import { useState } from "react";
import { toast } from "sonner";
import apiv1 from "../lib/apiv1";

const useNewIngredient = () => {
  const [newIngredient, setNewIngredient] = useState({
    name: 0,
    measuramentUnit: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient({
      ...newIngredient,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!newIngredient.name || !newIngredient.measuramentUnit) {
      toast.error("Todos los campos son obligatorios");
        setLoading(false);
      return;
    }

    try {
      await apiv1.post("/ingredients", newIngredient);
      toast.success("Ingrediente agregado");
    } catch (err) {
      toast.error(err.response.data);
    }
    setLoading(false);
    e.target.reset();
  };

  return { newIngredient, handleChange, handleSubmit, loading };
};

export default useNewIngredient;
