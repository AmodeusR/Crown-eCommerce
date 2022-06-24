import { fetchData } from "../../utils/firebase/firebase";
import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTIONS } from "./categories.types";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categories);

export const setIsFetching = (isFetching) =>
  createAction(CATEGORIES_ACTIONS.SET_IS_FETCHING, isFetching);

export const setFetchError = (fetchError) =>
  createAction(CATEGORIES_ACTIONS.SET_FETCH_ERROR, fetchError);

// Thunk

export const fetchCategoriesAsync = () => async (dispatch) => {
  const fetchCategories = async () => {
    try {
      const categoryMap = await fetchData();
      dispatch(setCategories(categoryMap));

    } catch (error) {
      dispatch(setFetchError(error));

    } finally {
      dispatch(setIsFetching(false));
    }
  }

  fetchCategories();
}