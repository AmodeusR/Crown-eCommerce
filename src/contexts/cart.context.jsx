import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: []
}

export const CART_ACTIONS = {
  SET_IS_CART_OPEN: "setIsCartOpen",
  SET_CART_ITEMS: "setCartItems"
}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  const actions = {
    setIsCartOpen: () => ({ isCartOpen: payload }),
    setCartItems: () => ({ cartItems: payload })
  }

  const newValue = actions[type]();

  const newState = {
    ...state,
    ...newValue
  };

  console.log({ payload, newValue, newState });

  return newState;
}


const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  setCartItems: () => {}
});

const handleAddition = (itemToAdd, cartItems) => {
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


export const CartProvider = ({ children }) => {

  const [cartState, cartDispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const { isCartOpen, cartItems } = cartState;
  // const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (itemToAdd) => {
    const updatedCartItems = handleAddition(itemToAdd, cartItems);

    cartDispatch(createAction(CART_ACTIONS.SET_CART_ITEMS, updatedCartItems));
  }
  
  return (
    <CartContext.Provider
      value={{
        cartDispatch,
        isCartOpen,
        addItemToCart,
        cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
