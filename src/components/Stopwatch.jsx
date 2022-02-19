import React from "react";
import { StopwatchTime } from "./StopwatchTime";

export const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [start, setStart] = React.useState(false);
  const timInt = React.useRef();
  const curhr = React.useRef();
  const curmin = React.useRef();
  const cursec = React.useRef();
  const milsec1 = React.useRef();
  const milsec2 = React.useRef();
  curhr.current = parseInt(time / 3600000);
  curmin.current = parseInt((time - curhr.current * 3600000) / 60000);
  cursec.current = parseInt(
    (time - curhr.current * 3600000 - curmin.current * 60000) / 1000
  );
  milsec1.current = parseInt(
    (time -
      curhr.current * 3600000 -
      curmin.current * 60000 -
      cursec.current * 1000) /
      100
  );
  milsec2.current = parseInt(
    (time -
      curhr.current * 3600000 -
      curmin.current * 60000 -
      cursec.current * 1000 -
      milsec1.current * 100) /
      10
  );
  const onStart = () => {
    if (start === false) {
      setStart(true);
    } else {
      setStart(false);
      clearInterval(timInt.current);
    }
  };
  const onReset = () => {
    setStart(false);
    clearInterval(timInt.current);
    setTime(0);
  };
  return (
    <>
      <div>
        {start ? (
          <StopwatchTime
            setTime={setTime}
            timInt={timInt}
            time={time}
            setStart={setStart}
          />
        ) : (
          <></>
        )}
        {curhr.current > 0 ? <span>{curhr.current}h</span> : <></>}
        {curhr.current > 0 || curmin.current > 0 ? (
          <span>{curmin.current}m</span>
        ) : (
          <></>
        )}
        <span>
          {cursec.current}s{milsec1.current}
          {milsec2.current}
        </span>
      </div>
      <button onClick={() => onStart()}>{start ? "STOP" : "START"}</button>
      <button onClick={() => onReset()}>RESET</button>
    </>
  );
};
