const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  const actions = {
    setIsCartOpen: {...state, isCartOpen: payload },
    setCartItems: {...state, cartItems: payload }
  }

  if(actions[type]) {
    const newState = actions[type];
  
    return newState;
  }

  return state;
}