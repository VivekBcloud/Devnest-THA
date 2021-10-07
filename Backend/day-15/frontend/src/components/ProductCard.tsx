import "../styles/product-card.css";
type productProp = {
  title: string;
  price: number;
  count: number;
  image: string;
  desc: string;
};

const ProductCard = ({ title, price, count, image, desc }: productProp) => {
  return (
    <div className="card">
      <div>{title}</div>
      <img src={image} alt={title} />
      <div>
        <div>{desc}</div>
        <div>Price: {price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
