import React from "react";
import "./Loader.css";

const Loader = (props) => {
  return (
    <div className="Loader">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  );
};

export default Loader;
