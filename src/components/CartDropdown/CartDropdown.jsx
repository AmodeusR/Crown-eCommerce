import { useContext } from "react";
import { Button, CartItem } from "/src/components";
import {  useNavigate } from "react-router-dom";

import "./cart-dropdown.scss";
import { useSelector } from "react-redux";
import { selectCartItems, selectIsCartOpen } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const navigate = useNavigate();

  const handleLinkToCheckout = () => {
    navigate("/checkout");
  }

  return (
    <>
      {isCartOpen && (
        <div className="cart-dropdown">
          <div className="cart-dropdown__menu">
            {!cartItems.length &&
              <span className="menu__empty-message">Your cart is empty</span>
            }
            { cartItems &&
              cartItems.map(({ id, name, price, imageUrl, quantity }) => (
                <CartItem key={id} title={name} price={price} imgSrc={imageUrl} quantity={quantity} />
              ))
            }
          </div>
            <Button title="Checkout" onMouseDown={handleLinkToCheckout} className={!cartItems.length ? "disabled" : ""} />
        </div>
      )}
    </>
  );
};

export default CartDropdown;
