import { useContext } from "react";
import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import CartContext, { CART_ACTIONS } from "../../contexts/cart.context";
import { createAction } from "../../utils/reducer/reducer";
import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, cartDispatch, cartItems } = useContext(CartContext);

  console.log(cartItems);

  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <li className="cart-icon" onClick={() => cartDispatch(createAction(CART_ACTIONS.SET_IS_CART_OPEN, !isCartOpen))}>
      <BagIcon className="cart-icon__icon" />
      <span className="cart-icon__count">{totalItemsInCart}</span>
    </li>
  );
};

export default CartIcon;
