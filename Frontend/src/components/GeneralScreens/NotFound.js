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
    {/* <div className="notFound">

      <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <div className='title'>
        <span className="text404">
          404
        </span>
        <br />
        <span>
          PAGE NOT FOUND
        </span>
      </div>
    </div> */}
  </>
);

export default NotFound;
