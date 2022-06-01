import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { CategoriesSection, CategorySection } from "../../pages";

import { setCategories, setIsFetching } from "../../store/categories/categories.action";
import { selectCategories, selectIsFetching } from "../../store/categories/categories.selector";
import { fetchData } from "../../utils/firebase/firebase";
import PageNotFound from "../PageNotFound/PageNotFound";

const Shop = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isFetching = useSelector(selectIsFetching);
  const sections = Object.keys(categories);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
          const categoryMap = await fetchData();
          dispatch(setCategories(categoryMap));          
        } catch (error) {
          console.warn(error);
        } finally {
          dispatch(setIsFetching(false));
        }
    };
    
    fetchCategories();
  }, []);

  return (
    <main className="container" style={{marginTop: "2rem"}}>
      <h1 className="page-title">Shop</h1>
      <Routes>
        <Route index element={<CategoriesSection isFetching={isFetching} categories={categories} sections={sections} />} />
        <Route path=":category" element={<CategorySection isFetching={isFetching} categories={categories} sections={sections} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default Shop;