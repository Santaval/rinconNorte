import { useEffect, useState } from "react";
import apiv1 from "../lib/apiv1";
import { toast } from "sonner";

const useMilk = () => {
  const [milk, setMilk] = useState([]);

  useEffect(() => {
    const fetchMilk = async () => {
      try {
        const { data } = await apiv1.get("/milk");
        setMilk(data.milk);
      } catch (err) {
        toast.error(err.response.data);
      }
    };
    fetchMilk();
  }, []);

  const deleteMilk = async (id) => {
    try {
      await apiv1.delete(`/milk/${id}`);
      setMilk(milk.filter((provider) => provider.id !== id));
      toast.success("Registro de leche eliminado");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return { milk, deleteMilk };
};

export default useMilk;
