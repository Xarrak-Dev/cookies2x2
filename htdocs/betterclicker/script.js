var lastX = 0;
var lastY = 0;

var mouse = false;

var counter = 0;

document.body.onmousedown = mouseDown();
document.body.onmouseup = mouseUp();

function mouseDown() {
    mouse = true;
}

function mouseUp() {
    mouse = false;
}

function coord(event) {
    var mouseX = exent.clientX;
    var mouseY = event.clientY;

    if(mouse) {
        counter++;
        document.getElementById("woah").innerText = counter;
    }
}

