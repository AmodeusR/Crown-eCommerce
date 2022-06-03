import { Link } from "react-router-dom";
import { ProductCard } from "/src/components";

import "./products-section.scss";
import { useDispatch, useSelector } from "react-redux";
import { setNewCartItem } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";


const ProductsSection = ({ title, products, preview = false }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addItemToCart = (itemToAdd) => {
    dispatch(setNewCartItem(itemToAdd, cartItems));
  }

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
