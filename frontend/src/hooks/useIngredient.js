import { useEffect, useState } from "react";
import apiv1 from "../lib/apiv1";
import { toast } from "sonner";

const useIngredient = (id) => {
  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const { data } = await apiv1.get(`/ingredients/${id}`);
        setIngredient(data);
      } catch (error) {
        toast.error("Error al cargar el ingrediente");
      }
    };

    fetchIngredient();
  }, []);

  return { ingredient };
};

export default useIngredient;
