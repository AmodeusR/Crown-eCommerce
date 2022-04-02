import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "/src/components";

import "./products-section.scss";
import CartContext from "../../contexts/cart.context";



const ProductsSection = ({ title, products, preview = false }) => {
  const { addItemToCart } = useContext(CartContext);

  const productsToMap = preview ? products.filter((_, i) => i < 4) : products;  

  return (
    <section className="products-section">
      <div className="products-section__header-container">
        <h2 className="products-section__title">{title}</h2>
        {!preview && 
          <Link className="products-section__return" to="/shop">Go back</Link>
        }
      </div>
      <div className="products-section__list">
        {productsToMap?.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleItemAdditionToCart={addItemToCart}
          />
        ))}
      </div>
      {preview &&
        <Link to={`${title.toLowerCase()}`} className="products-section__expand">See more</Link>
      }
    </section>
  );
};

export default ProductsSection;
