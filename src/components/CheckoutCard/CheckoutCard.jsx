import { useContext } from "react";
import { ReactComponent as Delete } from "../../assets/close.svg";

import currencyFormatter from "../../utils/currencyFormatter";
import CartContext, { CART_ACTIONS } from "../../contexts/cart.context";
import { createAction } from "../../utils/reducer/reducer";
import "./checkout-card.scss";

const CheckoutCard = ({ id, name, imageUrl, price, quantity }) => {
  const { cartItems, cartDispatch } = useContext(CartContext);
  const formattedPrice = currencyFormatter.format(price * quantity);

  const handleQuantityChange = (e) => {
    const type = e.target.dataset.type;
    
    if(!type) return;

    const updatedCartItems = cartItems.reduce((acc, item) => {
    
      if (item.id === id) {
        const newQuantity = type === "plus" ? item.quantity += 1 : item.quantity -= 1;
        
        return [...acc, {...item, quantity: newQuantity }];
      }
      
      return [...acc, item];
    }, []);
    
    cartDispatch(createAction(CART_ACTIONS.SET_CART_ITEMS, updatedCartItems));
  }

  const handleDeletion = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);

    cartDispatch(createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems));
  }

  return (
    <div className="checkout-card">
      <img className="checkout-card__img" src={imageUrl} alt={name} />
      <span className="checkout-card__product-name">{name}</span>
      <span className="checkout-card__quantity" onClick={handleQuantityChange}>
        <span className={`arrow ${quantity === 1 ? "is-disabled" : ""}`} data-type="minus">&#10096;</span>{" "}
        {quantity}
        {" "}<span className="arrow" data-type="plus">&#10097;</span>
      </span>
      <span className="checkout-card__price">{formattedPrice}</span>
      <Delete className="checkout-card__delete" onClick={() => handleDeletion(id)} />
    </div>
  );
};

export default CheckoutCard;
