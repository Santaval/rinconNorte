import { useEffect, useState } from "react";
import timerFn from "../lib/timer";

const useTimer = (startDate, minutes) => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const executeInterval = () => {
      const dataTime = timerFn(startDate, minutes);
      if (dataTime) setTimer(dataTime);
    };
    executeInterval();
    setInterval(() => {
      executeInterval();
    }, 1000);
  }, [startDate, minutes]);

  return timer;
};

export default useTimer;
