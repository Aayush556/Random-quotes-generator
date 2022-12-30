import React from "react";
import "../Quotes/Quotes.css";
function Button(props) {
  return (
    <div className="buttons">
      <button
        id={props.id}
       
        onClick={props.handleClick}
        style={{ color: "white", backgroundColor: props.color }}
        className="button"
      >
        New Quote
      </button>
    </div>
  );
}
export default Button;