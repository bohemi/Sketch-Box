const parentBox = document.querySelector("#sketchBoxContainer");

createGrid(parentBox,"blue", 30);

function createGrid(parent, color, gridLength) {
  for (let i = 0; i < gridLength; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "colorBoxes");

    if ((i + 1) % 2 === 0) {
      div.style.backgroundColor = color;
    }
    parent.appendChild(div);
  }
}
