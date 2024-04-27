import "./App.css";
import Container from "./components/containerCrd";
import { useState } from "react";
import array from "./components/card/array";

// import arry from "./components/card/array";

function App() {
  const [stateOne, setStateOne] = useState(array);
  const [stateTwo, setStateTwo] = useState([]);
  const [stateThree, setStateThree] = useState([]);

  const [id] = stateOne;
  // const filteredArray = stateOne.filter((state) => state.id !== id.id);
  const handleData = (data) => {
    if (data) {
      setStateTwo((prev) => {
        return [...prev, data];
      });
      setStateOne(stateOne.filter((data) => data.id != id.id));
    }
    // console.log(filteredArray);
  };
  const handleDataTwo = (data) => {
    if (data) {
      setStateThree((prev) => {
        return [...prev, data];
      });
      setStateTwo(stateTwo.filter((data) => data.id != id.id));
      // console.log(filteredArray);
    }
  };
  // const handleDataThree = (data) => {
  // if (data) {
  //   setStateTwo((prev) => {
  //     return [...prev, data];
  //   });
  //   setStateThree(filteredArray);
  // }
  // };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Container state={stateOne} handleData={handleData} />
        <Container state={stateTwo} handleData={handleDataTwo} />
        <Container state={stateThree} />
      </div>
    </>
  );
}

export default App;
