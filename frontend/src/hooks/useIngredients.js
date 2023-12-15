import { useEffect, useState } from "react";
import apiv1 from "../lib/apiv1";
import { toast } from "sonner";

const useIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const { data } = await apiv1.get("/ingredients");
        setIngredients(data);
      } catch (err) {
        toast.error(err.response.data);
      }
    };
    fetchIngredients();
  }, []);

  const deleteIngredient = async (id) => {
    try {
      await apiv1.delete(`/ingredients/${id}`);
      setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
      toast.success("Registro de leche eliminado");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return { ingredients, deleteIngredient };
};

export default useIngredients;
