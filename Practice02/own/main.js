var images = ["http://i.imgur.com/qmCpvEj.jpg",
            "https://i.imgur.com/JoM8jvO.jpg",
            "https://i.imgur.com/XqCMmOE.jpg",
            "https://i.imgur.com/mJ0NvPe.jpg",
            "https://i.imgur.com/cYE2N4p.jpg"];
var imagesNum = images.length;

function prevImage(){
    let imgNode = document.getElementById("display");
    let srcNode = document.getElementById("Source");
    let smallPrevImgNode = document.getElementById("prev_small_display");
    let smallImgNode = document.getElementById("small_display");
    let smallNextImgNode = document.getElementById("next_small_display");
    let idx = images.indexOf(imgNode.src);
    imgNode.src = "images/loading.gif";
    if (idx > 0){
        idx = idx - 1;
        let buttonNode = document.getElementsByClassName("image-viewer__button")[1];
        let button = buttonNode.firstElementChild;
        button.classList.remove("disabled");
    }
    if (idx == imagesNum-2){
        smallNextImgNode.style.visibility = "visible";
    }
    if (idx == 0){
        let buttonNode = document.getElementsByClassName("image-viewer__button")[0];
        let button = buttonNode.firstElementChild;
        button.className = "disabled";
        smallPrevImgNode.src = "";
        smallPrevImgNode.style.visibility = "hidden";
    }
    else{
        smallPrevImgNode.src = images[idx-1];
    }
    smallNextImgNode.src = images[idx+1];
    smallImgNode.src = imgNode.src = images[idx];
    smallPrevImgNode.src = images[idx-1];
    srcNode.firstElementChild.href = images[idx];
    srcNode.firstElementChild.text = images[idx];
}

function nextImage(){
    let imgNode = document.getElementById("display");
    let srcNode = document.getElementById("Source");
    let smallPrevImgNode = document.getElementById("prev_small_display");
    let smallImgNode = document.getElementById("small_display");
    let smallNextImgNode = document.getElementById("next_small_display");
    let idx = images.indexOf(imgNode.src);
    imgNode.src = "images/loading.gif";
    if (idx < imagesNum-1){
        idx = idx + 1;
        let buttonNode = document.getElementsByClassName("image-viewer__button")[0];
        let button = buttonNode.firstElementChild;
        button.classList.remove("disabled");
    }
    if (idx == 1){
        smallPrevImgNode.style.visibility = "visible";
    }
    if (idx == imagesNum-1){
        let buttonNode = document.getElementsByClassName("image-viewer__button")[1];
        let button = buttonNode.firstElementChild;
        button.className = "disabled";
        smallNextImgNode.src = "";
        smallNextImgNode.style.visibility = "hidden";
    }
    else{
        smallNextImgNode.src = images[idx+1];
    }
    smallPrevImgNode.src = images[idx-1];
    smallImgNode.src = imgNode.src = images[idx];
    srcNode.firstElementChild.href = images[idx];
    srcNode.firstElementChild.text = images[idx];
}