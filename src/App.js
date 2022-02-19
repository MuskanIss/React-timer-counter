import "./App.css";
import { Timer } from "./components/Timer";
import { Stopwatch } from "./components/Stopwatch";
import style from "styled-components";
import React from "react";
const DispTimer = style.div`
display:${(props) => (props.displayv ? "block" : "none")}
`;
const DispStopwatch = style.div`
display:${(props) => (props.displayv ? "none" : "block")}
`;
const TimerButton = style.button`
border:none;
background-color:white;
`;
const StopwatchButton = style.button`
border:none;
background-color:white;
`;
const TimerBox = style.span`
border-bottom:${(props) => (props.displayv ? "4px solid blue" : "none")};
padding:10px;
`;
const StopwatchBox = style.span`
border-bottom:${(props) => (props.displayv ? "none" : "4px solid blue")};
padding:10px;
`;

function App() {
  const [displayv, setDisplay] = React.useState(true);
  return (
    <div className="App">
      <TimerBox displayv={displayv}>
        <TimerButton
          displayv={displayv}
          onClick={() => {
            setDisplay(true);
          }}
        >
          Timer
        </TimerButton>
      </TimerBox>
      <StopwatchBox displayv={displayv}>
        <StopwatchButton
          displayv={displayv}
          onClick={() => {
            setDisplay(false);
          }}
        >
          Stopwatch
        </StopwatchButton>
      </StopwatchBox>
      <DispTimer displayv={displayv}>
        <Timer />
      </DispTimer>
      <DispStopwatch displayv={displayv}>
        <Stopwatch />
      </DispStopwatch>
    </div>
  );
}

export default App;
