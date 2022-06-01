import { ProductsSection, LoadingAnimation } from "../../components";

const CategoriesSection = ({ categories, sections, isFetching }) => {

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
