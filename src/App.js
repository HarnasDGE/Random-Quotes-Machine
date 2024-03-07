import {connect} from 'react-redux';
import cytaty from './data/cytaty.js';
import kolory from './data/kolory.js';
import './App.css';
import { newQuote } from './actions/quoteActions.js';
import React from 'react';

const mapStateToProps = (state) => {
return {
  quote: state.quote
}
};

const mapDispatchToProps = (dispatch) => {
return {
  randomNewQuote: (quote) => dispatch(newQuote(quote))
}
};


class App extends React.Component {
  constructor(props) {
    super(props);

    this.randomQuote = this.randomQuote.bind(this);
    this.shareToTwitter = this.shareToTwitter.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  shareToTwitter() {
    const tweet = `"${this.props.quote.cytat}" ~ ${this.props.quote.autor}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweet
    )}`;
    window.open(url, "_blank");
  }

  randomQuote() {
    const randomIndex = Math.floor(Math.random() * cytaty.length);

    this.props.randomNewQuote(cytaty[randomIndex]);

    console.log(`Cytat random: ${cytaty[randomIndex].cytat}`);
    console.log(`Aktualny prop: ${this.props.quote.cytat}`);
  }

  setColor() {
    let categoryColor = kolory.find((color) => color.kategoria === this.props.quote.kategoria);
    if(!categoryColor) {
      categoryColor = {
        kategoria: "Ogólne",
        kolor: "#808080"
      }
    }
    return categoryColor;
  }
  render() {
    const bgColor = this.setColor();

    return (
    <div id="main-container" style={{backgroundColor: bgColor.kolor}}>
      <div id="quote-box">
        <div id="text">{this.props.quote.cytat}</div>
        <div id="author">{this.props.quote.autor}</div>
        <div id="buttons">
        <button id="new-quote" onClick={this.randomQuote} style={{backgroundColor: bgColor.kolor}}>
          New Quote
        </button>
        <button id="tweet-quote" onClick={this.shareToTwitter} style={{backgroundColor: bgColor.kolor}}>
          Tweet
        </button>
        </div>
      </div>
    </div>
  );
}
}


const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;