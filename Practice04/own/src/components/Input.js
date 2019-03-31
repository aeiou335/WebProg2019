import React from 'react';
export default ({onKeyPress}) => {
    return <input className="todo-app__input" id="todo-input" placeholder="What needs to be done?" onKeyPress={onKeyPress} />
}