const container = document.querySelector(".grid-container")


function gridCreator() {

  let userChoice = prompt("Wpisz liczbę")
  userChoiceInt = parseInt(userChoice)
 /* userChoiceInt = typeof message !== 'undefined' ? userChoiceInt : 16;*/
  if (userChoiceInt > 50) {
    alert ("Error - number too big");
  } else {
    console.log(userChoiceInt);
    let i;
    userChoiceInt = Math.pow(userChoiceInt, 2)
    for (i=0; i < userChoiceInt; i++) {
      const div = document.createElement('div');
      div.textContent=`Berro${i}`;
      container.appendChild(div)
      console.log(userChoiceInt)
      
  }
  
  }
}

gridCreator()