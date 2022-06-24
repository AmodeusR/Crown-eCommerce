
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { useSelector } from "react-redux";
import "./page-fetch-error.scss";
import { selectFetchError } from "../../store/categories/categories.selector";

const PageFetchError = () => {
  const fetchError = useSelector(selectFetchError);
  return (
    <div className="container page-fetch-error">
      <h1>Oops! It seems something went wrong (っ °Д °;)っ</h1>
      <p>{fetchError.message}</p>
      <Link to="/">
        <Button title="Go back to Homepage" type="button" className="page-fetch-error__button" />
      </Link>
    </div>
  );
};

export default PageFetchError;
