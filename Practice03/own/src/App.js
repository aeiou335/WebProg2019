import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <img src={this.props.img} class="logo"/>
        <h1 className="brand">{this.props.text}</h1>
      </div>
    )
  }
}

class Main extends Component {
  render () {
    let blocks = [];
    //blocks.push()
    for (let block of this.props.text){
      blocks.push(
      <div class="main">
        <div className="post">
          <h2 className="post-header">
            {block}
          </h2><hr /></div>
      </div>
      )
    }
    return (blocks)
  }
}

export {Header, Main};
