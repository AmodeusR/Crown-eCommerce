import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageNotFound } from "../../pages";
import { ProductsSection, LoadingAnimation } from "../../components";
import CategoryContext from "../../contexts/category.context";


const CategorySection = () => {
  const { categories, isFetching } = useContext(CategoryContext);
  const { category } = useParams();
  const categoryName = category.slice(0, 1).toUpperCase() + category.slice(1);

  const currentCategory = categories[categoryName] || {};

  const isCategoryEmpty = Object.keys(currentCategory).length === 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      {isFetching ?
        <LoadingAnimation /> :
        isCategoryEmpty ? 
        <PageNotFound /> :
        <ProductsSection products={currentCategory.items} title={currentCategory.title} />
      }
    </>
  );
};

export default CategorySection;
