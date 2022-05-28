
// E - event
// I - input
// P - processing
// O - output

// step 1
let buttonElement = document.querySelector('#changeColor');

let numberOfClicks = 0;

// the first argument to addEventListener is the type of event
buttonElement.addEventListener('click', function(){


  let h1Element = document.querySelector('h1');
  if (numberOfClicks % 3 == 0) {
    h1Element.style.backgroundColor = 'yellow'
  } 
  if (numberOfClicks % 3== 1) {
      h1Element.style.backgroundColor = 'red';
  } 
  if (numberOfClicks % 3 == 2) {
      h1Element.style.backgroundColor = 'white';
  }
  numberOfClicks++;
  
  
})

