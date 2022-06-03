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

export const selectIsCartOpen = ({ cart }) => cart.isCartOpen;