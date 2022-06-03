import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";
import { CART_ACTIONS } from "../../store/cart/cart.types";
import { createAction } from "../../utils/reducer/reducer";
import "./cart-icon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);


  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <li className="cart-icon" onClick={() => dispatch(createAction(CART_ACTIONS.SET_IS_CART_OPEN, !isCartOpen))}>
      <BagIcon className="cart-icon__icon" />
      <span className="cart-icon__count">{totalItemsInCart}</span>
    </li>
  );
};

export default CartIcon;
