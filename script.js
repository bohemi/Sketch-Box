const parentBox = document.querySelector("#sketchBoxContainer");
const colorPickerButton = document.querySelector(".colorPicker");
const randomColorButton = document.querySelector(".randomColors");
const eraseButton = document.querySelector(".erase");

createGrid(parentBox, "lightpink", 195); // 196 to be minimum and 14 takes each row

const colorBoxes = document.querySelectorAll(".colorBoxes"); // let createGrid function make all boxes and then get all the box nodes class here.

let currentColor = "#0000ff";
let shouldDrawRandomColors = false; // initially false so that it doesn't draw random colors when the mouse is not pressed.

buttonsBehaviour(colorPickerButton, randomColorButton, eraseButton);
drawOnBoxes(colorBoxes);

function buttonsBehaviour(colorButton, randomColorsButton, eraserButton) {
  colorButton.onchange = function (event) {
    shouldDrawRandomColors = false;
    currentColor = colorButton.value; // update the color value when the color picker changes
    console.log(currentColor);
  }
  // just allows the drawing of random color from a button press. which the function getRandomColors will give colors
  // and will be called inside the drawOnBoxes function.
  randomColorsButton.onmousedown = function (event) {
    shouldDrawRandomColors = true;
  };
  eraseButton.onmousedown = function (event) {
    shouldDrawRandomColors = false;
    currentColor = "lightpink"; // drop the default color of container box
  };
}

// The function will be called inside the drawOnBoxes function so when a user hover over each box,
// it will change the color of the box to a random color by calling the function for each box.
function getRandomColors() {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let colors = "";
  for (let i = 0; i < 6; i++) {
    colors += hexArray[Math.floor(Math.random() * 16)]; // multiplying by 16 because there are 16 hex values (0-9 and A-F)
  }
  return currentColor = `#${colors}`; // return the color in hex format
}

function drawOnBoxes(box) {
  let isMouseButtonHeldDown = false; // initially false so that it doesn't draw on boxes when the mouse is not pressed.
  box.forEach((box) => {
    box.onmouseenter = function () {
      if (isMouseButtonHeldDown == true) {
        if (box.style.backgroundColor == currentColor) {
          console.log("Box already has the color");
          return;
        }
        if (shouldDrawRandomColors == true) {
          // drop the randcolor function here
          box.style.backgroundColor = getRandomColors();
          console.log("Drawing random colors");
          return;
        }
        box.style.backgroundColor = currentColor;
      }
    };
    // will draw on boxes when the mouse is pressed and moved over them.
    box.onmousedown = function () {
      isMouseButtonHeldDown = true;
    };
    // would not draw on boxes when the mouse button is released.
    box.onmouseup = function () {
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
