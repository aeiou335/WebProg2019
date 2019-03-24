import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Main, Header} from './App';
import * as serviceWorker from './serviceWorker';

const headerImg = "https://i.imgur.com/mJ0NvPe.jpg";
const headerText = "Hello, world!";
const header = <Header text={headerText} img={headerImg} />

class basicBlock {
    constructor(blockTitle, contents) {
        this.blockTitle = blockTitle;
        this.blockContents = contents;
    }
}
let blocks = [];
for (let i=0; i<10; i++){
    blocks.push(new basicBlock(`test${i}`, [`test${i}-1`, `test${i}-2`, `test${i}-3`]))
}
//let block1 = new basicBlock("test1", ["test1-1", "test1-2", "test1-3"])
//let data = ["test1", "test2"];
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Main text={blocks} header={header}/>, document.getElementById('main'));
ReactDOM.render(header, document.getElementById("header"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
