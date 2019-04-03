import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      display:'0',
      operator: "",
      operand:'',
      resetDisplay: true
    };
  }

  resetState = () => {
    // TODO
    this.setState(state => ({
      display:'0',
      operator: '',
      operand:'',
      resetDisplay: true
    }));
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }
  calculate = () => {
    /*
    this.setState(state => ({
      operand: state.display
    }))
    */
   
    switch(this.state.operator){
      case "+":
        this.setState(state=>({
          display: String(parseInt(state.operand) + parseInt(state.display)),
          operand: state.display,
          resetDisplay: true
        }));
        break;
      case "-":
        this.setState(state=>({
          display: String(parseInt(state.operand) - parseInt(state.display)),
          operand: state.display,
          resetDisplay: true
        }));
        break;
      case "*":
        this.setState(state=>({
          display: String(parseInt(state.operand) * parseInt(state.display)),
          operand: state.display,
          resetDisplay: true
        }));
        break;
      case "/":
        this.setState(state=>({
          display: String(parseInt(state.operand) / parseInt(state.display)),
          operand: state.display,
          resetDisplay: true
        }));
        break;
    }
  }
  changeDisplay = key => {
    console.log(this.state.resetDisplay)
    if (this.state.resetDisplay){
      this.setState({
        display:String(key),
        resetDisplay: false
      })
    }
    else {
      this.setState(state=>({
        display: state.display + String(key)
      }));
    }
    
  }

  changeOperator = operator =>{
    if (this.state.operand !== '' && !this.state.resetDisplay){
      this.calculate();
    }
    this.setState(state => ({
      operator:operator,
      operand: state.display,
      resetDisplay: true
    }))
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.display}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.changeOperator('/')}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={()=>this.changeDisplay(7)}>7</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.changeDisplay(8)}>8</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.changeDisplay(9)}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.changeOperator('*')}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={()=>this.changeDisplay(4)}>4</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.changeDisplay(5)}>5</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.changeDisplay(6)}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.changeOperator('-')}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={()=>this.changeDisplay(1)}>1</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.changeDisplay(2)}>2</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.changeDisplay(3)}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.changeOperator('+')}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={()=>this.changeDisplay('0')}>0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.calculate}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
