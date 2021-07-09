import "./style.css";
import { useState } from "react";
const App = () => {
  const CounterButton = () => {
    const [count, setCount] = useState(0);
    // console.log("yeep");
    return (
      <button onClick={() => setCount(count + 1)} className="btn">
        {count}
      </button>
    );
  };
  // setCount((count += 1));
  return (
    <div className="container">
      <CounterButton />
      <CounterButton />
      <CounterButton />
      <CounterButton />
    </div>
  );
};

export default App;
