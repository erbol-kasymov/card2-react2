import React from "react";
import './calculator.css'

export class Calculator extends React.Component {
    constructor(){
        super()
        this.state = {
            valueNumber1: '',
            valueNumber2: '',
            result: ''
        }
    }

    operation = () => {
        let operation = document.getElementById('inputOperation')
        let operationValue = operation.value
        switch (operationValue) {
            case '+':
                return this.setState({ result: this.state.valueNumber1 + this.state.valueNumber2})
                break;

            case '-':
                return this.setState({ result: this.state.valueNumber1 - this.state.valueNumber2})
                break;
            case '*':
                return this.setState({ result: this.state.valueNumber1 * this.state.valueNumber2})
                break;
            case '/':
                return this.setState({ result: this.state.valueNumber1 / this.state.valueNumber2})
                break;
            case '**':
                return this.setState({ result: this.state.valueNumber1 ** this.state.valueNumber2})
                break;
            default:
                return alert('Error')
                break;
        }
    }
    handleChange1 = (e) => {
        this.setState({ valueNumber1: parseInt(e.currentTarget.value)})
    }
    handleChange2 = (e) => {
        this.setState({ valueNumber2: parseInt(e.currentTarget.value) })
    }
    render(){
        return( <div className="wrapCalculator">
                    <input type="text" onChange={this.handleChange1} id="value1" value={this.state.valueNumber1}/>
                    <input type="text" id="inputOperation"/>
                    <input type="text" onChange={this.handleChange2} value={this.state.valueNumber2}/>
                    <button onClick={this.operation}>Click</button>
                    <h2>{this.state.result}</h2>
                </div>)
    }

   
}