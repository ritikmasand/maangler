import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import ExComp from "./components/ExComp";
import Myhobbies from "./components/Myhobbies";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
function App() {
  // const arr = [1, 2, 3, 4, 5, 6, "whatever"];
  const traceble = useState(0);
  const counter = traceble[0];
  const updatecounter = traceble[1];

  const inc = () => {
    updatecounter((current_value) => {
      const new_value = current_value + 1;
      return new_value;
    });
  };
  const dec = () => {
    updatecounter((current_value) => {
      const new_value = current_value - 1;
      return new_value;
    });
  };
  return (
    <div>
      {/* <MyButton />
      <ExComp />
      <Myhobbies />
      <MyComponent array={arr}/> */}
      <h1>Project - 1 (Counter Device)</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      {/* {console.log(counter)} */}
      <p>Bowls Bowled: {counter}</p>
    </div>
  );
}

export default App;
