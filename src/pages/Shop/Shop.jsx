import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { CategoriesSection, CategorySection } from "../../pages";

import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { selectCategories, selectIsFetching } from "../../store/categories/categories.selector";
import PageNotFound from "../PageNotFound/PageNotFound";

const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <main className="container" style={{marginTop: "2rem"}}>
      <h1 className="page-title">Shop</h1>
      <Routes>
        <Route index element={<CategoriesSection  />} />
        <Route path=":category" element={<CategorySection  />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default Shop;