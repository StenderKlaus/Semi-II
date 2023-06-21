import React from "react";
import "../../Css/NotFound.css";
import { Link, useNavigate } from "react-router-dom";
const NotFound = () => (
  <>
    <div className="allroundBox">
      <img className="notFound" src="404.jpg" alt="404 Page not found" />

      <button className="backBtn">
        <Link to="/">Back Home</Link>
      </button>
    </div>

  </>
);

export default NotFound;
