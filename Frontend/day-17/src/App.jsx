import "./style.css";

const App = () => {
  const Card = ({ food, cal }) => {
    return (
      <div className="card">
        <h1>{food}</h1>
        <h2>you have consumed {cal} cals today</h2>
      </div>
    );
  };
  return (
    <div className="page">
      <h1>Calorie Read Only</h1>
      <div className="container">
        <Card food="Pizza" cal="56" />
        <Card food="Burger" cal="70" />
        <Card food="Coke" cal="500" />
        <Card food="Browne" cal="180" />
        <Card food="Fried Rice" cal="90" />
        <Card food="Lassania" cal="200" />
        <Card food="Pani Puri" cal="10" />
      </div>
    </div>
  );
};

export default App;
