import { useEffect, useState, useDebugValue } from "react";

function useTimer(interval = 1000) {
  const [time, setTime] = useState(0);

  useDebugValue(`Interval: ${interval}`);

  useEffect(() => {
    console.log("run effect");
    const intervalId = window.setInterval(() => {
      setTime(currentTime => currentTime + 1);
    }, interval);
    return () => {
      window.clearInterval(intervalId);
    };
  }, [interval]);

  return time;
}

export default useTimer;
