const container = document.querySelector(".grid-container")
const box = document.querySelectorAll("#square")


function gridCreator() {

  let userChoice = prompt("Wpisz liczbę")
  userChoiceInt = parseInt(userChoice)
  if (userChoiceInt > 100) {
    alert ("Error - number too big");
  } else {
    console.log(userChoiceInt);
    let i;
    userChoiceIntSquare = Math.pow(userChoiceInt, 2)
    for (i=0; i < userChoiceIntSquare; i++) {
      const div = document.createElement('div');
      div.setAttribute('id', 'square'); 
      container.appendChild(div);
      div.addEventListener('mouseover', function (e) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.background = `#${randomColor}`;
      });
    }
    document.getElementById("container").style.gridTemplateColumns = `repeat(${userChoiceInt}, 1fr)`;

  }
}

gridCreator();