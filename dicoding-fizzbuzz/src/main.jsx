import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi nilai count didalam state
    this.state = {
      count: 0,
    };

    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    console.log(this);
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div className="counter-app">
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}
const CounterDisplay = ({ count }) => {
  if (count === 0) {
    return <p>{count}</p>;
  }

  if (count % 5 === 0 && count % 7 === 0) {
    return <p>fizzbuzz</p>;
  }

  if (count % 5 === 0) {
    return <p>fizz</p>;
  }

  if (count % 7 === 0) {
    return <p>buzz</p>;
  }
  return <p>{count}</p>;
};

const IncreaseButton = ({ increase }) => {
  return (
    <div className="btn btn-up">
      <button onClick={increase}>+ increase</button>
    </div>
  );
};

const ResetButton = ({ reset }) => {
  return (
    <div className="reset-button">
      <button onClick={reset}>- reset</button>
    </div>
  );
};

const root = createRoot(document.getElementById("root")).render(<CounterApp />);
