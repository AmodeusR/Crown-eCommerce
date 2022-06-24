import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageNotFound } from "../../pages";
import { PageFetchError } from "../../pages";
import { ProductsSection, LoadingAnimation } from "../../components";
import { useSelector } from "react-redux";
import { selectCategories, selectFetchError, selectIsFetching } from "../../store/categories/categories.selector";


const CategorySection = () => {
  const categories = useSelector(selectCategories);
  const isFetching = useSelector(selectIsFetching);
  const fetchError = useSelector(selectFetchError);
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
        null :
        <ProductsSection products={currentCategory.items} title={currentCategory.title} />
      }
      {fetchError ?
        <PageFetchError /> :
        <PageNotFound />
      }

    </>
  );
};

export default CategorySection;
