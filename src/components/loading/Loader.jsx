import React from "react";
import "./Loader.css";

const Loader = (props) => {
  return (
    <div className="Loader">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
};

export default Loader;
