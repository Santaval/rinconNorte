import { toast } from "sonner";
import apiv1 from "../lib/apiv1";
import { useState } from "react";

const useNewProcess = () => {
  const [newProcess, setNewProcess] = useState({
    product: null,
    milk: null,
  });

  const handleChange = (e) => {
    setNewProcess({
      ...newProcess,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newProcess.product === null || newProcess.milk === null) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      await apiv1.post("/process", newProcess);
      toast.success("Proceso creado correctamente");
      e.target.reset();
    } catch (err) {
      toast.error("Error al crear el proceso");
    }
  };

  return { newProcess, handleChange, handleSubmit}
};

export default useNewProcess;