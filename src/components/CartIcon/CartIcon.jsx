import { useContext } from "react";
import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import CartContext from "../../contexts/cart.context";
import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <li className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
      <BagIcon className="cart-icon__icon" />
      <span className="cart-icon__count">{totalItemsInCart}</span>
    </li>
  );
};

export default CartIcon;
