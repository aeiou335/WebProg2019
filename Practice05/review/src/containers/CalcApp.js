import React from 'react';
import CalcButton from '../components/CalcButton';

class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNum: 0,
      num1: null,
      num2: null,
      op: null,
      multipleOp: false,
      setting2ndNum: false,
      setting2ndNum1: true
    };
  }

  resetState = () => {
    this.setState({
      showNum: 0,
      num1: null,
      num2: null,
      op: null,
      multipleOp: false,
      setting2ndNum: false,
      setting2ndNum1: true
    });
  };

  signSwitch = () => {
    this.setState(state => ({
      showNum: -1 * state.showNum,
      num1: -1 * state.num1
    }));
  };

  divideHundred = () => {
    this.setState(state => ({
      showNum: 0.01 * state.showNum,
      num1: 0.01 * state.num1
    }));
  };

  getPrecision = number => {
    var n = number.toString().split('.');
    return n.length > 1 ? n[1].length : 0;
  };

  addPoint = () => {
    if (
      parseInt(this.state.showNum) === this.state.showNum ||
      this.state.showNum === 0
    ) {
      this.setState(state => ({ showNum: state.showNum + '.' }));
      this.setState(state => ({ cur_num: state.cur_num + '.' }));
    }
  };

  setNum = number => {
    if (this.state.setting2ndNum) {
      this.setState({ showNum: number });
      this.setState({ num2: number });
      this.setState({ setting2ndNum: false });
    } else if (
      (this.state.num1 === null && this.state.num2 === null) ||
      this.state.setting2ndNum1
    ) {
      this.setState({ showNum: number, num1: number, setting2ndNum1: false });
    } else if (parseInt(this.state.showNum) === this.state.showNum) {
      this.setState(state => ({
        showNum: state.showNum * 10 + number,
        num1: state.showNum * 10 + number
      }));
    } else {
      var float_num = this.state.showNum.toString().split('.')[1].length;
      this.setState(state => ({
        showNum: (
          parseFloat(state.showNum) +
          Math.pow(0.1, float_num + 1) * number
        ).toFixed(float_num + 1),
        num1: (
          parseFloat(state.showNum) +
          Math.pow(0.1, float_num + 1) * number
        ).toFixed(float_num + 1)
      }));
    }
  };

  setOp = op => {
    if (!this.state.multipleOp) {
      this.setState({ op: op });
    } else {
      this.setEqual();
      this.setState({ op: op });
    }
    this.setState({ setting2ndNum: true, multipleOp: true });
  };

  setEqual = () => {
    const num1 = this.state.num1;
    const num2 = this.state.num2;
    let ans;
    switch (this.state.op) {
      case '+':
        ans = num1 + num2;
        this.setState({ showNum: ans, num1: ans });
        break;
      case '-':
        ans = num1 - num2;
        this.setState({ showNum: ans, num1: ans });
        break;
      case '*':
        ans = num1 * num2;
        this.setState({ showNum: ans, num1: ans });
        break;
      case '/':
        ans = num1 / num2;
        this.setState({ showNum: ans, num1: ans });
        break;
      default:
        this.setState({ showNum: 0 });
    }
    this.setState({ setting2ndNum1: true });
  };

  render() {
    return (
      <div className='calc-app'>
        <div className='calc-container'>
          <div className='calc-output'>
            <div className='calc-display'>{this.state.showNum}</div>
          </div>
          <div className='calc-row'>
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.signSwitch}>+/-</CalcButton>
            <CalcButton onClick={this.divideHundred}>%</CalcButton>
            <CalcButton
              className='calc-operator'
              onClick={() => this.setOp('/')}
            >
              ÷
            </CalcButton>
          </div>
          <div className='calc-row'>
            <CalcButton className='calc-number' onClick={() => this.setNum(7)}>
              7
            </CalcButton>
            <CalcButton className='calc-number' onClick={() => this.setNum(8)}>
              8
            </CalcButton>
            <CalcButton className='calc-number' onClick={() => this.setNum(9)}>
              9
            </CalcButton>
            <CalcButton
              className='calc-operator'
              onClick={() => this.setOp('*')}
            >
              x
            </CalcButton>
          </div>
          <div className='calc-row'>
            <CalcButton className='calc-number' onClick={() => this.setNum(4)}>
              4
            </CalcButton>
            <CalcButton className='calc-number' onClick={() => this.setNum(5)}>
              5
            </CalcButton>
            <CalcButton className='calc-number' onClick={() => this.setNum(6)}>
              6
            </CalcButton>
            <CalcButton
              className='calc-operator'
              onClick={() => this.setOp('-')}
            >
              -
            </CalcButton>
          </div>
          <div className='calc-row'>
            <CalcButton className='calc-number' onClick={() => this.setNum(1)}>
              1
            </CalcButton>
            <CalcButton className='calc-number' onClick={() => this.setNum(2)}>
              2
            </CalcButton>
            <CalcButton className='calc-number' onClick={() => this.setNum(3)}>
              3
            </CalcButton>
            <CalcButton
              className='calc-operator'
              onClick={() => this.setOp('+')}
            >
              +
            </CalcButton>
          </div>
          <div className='calc-row'>
            <CalcButton
              className='calc-number bigger-btn'
              onClick={() => this.setNum(0)}
            >
              0
            </CalcButton>
            <CalcButton className='calc-number' onClick={this.addPoint}>
              .
            </CalcButton>
            <CalcButton className='calc-operator' onClick={this.setEqual}>
              =
            </CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
