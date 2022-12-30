import React, { Component } from "react";
import Quotesauthor from "../Components/Quotesauthor";
import Quotestext from "../Components/Quotestext";
import Button from "../Components/Button";
import Axios from "axios";
import "./Quotes.css";
class Quotes extends Component {
  state = {
    quote: "The Best Richness, is the Richness of Soul",
    author: "Prophet Muhammad(Peace be upon him)",
    quotesData: [],
    color: "rgb(243 , 156 , 18)",
  };
  //random color
  randomColor = () => {
    let colorPatterns = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPatterns[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  componentDidMount() {
    if (this.state.quotesData.length > 0) {
      return;
    } else {
      this.fetchQuotes();
    }
  }

  fetchQuotes = () => {
    Axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        const quotesData = [...res.data.quotes];
        const color = this.randomColor;
        document.body.style.color = color;
        document.body.style.backgroundColor = color;

        this.setState({
          quotesData: quotesData,
          color: color,
        });
      })
      .catch((error) => console.log(error));
  };

  handleClick = () => {
    let randomIndex = Math.floor(Math.random() * 16);
    let { quote, author } = this.state.quotesData[randomIndex];

    const color = this.randomColor();
    document.body.style.color = color;
    document.body.style.backgroundColor = color;

    this.setState({
      quote: quote,
      author: author,
      color: color,
    });
  };
  render() {
    return (
      <div id="quote-box">
        <Quotestext quote={this.state.quote} color={this.state.color} />
        <Quotesauthor author={this.state.author} color={this.state.color} />
        <Button handleClick={this.handleClick} color={this.state.color} />
      </div>
    );
  }
}
export default Quotes;