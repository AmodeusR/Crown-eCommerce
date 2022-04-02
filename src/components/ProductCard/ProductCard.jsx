
import { Button } from "../../components";
import currencyFormatter from "../../utils/currencyFormatter";

import "./product-card.scss";



const ProductCard = ({ product, handleItemAdditionToCart }) => {
  const { name, price, imageUrl: imgSrc } = product;
  const formattedPrice = currencyFormatter.format(price);
  
  return (
    <div className="product-card">
      <img className="product-card__image" src={imgSrc} alt={`${name}`} />
      <div className="product-card__description">
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">{formattedPrice}</span>
      </div>
      <Button className="product-card__button inverted" title="Add to cart" onClick={() => handleItemAdditionToCart(product)} />
    </div>
  );
};

export default ProductCard;
