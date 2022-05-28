const INITIAL_STATE = {
  currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  const actions = {
    setCurrentUser: { currentUser: payload }
  }


  if (actions[type]) {
    const updatedValue = actions[type];
    const newState = { ...state, ...updatedValue };
    
    console.log("%c Working", "color: forestgreen")
    return newState;
  }
  console.log("%c Not working", "color: crimson")
  
  return state;
}