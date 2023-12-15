import apiv1 from "../lib/apiv1";
import { useState } from "react";
import { toast } from "sonner";
const useNewMilkProvider = () => {
  const [newMilkProvider, setNewMilkProvider] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(false);

  const handelChange = (e) => {
    setNewMilkProvider({
      ...newMilkProvider,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiv1.post("/milkProviders", newMilkProvider);
    } catch (err) {
      toast.error(err.response.data);
    }
    setLoading(false);
  };

  return { newMilkProvider, handelChange, handelSubmit, loading };
};

export default useNewMilkProvider;