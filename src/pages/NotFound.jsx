import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__404">
        <div className="notfound__img">
          <img src="https://i.ibb.co/QvGTwMb/not-Found2.png" alt="error" />
        </div>
        <div className="notfound__img">
          <img
            src="https://i.ibb.co/FW3MdNx/not-Found11.png
"
            alt="error"
          />
        </div>
        <div className="notfound__img">
          <img src="https://i.ibb.co/QvGTwMb/not-Found2.png" alt="error" />
        </div>
      </div>
      <h1>Whoops, Nothing delicious to find here!</h1>;
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" href="##" className="btn">
        go to menu
      </Link>
    </div>
  );
};

export default NotFound;
