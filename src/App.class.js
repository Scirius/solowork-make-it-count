import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        {
          id: 0,
          name: "First counter",
          value: 0
        },
        {
          id: 1,
          name: "Second counter",
          value: 0
        },
        {
          id: 2,
          name: "Third counter",
          value: 0
        }
      ]
    };
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleAllIncrease = this.handleAllIncrease.bind(this);
    this.handleAllDecrease = this.handleAllDecrease.bind(this);
  }

  handleIncrease(index) {
    // update the value for the specific counter (by id)
    let updatedValue = this.state.counters.filter(
      (element, elementIndex) => elementIndex === index
    )[0];
    // update the whole state with the new item
    // replace the value by the value we already have

    updatedValue.value += 1;
    let newState = this.state.counters;
    newState[index] = updatedValue;
    this.setState({
      counters: newState
    });
  }

  handleDecrease(index) {
    // update the value for the specific counter (by id)
    let updatedValue = this.state.counters.filter(
      (element, elementIndex) => elementIndex === index
    )[0];
    // update the whole state with the new item
    // replace the value by the value we already have

    updatedValue.value -= 1;
    let newState = this.state.counters;
    newState[index] = updatedValue;
    this.setState({
      counters: newState
    });
  }

  handleAllIncrease() {
    const newState = this.state.counters.map((element) => {
      element.value += 1;
      return element;
    });
    this.setState({
      counters: newState
    });
  }

  handleAllDecrease() {
    const newState = this.state.counters.map((element) => {
      element.value -= 1;
      return element;
    });
    this.setState({
      counters: newState
    });
  }

  render() {
    return (
      <div class="block">
        <em>Put your counters here</em>
        {this.state.counters.map((element, index) => (
          <div key={index}>
            {element.name} {element.value}
            <button onClick={() => this.handleIncrease(index)}>+</button>
            <button onClick={() => this.handleDecrease(index)}>-</button>
          </div>
        ))}
        <button onClick={() => this.handleAllIncrease()}>+</button>
        <button onClick={() => this.handleAllDecrease()}>-</button>
      </div>
    );
  }
}
