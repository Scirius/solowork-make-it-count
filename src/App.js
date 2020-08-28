import React, { useState } from "react";
import "./styles.css";

// - Create a state variable
// - Hold 3 iterations - each one will be an object with a name, a value
// - In the JSX mapping through that array to display the 3 counters

export default function App() {
  const [counters, setCounters] = useState([
    {
      id: 0,
      label: "First counter",
      count: 0
    },
    {
      id: 1,
      label: "Second counter",
      count: 0
    },
    {
      id: 2,
      label: "Third counter",
      count: 0
    }
  ]);
  const handleChange = (offset, indexClicked = -1) => {
    const newState = counters.map((element, index) => {
      if (indexClicked === -1) {
        // change all elements if no index is given
        element.count += offset;
      } else {
        if (index === indexClicked) element.count += offset;
      }
      if (element.count < 0) element.count = 0;
      return element;
    });
    setCounters(newState);
  };

  return (
    <>
      <div className="block">
        <h1>Make It Count</h1>
        Your goal: implement a page showing <strong>3 counters</strong>
        <br />
        <ul>
          <li>every counter has a + and a - button</li>
          <li>
            for every counter, clicking on + will increase the count number on
            that single counter
          </li>
          <li>
            for every counter, clicking on - will decrease the count number on
            that single counter
          </li>
          <li>
            the page will have 2 extra buttons "decrease all" and "increase all"
          </li>
          <li>
            clicking on "increase all" will increase the count of one unit on
            all the counters
          </li>
          <li>
            clicking on "decrease all" will decrease the count of one unit on
            all the counters
          </li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/state-and-lifecycle.html"
        >
          Help
        </a>
      </div>

      <div className="block">
        <em>Put your counters here</em>
        {counters.map((element, index) => (
          <div key={index}>
            <h3>{element.label}</h3>
            <button class="button-dec" onClick={() => handleChange(-1, index)}>
              -
            </button>
            <span className="counter">{element.count}</span>
            <button class="button-inc" onClick={() => handleChange(+1, index)}>
              +
            </button>
          </div>
        ))}
        <h3>Increase/Decrease all</h3>
        <button class="button-dec" onClick={() => handleChange(-1)}>
          -
        </button>
        <button class="button-inc" onClick={() => handleChange(+1)}>
          +
        </button>
      </div>
    </>
  );
}
