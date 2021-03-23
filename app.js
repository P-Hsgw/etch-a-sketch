const container = document.querySelector(".grid-container")
const box = document.querySelectorAll("#square")
const size = document.getElementById("size")
const erase = document.getElementById("erase")

// Defines default size of grid - 16x16
const defaultState = 16; 

// Creates a grid with chosen state - size
function gridCreator(state) {
  let stateInt = parseInt(state)
  let ustateIntSquare = Math.pow(stateInt, 2)
  let i;
  for (i=0; i < ustateIntSquare; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'square'); 
    container.appendChild(div);
    div.addEventListener('mouseover', function (e) {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      e.target.style.background = `#${randomColor}`;
    });
  }
  document.getElementById("container").style.gridTemplateColumns = `repeat(${stateInt}, 1fr)`;
}

// Clears the grid from colors
function clearGrid () {
  const gridArray = Array.from(container.childNodes);
  gridArray.forEach((element) => {
    container.removeChild(element);
  });
}

// Lets user choose the grid size and catches errors
function gridPrompt() {
  let choice = prompt("Enter number from 1 to 100")
  if (isNaN(choice) || choice === "") {
    return 16
  } else if (choice > 100) {
    alert ("Error - number too big");
    return 16
  } else {
    return choice;
  }

}

// Initiates the grid with defaultState
gridCreator(defaultState);

// Listens to user click and let him choce the grid size with gridPrompt, and resets the grid with clearGrid
size.addEventListener(`click`, e => {
  clearGrid()
  let newState = gridPrompt()
  gridCreator(newState)
})

// Lets user to reset the grid with clearGrid
erase.addEventListener(`click`,() => {
  clearGrid()
  gridCreator(defaultState)
})