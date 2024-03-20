import { useState } from "react";

function CharacterCounter() {

	const [counter, setCounter] = useState (0)

	function countChars(e) {
		setCounter(e.target.value)
	} 
	
	return(
		<>


		<input onInput={countChars} type="text" placeholder="please write here!"></input>

		<h2>{counter.length}</h2>
		</>
	)
}

export default CharacterCounter;