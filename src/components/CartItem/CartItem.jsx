import currencyFormatter from "../../utils/currencyFormatter";

import "./cart-item.scss";

const CartItem = ({ title, price, quantity, imgSrc }) => {
  const formattedTotalPrice = currencyFormatter.format(price * quantity);

  return (
    <div className="item">
      <img className="item__img" src={imgSrc} alt={title} />
      <div className="item__details">
        <h2 className="item__title">{title}</h2>
        <p className="item__description">{quantity} x {formattedTotalPrice} </p>
      </div>
    </div>
  );
};

export default CartItem;
