import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <img src={this.props.img} className="logo" alt="Good cat"/>
        <h1 className="brand">{this.props.text}</h1>
      </div>
    )
  }
}

class Main extends Component {
  render () {
    let titles = [];
    let blocks = [];
    //blocks.push()
    for (let data of this.props.text){
      titles.push(data.blockTitle);
      let block = [];
      for (let v of data.blockContents){
        block.push(<li>{v}</li>);
      }
      blocks.push(block)
    }
    let contents = [];
    for (let i=0; i<titles.length; i++){
      contents.push(
      
      <div className="post">
        <h2 className="post-header">
          {titles[i]}
        </h2><hr />
        <ul className="single-list">
          {blocks[i]}
        </ul>  
      </div>
      )
    }
    return (<div>{contents}</div>)
  }
}

export {Header, Main};
