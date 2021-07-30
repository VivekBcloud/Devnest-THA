import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const place = useSelector((state) => state);
  console.log(place);
  return <div className="App">search</div>;
}

export default App;
