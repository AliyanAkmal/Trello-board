import "./App.css";
import Container from "./components/containerCrd";
import { useState } from "react";
import array from "./components/card/array";
import Card from "./components/card";

// import arry from "./components/card/array";

function App() {
  const [stateOne, setStateOne] = useState(array);
  const [stateTwo, setStateTwo] = useState([]);
  const [stateThree, setStateThree] = useState([]);

  const [id] = stateOne;
  const filteredArray = stateOne.filter((state) => state.id != id.id);
  const handleData = (data) => {
    if (data) {
      setStateTwo((prev) => {
        return [...prev, data];
      });
      setStateOne(filteredArray);
      console.log(filteredArray.length);
    }
  };
  const handleDataTwo = (data) => {
    if (data) {
      setStateThree((prev) => {
        return [...prev, data];
      });
      setStateTwo(filteredArray);
      console.log(filteredArray.length);
    }
  };
  const handleDataThree = (data) => {
    if (data) {
      setStateTwo((prev) => {
        return [...prev, data];
      });
      setStateThree(filteredArray);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Container state={stateOne} handleData={handleData} id={id} />
        <Container state={stateTwo} handleData={handleDataTwo} />
        <Container state={stateThree} handleData={handleDataThree} />
      </div>
    </>
  );
}

export default App;
