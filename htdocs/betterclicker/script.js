var counter = 0;

var primaryMouseButtonDown = false;

function setPrimaryButtonState(e) {
  var flags = e.buttons !== undefined ? e.buttons : e.which;
  primaryMouseButtonDown = (flags & 1) === 1;
  console.log("the stuff was triggered   " + primaryMouseButtonDown)
  if(primaryMouseButtonDown) {
    counter += 0.3;
    document.getElementById("woah").innerText = Math.round(counter);
  }
}

document.addEventListener("mousedown", setPrimaryButtonState);
document.addEventListener("mousemove", setPrimaryButtonState);
document.addEventListener("mouseup", setPrimaryButtonState);

