import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
class App extends Component {
  render() {
    return (
      <body>
        <div id="root">
          <h1>Hello, world!</h1>
        </div>
      </body>
      
    );
  }
}
*/
class ScoreCard extends Component{
  render() {
    const records = this.props.scoreCard.records;
    let items = [];
    for (let record of records){
      items.push(<tr><td>{record[0]} </td><td> {record[1]} </td></tr>)
    }
    return (
      <table>
        <caption> {this.props.scoreCard.name}'s Score </caption>
    <thead>
      <tr><th> {this.props.columnIndex[0]} </th><th> {this.props.columnIndex[1]} </th></tr>
    </thead>
    <tbody>
      {items}
    </tbody>
      </table>
    )
  }
}
export default ScoreCard;
