import { useState } from "react";
import styles from "./Countdown.module.css"

function Countdown() {
  const [timer, setTimer] = useState("");

  function generateTimer() {
    const timer = `${minutes} ${seconds}`;
  }

  return (
  <>
    <h2> Time left: {generateTimer}</h2>
  </>
  )
}

export default Countdown;
