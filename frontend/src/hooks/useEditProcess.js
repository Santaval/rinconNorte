import { useEffect, useState } from "react";
import apiv1 from "../lib/apiv1";

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
    console.log(newProcess);
    const { data } = await apiv1.put(
      `/process/${processEdited.id}`,
      newProcess
    );
    setProcessEdited(data);
    setLoading(false);
  };

  return { processEdited, loading, nextStage };
};

export default useEditProcess;
