import React from 'react';

function TodoList(todos){
    let parent = <ul className="todo-app__list" id="todo-list"></ul>;
    for (let item of todos){
        parent.appendChild(item);
    }
    return parent;
}

export default TodoList;