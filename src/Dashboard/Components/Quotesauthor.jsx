import React from "react";
import "../Quotes/Quotes.css";
function Quotesauthor(props) {
  return (
    <div className="quote-author" style={{ color: props.color }}>
      <span id="author">{props.author}</span>
    </div>
  );
}
export default Quotesauthor;