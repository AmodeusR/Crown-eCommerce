import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

const selectCartMemo = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartItems = createSelector(
  [selectCartMemo],
  (cartItems) => cartItems
);

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

export const selectIsCartOpen = ({ cart }) => cart.isCartOpen;