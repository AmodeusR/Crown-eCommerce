const INITIAL_STATE = {
  categories: {},
  isFetching: true
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  const actions = {
    setCategories: {...state, categories: payload},
    setIsFetching: {...state, isFetching: false}
  }

  if (actions[type]) {
    const newState = actions[type];

    return newState;
  }
  
  return state;
};