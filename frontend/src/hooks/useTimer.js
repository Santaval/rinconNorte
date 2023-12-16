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
    executeInterval();
    setInterval(() => {
      executeInterval();
    }, 1000);
  }, [startDate]);

  const executeInterval = () => {
    const dataTime = timerFn(startDate, minutes);
    console.log(dataTime);
    if (dataTime) setTimer(dataTime);
  };

  return timer;
};

export default useTimer;
