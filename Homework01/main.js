let todoListData = [];
const input = document.getElementById("todo-input");
const todoCount = document.getElementById("todo-count");
let idx = 0;
input.addEventListener("keyup", event => {
    if (event.keyCode === 13 && event.target.value !== ""){
        const todoList = document.getElementById("todo-list");
        let newStuff = addNewItem(event.target.value);
        todoList.appendChild(newStuff);
        input.value = "";
        todoListData.push({node: newStuff, isComplete: false});
        todoCountHandler();
    }
});

function todoCountHandler(){
    todoCount.innerHTML = todoListData.filter(ele => !ele.isComplete).length + " left";
}

function deleteHandler(link){
    todoListData = todoListData.filter(ele => ele.node !== link.parentNode)
    link.parentNode.parentNode.removeChild(link.parentNode);
    todoCountHandler();
}

function checkboxClickedHandler(link){
    const h1Node = link.parentNode.parentNode.childNodes[1];
    if (link.checked){
        for (let i=0; i<todoListData.length; i++){
            if (todoListData[i].node === link.parentNode.parentNode) 
                todoListData[i].isComplete=true;
        }
        const sNode = document.createElement("S");
        sNode.style.fontWeight = "lighter";
        sNode.innerHTML = h1Node.innerHTML;
        h1Node.removeChild(h1Node.childNodes[0]);
        h1Node.appendChild(sNode);
    }
    else{
        for (let i=0; i<todoListData.length; i++){
            if (todoListData[i].node === link.parentNode.parentNode) 
                todoListData[i].isComplete=false;
        }
        const text = h1Node.childNodes[0].innerHTML;
        h1Node.removeChild(h1Node.childNodes[0]);
        h1Node.innerHTML = text;
    }
    todoCountHandler();
}

function addNewItem(todo){
    const itemNode = document.createElement("LI");
    const wrapper = document.createElement("DIV");
    const checkbox = document.createElement("INPUT");
    const h1Node = document.createElement("H1");
    const label = document.createElement("LABEL")
    const imgNode = document.createElement("IMG");
    label.setAttribute("for", idx);
    checkbox.setAttribute("id", idx);
    idx += 1;
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onClick", "checkboxClickedHandler(this)");
    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);
    wrapper.classList.add("todo-app__checkbox");
    h1Node.classList.add("todo-app__item-detail")
    h1Node.innerHTML = todo;
    imgNode.setAttribute("src", "img/x.png");
    imgNode.setAttribute("onclick", "deleteHandler(this)");
    imgNode.classList.add("todo-app__item-x")
    itemNode.appendChild(wrapper);
    itemNode.appendChild(h1Node);
    itemNode.appendChild(imgNode);
    itemNode.classList.add("todo-app__item");
    return itemNode;
}
