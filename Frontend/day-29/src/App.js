import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {
  const placeData = useSelector((state) => state.placeData);
  const loading = useSelector((state) => state.loading);

  return (
    <>
      <Search />
      {loading ? (
        <Loading />
      ) : placeData.current ? (
        <WeatherCard />
      ) : placeData === "wrong query" ? (
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Wrong query </h1>
      ) : (
        <h2> no idea what's wrong</h2>
      )}
    </>
  );
}

export default App;
