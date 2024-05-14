
// declare your variables. in this case we have the whole alphabet
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// creating a function to interact with the variable we just created. for each guess the person selects on the buttons we created it will display the letter selected
function setupGuesses(element, handleGuess) {

  // we used .split and firEach to separate our string of letters we created in the variable above so the code will loop through and read each letter separately
  alphabet.split('').forEach((letter) => {
    // creating a button in js using createElement
    const btn = document.createElement('button');
    // giving each buttons innerText a value of a letter
    btn.innerText = letter;
    // adding an event listener to handleGuess and register a click on each letter
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    // we append the button to our element parameter in order to display buttons
    element.append(btn);
  });
}

export default setupGuesses;
