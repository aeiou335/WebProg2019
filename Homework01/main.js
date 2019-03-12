let todoListData = [];
const input = document.getElementById("todo-input");
const todoCount = document.getElementById("todo-count");
const todoList = document.getElementById("todo-list");
let idx = 0;
input.addEventListener("keyup", event => {
    if (event.keyCode === 13 && event.target.value !== ""){
        let newStuff = addNewItem(event.target.value);
        todoList.appendChild(newStuff);
        input.value = "";
        todoListData.push({node: newStuff, isComplete: false});
        todoCountHandler();
    }
});

function filterHandler(filterType){
    todoList.innerHTML = "";
    if (filterType === "all"){
        for (let data of todoListData){
            todoList.append(data.node);
        }
    } else if (filterType === "active"){
        for (let data of todoListData){
            if (!data.isComplete) todoList.append(data.node);
        }
    } else {
        for (let data of todoListData){
            if (data.isComplete) todoList.append(data.node);
        }
    }
}

function deleteAllHandler(){
    let i=0;
    let child = todoList.firstChild;
    while (child){
        let sib = child.nextSibling;
        if(todoListData[i].node === child && todoListData[i].isComplete){
            todoList.removeChild(child);
        }
        child = sib;
        i++;
    }
    todoListData = todoListData.filter(ele => !ele.isComplete);
    todoCountHandler();
}

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
    let idx = 0;
    if (link.checked){
        for (let i=0; i<todoListData.length; i++){
            if (todoListData[i].node === link.parentNode.parentNode){
                todoListData[i].isComplete=true;
                idx = i;
            }
        }
        const sNode = document.createElement("S");
        sNode.style.fontWeight = "lighter";
        sNode.innerHTML = h1Node.innerHTML;
        h1Node.removeChild(h1Node.childNodes[0]);
        h1Node.appendChild(sNode);
    }
    else{
        for (let i=0; i<todoListData.length; i++){
            if (todoListData[i].node === link.parentNode.parentNode){
                todoListData[i].isComplete=false;
                idx = i;
            }                
        }
        const text = h1Node.childNodes[0].innerHTML;
        h1Node.removeChild(h1Node.childNodes[0]);
        h1Node.innerHTML = text;
    }
    todoListData[idx].node = link.parentNode.parentNode;
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
