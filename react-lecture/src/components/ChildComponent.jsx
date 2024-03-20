import { useState } from "react";

function ChildComponent({ createRandom }) {
  return (
    <>
     <button onClick={()=> createRandom(10)}>Click</button>
    </>
  );
}

export default ChildComponent;
