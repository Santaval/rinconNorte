import { useState } from "react";
import { toast } from "sonner";
import apiv1 from "../lib/apiv1";

const useNewMilk = () => {
  const [newMilk, setNewMilk] = useState({
    liters: 0,
    provider: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMilk({
      ...newMilk,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!newMilk.liters || !newMilk.provider) {
      toast.error("Todos los campos son obligatorios");
        setLoading(false);
      return;
    }

    try {
      await apiv1.post("/milk", newMilk);
      toast.success("Registro de leche creado");
    } catch (err) {
      toast.error(err.response.data);
    }
    setLoading(false);
    e.target.reset();
  };

  return { newMilk, handleChange, handleSubmit, loading };
};

export default useNewMilk;
