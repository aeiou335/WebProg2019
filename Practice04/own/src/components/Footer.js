import React from 'react';
export default ({filterHandler, deleteAllHandler}) => {
    return <footer id="todo-footer" className="todo-app__footer">
        <div className="todo-app__total" id="todo-count">0 left</div>
        <ul className="todo-app__view-buttons">
            <li className="todo-app__view-buttons"><button >All</button></li>
            <li className="todo-app__view-buttons"><button >Active</button></li>
            <li className="todo-app__view-buttons"><button >Completed</button></li>
        </ul>
        <div className="todo-app__clean"><button onClick={deleteAllHandler}>Clear completed</button></div>
    </footer>
}