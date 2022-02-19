import React, { useEffect } from "react";

export const StopwatchTime = ({ setStart, setTime, timInt }) => {
  useEffect(() => {
    const startStopwatch = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
    timInt.current = startStopwatch;
    return () => {
      setStart(false);
      clearInterval(timInt.current);
    };
  }, []);
  return <div></div>;
};
