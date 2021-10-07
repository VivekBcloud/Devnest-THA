import { useState } from "react";
import "../styles/home.css";
import ProductCard from "./ProductCard";
const Home = () => {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [after, setAfter] = useState(0);
  const [data, setData] = useState<any>({});
  // console.log(data);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(
      `http://localhost:8080/products?page=${page}&count=${count}&after=${after}`,
      {}
    )
      .then((res) => res.json())
      .then((res) => {
        if (res) setData(res);
        else {
          throw new Error("No data");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className="option-box">
        <form onSubmit={handleSubmit}>
          <label>Set count</label>
          <input
            type="number"
            placeholder="set count"
            value={count}
            onChange={(e) => {
              if (parseInt(e.target.value) < 0) return;
              setCount(parseInt(e.target.value));
            }}
          />
          <label>Set page</label>
          <input
            type="number"
            placeholder="set page"
            value={page}
            onChange={(e) => {
              if (parseInt(e.target.value) < 0) return;

              setPage(parseInt(e.target.value));
            }}
          />
          <label>Set after</label>
          <input
            type="number"
            placeholder="set after"
            value={after}
            onChange={(e) => {
              if (parseInt(e.target.value) < 0) return;

              setAfter(parseInt(e.target.value));
            }}
          />
          <button>Show</button>
        </form>
      </div>
      <div className="product-cards">
        {data.items &&
          data.items.map((item: any) => {
            return (
              <ProductCard
                title={item.title}
                price={item.price}
                count={item.count}
                image={item.image}
                desc={item.description}
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
