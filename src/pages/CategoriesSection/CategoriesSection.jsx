import { ProductsSection, LoadingAnimation } from "../../components";
import { useSelector } from "react-redux";
import { selectCategories, selectFetchError, selectIsFetching } from "../../store/categories/categories.selector";
import PageFetchError from "../PageFetchError/PageFetchError";
import PageNotFound from "../PageNotFound/PageNotFound";

const CategoriesSection = () => {
  const categories = useSelector(selectCategories);
  const isFetching = useSelector(selectIsFetching);
  const fetchError = useSelector(selectFetchError);
  const sections = Object.keys(categories);
  
  const isCategoriesEmpty = categories.length === 0;


  return (
    <>
      {isFetching ?
        <LoadingAnimation /> :
        isCategoriesEmpty ?
        null :
        sections.map((section) => {
          const { title, items } = categories[section];

          return (
            <ProductsSection key={title} title={title} products={items} preview />
          );
        })
      }
      {fetchError ?
        <PageFetchError /> :
        <PageNotFound />
      }
    </>
  );
};

export default CategoriesSection;
