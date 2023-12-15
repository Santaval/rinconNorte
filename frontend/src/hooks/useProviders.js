import { useEffect, useState } from "react";
import apiv1 from "../lib/apiv1";
import { toast } from "sonner";

const useProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const { data } = await apiv1.get("/milkproviders");
        setProviders(data);
      } catch (err) {
        toast.error(err.response.data);
      }
    };
    fetchProviders();
  }, []);

  const deleteProvider = async (id) => {
    try {
      await apiv1.delete(`/milkproviders/${id}`);
      setProviders(providers.filter((provider) => provider.id !== id));
      toast.success("Proveedor de leche eliminado");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return { providers, deleteProvider };
};

export default useProviders;
