
import { Link } from "react-router-dom";
import { Button } from "../../components";

import "./page-not-found.scss";

const PageNotFound = () => {
  return (
    <div className="container page-not-found">
      <h1>Oops! It seems there's nothing here (っ °Д °;)っ</h1>
      <Link to="/">
        <Button title="Go back to Homepage" type="button" className="page-not-found__button" />
      </Link>
    </div>
  );
};

export default PageNotFound;
