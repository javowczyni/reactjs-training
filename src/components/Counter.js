import React, {Component} from 'react';
import CustomButton from "./CustomButton";

class Counter extends Component {
    state = {
        count: 0,
    }

    increment = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }
    decrement = () => {
        this.setState((prevState) => ({count: prevState.count - 1}));
    }
    reset = () => {
        this.setState({count: 0})
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                Counter: {count}
                <br/>
                <CustomButton action={this.increment} label={"+"} />
                <CustomButton action={this.decrement} label={"-"} />
                <CustomButton action={this.reset} label={"RESET"} />
            </div>
        )
    }
}

export default Counter;
