import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTIONS } from "./categories.types";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categories);

export const setIsFetching = (isFetching) =>
  createAction(CATEGORIES_ACTIONS.SET_IS_FETCHING, isFetching);