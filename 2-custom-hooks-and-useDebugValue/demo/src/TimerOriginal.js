import React, { useEffect, useState } from "react";

function Timer(props) {
  const interval = props.interval || 1000;
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("run effect");
    const intervalId = window.setInterval(() => {
      setTime(currentTime => currentTime + 1);
    }, interval);
    return () => {
      window.clearInterval(intervalId);
    };
  }, [props.interval]);

  return <h2>{time} second passed</h2>;
}

export default Timer;
