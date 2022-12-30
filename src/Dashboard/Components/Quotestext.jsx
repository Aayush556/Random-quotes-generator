import React from "react";
import "../Quotes/Quotes.css";
function Quotestext({ quote, color }) {
  return (
    <div className="quote-text" style={{ color: color }}>
      <span id="text">{quote}</span>
    </div>
  );
}
export default Quotestext;