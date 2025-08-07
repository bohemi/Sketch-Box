const parentBox = document.querySelector("#sketchBoxContainer");

createGrid(parentBox, "lightpink", 196); // 196 to be minimum and 14 takes each row

const colorBoxes = document.querySelectorAll(".colorBoxes"); // let the grid be created then get getting the boxes.

drawOnBoxes(colorBoxes);

function drawOnBoxes(box) {
  let isMouseButtonHeldDown = false; // initially false so that it doesn't draw on boxes when the mouse is not pressed.
  colorBoxes.forEach((box) => {
    box.onmouseenter = function (event) {
      if (isMouseButtonHeldDown == true) {
        box.style.backgroundColor = "blue";
      }
    };
    // will draw on boxes when the mouse is pressed and moved over them.
    box.onmousedown = function (event) {
      isMouseButtonHeldDown = true;
    };
    // would not draw on boxes when the mouse button is released.
    box.onmouseup = function (event) {
      isMouseButtonHeldDown = false;
    };
  });
}

function createGrid(parent, color, gridLength) {
  for (let i = 0; i < gridLength; i++) {
    const colorBoxDivs = document.createElement("div");
    colorBoxDivs.setAttribute("class", "colorBoxes");
    parent.appendChild(colorBoxDivs);
  }
}
