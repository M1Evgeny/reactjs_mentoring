import React, { Component } from "react";

export default class Counter extends Component {

    constructor() {
        super();
        this.state = {counter: 0};
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    render() {
        return (
            <div>
                <div>Counter: {this.state.counter}</div>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }

    decrease() {
        this.setState({counter: this.state.counter - 1});
    }

    increase() {
        this.setState({counter: this.state.counter + 1});
    }
}