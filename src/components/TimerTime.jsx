import React, { useEffect } from "react";

export const TimerTime = ({ setStart, setTime, timInt }) => {
  useEffect(() => {
    const startTimer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(timInt.current);
          setStart(false);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    timInt.current = startTimer;
    return () => {
      setStart(false);
      clearInterval(timInt.current);
    };
  }, []);
  return <div></div>;
};
