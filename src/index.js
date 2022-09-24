import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img src="https://www.recipetineats.com/wp-content/uploads/2022/05/Supreme-Soy-Noodles_1-SQ.jpg">
      {/* <img src="">
      <img src=""> */}
    </div>
  </div>,
  document.getElementById("root")
);
