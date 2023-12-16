import { useEffect } from "react";
import { useState } from "react";
import apiv1 from "../lib/apiv1";

const useProcess = () => {
  const [process, setProcess] = useState([]);

  useEffect(() => {
    const fetchProcess = async () => {
      const { data } = await apiv1.get("/process");
      setProcess(data.process);
    };
    fetchProcess();
  }, []);

  return { process };
};

export default useProcess;
