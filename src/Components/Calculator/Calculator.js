import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      result: 0,
      number1: 2,
      number2: 1,
      operation: '+'
    };


    this.showResult = this.showResult.bind(this);
    //this.changeNamber1 = this.changeNamber1.bind(this);
    //this.changeNamber2 = this.changeNamber2.bind(this);
    //this.changeOperation = this.changeOperation.bind(this);
  }

  showResult(number1, number2, operation) {
   let result = 0;
    switch (operation){
      case '+':  result = number1 + number2;
        break;
      case '-':  result = number1 - number2;
        break;
      default : break;
    }
    this.setState({result : result})
  }

  changeNamber1(event){
    let number1 = Number(event.currentTarget.value);
    this.setState({number1 : number1});
    let {number2, operation} = this.state;
    this.showResult(number1, number2, operation);
  }

  changeNamber2(event){
    let number2 = Number(event.currentTarget.value);
    this.setState({number2 : number2});
    let {number1, operation} = this.state;
    this.showResult( number1, number2, operation);
  }

  changeOperation(event){
    let operation = event.currentTarget.value;
    this.setState({operation : operation});
    let {number1, number2} = this.state;
    this.showResult( number1, number2, operation);
  }

  render() {
    return (
        <div className="calculator">
          <div className="calculator div">
            <input value={this.state.number1} onChange={this.changeNamber1.bind(this)}/>
          </div>
          <div className="calculator div">
            <select name="" id="" onChange={this.changeOperation.bind(this)}>
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </div>
          <div className="calculator div">
            <input value={this.state.number2} onChange={this.changeNamber2.bind(this)}/>
          </div>
          <div className="calculator div">
            Result: <span>{this.state.number1 + this.state.operation + this.state.number2}={this.state.result} </span>
          </div>
        </div>
    );
  }
}

export default Calculator;
