import React from "react";

export class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            inputValue: 1
        }
    }
    onePlus = () => {
        this.setState({ inputValue: this.state.inputValue + 1})
    }
    oneMinus = () => {
        this.setState({ inputValue: this.state.inputValue - 1})
    }

    render(){
        return <div style={{textAlign: "center"}}>
                <button onClick={this.onePlus}>+</button>
                <h3>{this.state.inputValue}</h3>
                <button onClick={this.oneMinus}>-</button>
            </div>
    }
}