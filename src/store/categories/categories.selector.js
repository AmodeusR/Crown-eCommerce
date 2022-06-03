import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

const selectCategoriesMemo = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories 
);

export const selectCategories = createSelector(
  [selectCategoriesMemo],
  (categories) => categories
);

export const selectIsFetching = ({ categories }) => categories.isFetching;