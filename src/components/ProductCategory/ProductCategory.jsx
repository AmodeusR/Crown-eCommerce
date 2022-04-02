import { Link } from "react-router-dom";
import "./product-category.scss";

const ProductCategory = ({ category, className, imgSrc }) => {
  return (
      <Link className={`category-card__link category-card ${className}`} to={`/shop/${category}`}>
        <div className="category-card__background" style={{
          backgroundImage:`url(${imgSrc})`
        }} />
        <div className="category-card__inner-container">
          <h2 className="category-card__title">{category}</h2>
          <span>Shop now</span>
        </div>
      </Link>
  );
};

export default ProductCategory;
