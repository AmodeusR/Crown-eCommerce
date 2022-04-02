import { useContext } from "react";
import CategoryContext from "../../contexts/category.context";
import { ProductsSection, LoadingAnimation } from "../../components";

const CategoriesSection = () => {
  const { categories, isFetching } = useContext(CategoryContext);
  const sections = Object.keys(categories);

  return (
    <>
      {isFetching ?
        <LoadingAnimation /> :
        sections.map((section) => {
          const { title, items } = categories[section];

          return (
            <ProductsSection key={title} title={title} products={items} preview />
          );
        })
      }
    </>
  );
};

export default CategoriesSection;
