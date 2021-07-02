import "./style.css";
import Card from "./Components/Card";
import Chessboard from "./Components/Chessboard";
const App = () => {
  return (
    <div className="container">
      <section className="section1">
        <Card />
      </section>
      <section className="section2">
        <Chessboard />
      </section>
    </div>
  );
};

export default App;
