import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="text-2xl flex flex-col justify-center">
      <p>404 NotFound</p>
      <Link className="underline" to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
