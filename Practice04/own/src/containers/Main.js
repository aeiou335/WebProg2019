import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Footer from '../components/Footer';
import addNewItem from '../components/newElement';
import TodoList from './TodoList';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {todos:document.createElement("UL"), idx:0};
    }
    handleInput = e => {
        if (e.key === "Enter" && e.target.value !== ""){
            const value = e.target.value;
            e.target.value = "";
            const newItem = addNewItem(value, this.state.idx);
            this.setState((state, newItem) => ({todos:state.todos.appendChild(newItem),idx: state.idx+1}));
            console.log(this.state.todos)
        }
    }

    render(){
        /*
        let parent = document.createElement("UL");
        parent.classList.add("todo-app__list");
        console.log(this.state.todos)
        if (this.state.todos !== []){
            for (let item of this.state.todos){
                console.log(item)
                parent.appendChild(item);
            }
        }
        */
        //console.log(parent)
        return (
            <div className="todo-app__root">
                <Header />
                <section className="todo-app__main">
                    <Input onKeyPress={this.handleInput} />
                    <ul class="todo-app__list" id="todo-list">{this.state.todos}</ul>
                </section>                
                <Footer />
            </div>
            
        )
    }
}
export default Main;