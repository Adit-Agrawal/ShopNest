import ProductItem from "./ProductItem";
import "./BestSellers.css";
function BestSellers() {
  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Best Sellers</h2>
      <div className="container">
        <div className="products-grid">
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
