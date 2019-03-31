function addNewItem(todo, idx){
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

export default addNewItem;