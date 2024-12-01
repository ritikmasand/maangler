import logo from "./logo.svg";
import "./App.css";
import { useTime } from "react-timer-hook";
function App() {
  const time = useTime({ format: "12-hour" });
  return (
    <div className="App">
      <h1>Project-2 Global clock</h1>
      <p>
        Time: {time.hours}:{time.minutes}:{time.seconds}{" "}
      </p>
    </div>
  );
}

export default App;
