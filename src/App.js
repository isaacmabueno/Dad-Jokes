import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { jokes } from './dadJokes.json';
import DadJoke from './components/DadJoke.jsx';

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    joke: 'click the button to generate a joke!'
  }
}

generateJoke() {
  let joke = jokes[Math.floor(Math.random()*jokes.length)];
  this.setState({joke: joke});
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>DAD JOKES</h1>
          <img src={ require('./images/dad.png') } />
          <button onClick={() => this.generateJoke()}><i className="fa fa-beer"></i> Beer me!</button>
        </div>
        <p className="App-intro">
          <DadJoke joke={this.state.joke} />
        </p>
        <small className="github-link">
          Made with <i className="fa fa-heart"></i> in Chicago
        </small>
      </div>
    );
  }
}

export default App;
