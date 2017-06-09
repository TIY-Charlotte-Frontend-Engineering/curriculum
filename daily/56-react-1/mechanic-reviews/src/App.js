import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let name = 'Harrison';

    /**
     * This is called JSX - its a language for generating HTML from
     * Javascript (pretty much only used in React).
     */
    return (
      <main className="App">
        <Mechanic name="Susan"></Mechanic>
        <Mechanic name="Jeb"></Mechanic>
        <Mechanic name="Carta"></Mechanic>
      </main>
    );
  }
}

/**
 * Props (short for properties)
 * 
 * Props are the same as bindings in Angular - how we pass information from
 * one component to another.
 */
class Mechanic extends Component {
  /* Set up initial values when the component loads */
  constructor(props) {
    super(props); // weird, don't worry about it. pretty much always there.

    // The name is important here. This is where all of this component's data
    // should be stored. It's an object.
    this.state = {
      quality: Math.random() * 5,
      speed: Math.random() * 5,
      professionalism: Math.random() * 5,
    };
  }

  incrQuality() {
    console.log('increasing quality');
    let qual = this.state.quality;

    if (qual + 1 <= 5) {
      qual += 1;
    } else { // if it goes over five, max out @ 5
      qual = 5;
    }

    // Its important that you think of this.state as being immutable. YOU DO NOT
    // MODIFY IT DIRECTLY (common mistake).
    // Instead, call this.setState(). It (a) updates the value and (b) re-renders the DOM.
    this.setState({
      quality: qual,
    });
  }

  /* This function is called every time the DOM updates */
  render() {
    return (
      <section>
        <h2>A talented mechanic named {this.props.name}</h2>
        <button onClick={e => this.incrQuality(e)}>+1 quality</button>
        <Rating label="Quality" stars={this.state.quality}></Rating>
        <Rating label="Speed" stars={this.state.speed}></Rating>
        <Rating label="Professionalism" stars={this.state.professionalism}></Rating>
      </section>
    );
  }
}

class Rating extends Component {
  render() {

    // Example: 
    //    Quality: 3 / 5
    return (
      <section>
        <p>{this.props.label}: {this.props.stars.toFixed(1)} / 5</p>
      </section>
    )
  }
}

export default App;
