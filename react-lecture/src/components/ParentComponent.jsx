import ChildComponent from "./ChildComponent";
function ParentComponent() {
  const generateRandomNumber = (limit) =>{
    const randomNumber = Math.floor(Math.random() * limit + 1);
    return randomNumber
  };
  return (
    <>
      <ChildComponent createRandom={generateRandomNumber}/>
    </>
  );
}

export default ParentComponent;
