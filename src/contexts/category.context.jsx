import { createContext, useState, useEffect } from "react";

import { fetchData } from "../utils/firebase/firebase";

const CategoryContext = createContext({
  categories: [],
  setCategories: () => null,
  isFetching: true
});

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
          const categoryMap = await fetchData();
          setCategories(categoryMap);
          
        } catch (error) {
          console.warn(error);
        } finally {
          setIsFetching(false);
        }
    };
    
    fetchCategories();

  }, []);
  
  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        isFetching
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
