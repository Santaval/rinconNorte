import { useEffect, useState } from "react";
import apiv1 from "../lib/apiv1";
import { toast } from "sonner";

const useEditProcess = (process) => {
  const [processEdited, setProcessEdited] = useState(process);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProcessEdited(process);
  }, [process]);

  const nextStage = async () => {
    setLoading(true);
    const newProcess = {
      ...processEdited,
      currentStage: ++processEdited.currentStage,
      stagesTimes: [...JSON.parse(processEdited.stagesTimes), new Date()],
    };
    const { data } = await apiv1.put(
      `/process/${processEdited.id}`,
      newProcess
    );
    window.location.reload();
    setProcessEdited(data);
    setLoading(false);
  };

  const finishProcess = async (result) => {
    setLoading(true);
    if (!result) {
      toast.error("Debe ingresar un resultado");
      setLoading(false);
      return;
    }
    const newProcess = {
      ...processEdited,
      status: 2,
      finishedAt: new Date(),
      result,
    };
    try {
      const { data } = await apiv1.put(
        `/process/${processEdited.id}`,
        newProcess
      );
      setProcessEdited(data);
      window.location.reload();
    } catch {
      toast.error("Error al finalizar el proceso");
    }
    setLoading(false);
  };

  return { processEdited, loading, nextStage, finishProcess };
};

export default useEditProcess;
