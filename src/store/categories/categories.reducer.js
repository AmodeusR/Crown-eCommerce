import { CATEGORIES_ACTIONS } from "./categories.types";

const INITIAL_STATE = {
  categories: {},
  isFetching: true,
  fetchError: null
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  const actions = {
    [CATEGORIES_ACTIONS.SET_CATEGORIES]: {...state, categories: payload},
    [CATEGORIES_ACTIONS.SET_IS_FETCHING]: {...state, isFetching: payload},
    [CATEGORIES_ACTIONS.SET_FETCH_ERROR]: {...state, fetchError: payload}
  }

  if (actions[type]) {
    const newState = actions[type];

    return newState;
  }
  
  return state;
};