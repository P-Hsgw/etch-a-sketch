const container = document.querySelector(".grid-container")
const box = document.querySelectorAll("#square")
const btn = document.querySelector(".btn")

let defaultState = 16; 

function gridCreator(state) {
  let stateInt = parseInt(state)
  if (stateInt > 100) {
    alert ("Error - number too big");
  } else {
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
}

function clearGrid () {
  const gridArray = Array.from(container.childNodes);
  gridArray.forEach((element) => {
    container.removeChild(element);
  });
}

gridCreator(defaultState);

btn.addEventListener(`click`, e => {
  clearGrid()
  let newState = prompt("Enter number from 1 to 100")
  gridCreator(newState)
})

