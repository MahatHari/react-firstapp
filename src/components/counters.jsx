import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Object destructuring for this.props
    const { onReset, onDelete, counters, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            // value={counter.value}
            // selected={true}
            // id={counter.id}
            // All property of counter object can be passed by encapsulation
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
