let tbNode = document.getElementById("table");
let colIndex = ["Subject", "Score"]
class Row{
    constructor(data, tag) {
        this.node = document.createElement("tr");
        this.node.innerHTML = data.map(e => '<'+tag+'>'+e+'</'+tag+'>').join('')
    }
    get getNode() {return this.node; }
}

let capNode = document.createElement("caption");
capNode.textContent = "Ric's Score";
tbNode.appendChild(capNode);

let thNode = document.createElement("thead");
thNode.appendChild(new Row(colIndex, "th").getNode);
tbNode.appendChild(thNode);

let tbodyNode = document.createElement("tbody");
tbodyNode.appendChild(new Row(["English", 87], "td").getNode);
tbNode.appendChild(tbodyNode);