import { useState } from "react";
import styles from "./App.module.css";
import RandomQuote from "./RandomQuote";
import Countdown from "./Countdown";
import ParentComponent from "./components/ParentComponent";
import CityList from "./components/CityList";
import BookWrapper from "./components/BookWrapper";
import CharacterCounter from "./components/CharacterCounter";


function App() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility(){
    setIsVisible((prev)=>!prev);
    setIsVisible((prev)=>!prev);
  }
  console.log(isVisible);




  const [formErrorStatus, setFormErrorStatus] = useState(false);

  const handleValidity = () => {
    const inputValue = document.getElementsByName("name")[0].value.trim();
    if (!inputValue) {
      setFormErrorStatus(true);
    } else {
      setFormErrorStatus(false);
    }
  };

  return (
    <>

    <button onClick={toggleVisibility}>Toggle</button>


      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className={`${formErrorStatus && styles.error}`}
      />
      <button onClick={handleValidity}>Click</button>

      <RandomQuote></RandomQuote>

      <ParentComponent></ParentComponent>

      <Countdown></Countdown>

      <CityList></CityList>

      <BookWrapper></BookWrapper>

      <CharacterCounter></CharacterCounter>

    </>
  );
}

export default App;
