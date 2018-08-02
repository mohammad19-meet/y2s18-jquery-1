// Write all your JavaScript and JQuery code in this file! :)

var x = 0; // rotation of X
var y = 0; // rotation of Y
var z = 0; // rotation of Z

function updateSize(newSize) {
	$("img").width(newSize);
  // FINISH ME! Set the width of the MEET logo to be newSize in pixels.
}

function updateRotation() {
	$("img").eq(0).css("transform", "rotationX(" + x.toString()+"deg)" + "rotationY(" + y.toString()+"deg)" + "rotationZ(" + z.toString()+"deg)");

  // FINISH ME! Set the rotation of the MEET logo based on the values of (x, y, z) (see above!)
}

function updateXRotation(newX) {
  x = newX;
  updateRotation();
}

function updateYRotation(newY) {
  y = newY;
  updateRotation();
}

function updateZRotation(newZ) {
  z = newZ;
  updateRotation();
}

updateRotation()