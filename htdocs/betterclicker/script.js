var lastX = 0;
var lastY = 0;

var mouse = false;

var counter = 0;

var primaryMouseButtonDown = false;

function setPrimaryButtonState(e) {
  var flags = e.buttons !== undefined ? e.buttons : e.which;
  primaryMouseButtonDown = (flags & 1) === 1;
  console.log("the stuff was triggered   " + primaryMouseButtonDown)
}

document.addEventListener("mousedown", setPrimaryButtonState);
document.addEventListener("mousemove", setPrimaryButtonState);
document.addEventListener("mouseup", setPrimaryButtonState);

function coord(event) {
    console.log(event.clientX);
    if(primaryMouseButtonDown) {
        counter++;
        document.getElementById("woah").innerText = counter;
    }
}

