var lastX = 0;
var lastY = 0;

var mouse = false;

var counter = 0;

document.body.onmousedown = mouseDown();
document.body.onmouseup = mouseUp();

function mouseDown() {
    mouse = true;
    console.log("down")
}

function mouseUp() {
    mouse = false;
}

function coord(event) {
    console.log(event.clientX);
    if(mouse) {
        counter++;
        document.getElementById("woah").innerText = counter;
    }
}

