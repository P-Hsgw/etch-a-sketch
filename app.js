const container = document.querySelector(".grid-container");
const size = document.getElementById("size");
const erase = document.getElementById("erase");

// Define default size of a grid - 16x16
const defaultState = 16;

// Add a typewriter effect in a title
let typeWriterIterator = 0;
function typeWriter() {
  let txt = "Etch-a-sketch";
  let speed = 75;
  if (typeWriterIterator < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(
      typeWriterIterator
    );
    typeWriterIterator++;
    setTimeout(typeWriter, speed);
  }
}

// Create a grid with chosen state/size and implement basic functionality of the game, while generating random colors
function gridCreator(state) {
  let stateInt = parseInt(state);
  let ustateIntSquare = Math.pow(stateInt, 2);
  let i;
  for (i = 0; i < ustateIntSquare; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "square");
    container.appendChild(div);
    div.addEventListener("mouseover", function (e) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.background = `#${randomColor}`;
    });
  }
  document.getElementById(
    "container"
  ).style.gridTemplateColumns = `repeat(${stateInt}, 1fr)`;
}

// Clear the grid from colors
function clearGrid() {
  const gridArray = Array.from(container.childNodes);
  gridArray.forEach((element) => {
    container.removeChild(element);
  });
}

// Let user choose the grid size and catches errors
function gridPrompt() {
  let choice = prompt("Enter number from 1 to 64");
  if (isNaN(choice) || choice === "" || choice === null) {
    return 16;
  } else if (choice > 64) {
    alert("Error - number too big");
    return 16;
  } else {
    return choice;
  }
}

// Listen to user click and let them chose the grid size with gridPrompt, and reset the grid with clearGrid
size.addEventListener(`click`, () => {
  clearGrid();
  let newState = gridPrompt();
  gridCreator(newState);
});

// Let user reset the grid with clearGrid
erase.addEventListener(`click`, () => {
  clearGrid();
  gridCreator(defaultState);
});

// Initiates the grid with defaultState
gridCreator(defaultState);
typeWriter();
