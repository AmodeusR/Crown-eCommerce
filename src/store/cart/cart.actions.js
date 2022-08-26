import { createAction } from "../../utils/reducer/reducer";
import { CART_ACTIONS } from "./cart.types";


export const setNewCartItem = (itemToAdd, cartItems) => {
  const updatedCartItems = handleUpdate(itemToAdd, cartItems);

  return createAction(CART_ACTIONS.SET_CART_ITEMS, updatedCartItems);
};

export const setIsCartOpen = (isCartOpen) => 
  createAction(CART_ACTIONS.SET_IS_CART_OPEN, isCartOpen);


function handleUpdate(itemToAdd, cartItems) {
  const itemIsInCart = cartItems.find(cartItem => cartItem.id === itemToAdd.id );

  if (itemIsInCart) {
    const updatedCart = cartItems.reduce((acc, item) => {
      if (item.id === itemIsInCart.id) {
        return [...acc, {...itemIsInCart, quantity: item.quantity + 1}];
      } else {
        return [...acc, item];
      }
    }, []);

    return updatedCart;
  }

  return [...cartItems, {...itemToAdd, quantity: 1}];
}