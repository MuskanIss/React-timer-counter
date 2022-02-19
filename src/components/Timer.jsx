import React, { useEffect, useRef } from "react";
import { TimerTime } from "./TimerTime";
import style from "styled-components";
const InputDiv = style.div`
`;

export const Timer = () => {
  const [timeInput, setTimeInput] = React.useState(false);
  const [time, setTime] = React.useState(300);
  const [start, setStart] = React.useState(false);
  var TimeInput = useRef();
  const whileChange = (e) => {
    if (e.currentTarget.value.length === 2) {
      setTime(
        parseInt(e.currentTarget.value[0] + "" + e.currentTarget.value[1]) *
          3600
      );
      e.currentTarget.value += "hr";
    }
    if (e.currentTarget.value.length === 6) {
      const temp =
        parseInt(e.currentTarget.value[4] + "" + e.currentTarget.value[5]) * 60;
      setTime((prev) => prev + temp);
      e.currentTarget.value += "m";
    }
    if (e.currentTarget.value.length === 9) {
      const temp = parseInt(
        e.currentTarget.value[7] + "" + e.currentTarget.value[8]
      );
      setTime((prev) => prev + temp);
      e.currentTarget.value += "s";
    }
  };
  const timInt = React.useRef();
  const curhr = React.useRef();
  const curmin = React.useRef();
  const cursec = React.useRef();
  curhr.current = parseInt(time / 3600);
  curmin.current = parseInt((time - curhr.current * 3600) / 60);
  cursec.current = parseInt(
    (time - curhr.current * 3600 - curmin.current * 60) / 1
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
    setTime(300);
  };
  return (
    <>
      {start ? (
        <TimerTime
          setTime={setTime}
          timInt={timInt}
          time={time}
          setStart={setStart}
        />
      ) : (
        <></>
      )}
      <div
        onClick={() => {
          setStart(false);
          clearInterval(timInt.current);
          setTimeInput(true);
        }}
      >
        {timeInput ? (
          <InputDiv>
            <input
              autoFocus
              placeholder="00hr00m00s"
              onChange={(e) => whileChange(e)}
              onBlur={() => {
                // setTime();
                setTimeInput(false);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 8) {
                  if (e.currentTarget.value.length === 4) {
                    e.currentTarget.value = "";
                  } else if (e.currentTarget.value.length === 7) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, 5);
                  } else if (e.currentTarget.value.length === 10) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, 7);
                  }
                }
              }}
              ref={TimeInput}
            />
          </InputDiv>
        ) : (
          <div>
            {curhr.current > 0 ? <span>{curhr.current}h</span> : <></>}
            {curhr.current > 0 || curmin.current > 0 ? (
              <span>{curmin.current}m</span>
            ) : (
              <></>
            )}
            <span>{cursec.current}s</span>
          </div>
        )}
      </div>
      <button onClick={() => onStart()}>{start ? "STOP" : "START"}</button>
      <button onClick={() => onReset()}>RESET</button>
    </>
  );
};
