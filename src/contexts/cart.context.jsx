import { createContext, useState } from "react";

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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (itemToAdd) => {
    const updatedCartItems = handleAddition(itemToAdd, cartItems);

    setCartItems(updatedCartItems);
  }
  
  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        setCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
