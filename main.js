import './style.css';
import getRandomWord from "./src/randomWord.js";
import setSharkImage from "./src/sharkImage.js";
import setupWord from './src/word.js';
import { isLetterInWord } from './src/word.js';
import { revealLetterInWord } from './src/word.js';
import setupGuesses from './src/guess.js';


document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;



const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  setSharkImage(document.querySelector("#shark-img"), numWrong);
  setupWord(document.querySelector("#word-container"), word);
  revealLetterInWord(word[0]);
  
  
  let sharkImgEl = document.querySelector('#shark-img');
  const handleGuess = (guessEvent, letter) => {
    // retrieve clicked button
    const button = guessEvent.target;
    
    // disable clicked button
    button.setAttribute("disabled", true);
    
    // check if the users guess is correct
    if (isLetterInWord(letter)) {
      
      revealLetterInWord(letter);
    } else {
      // if incorrect guess then we increase the numWrong count and update out shark image based on wrong guesses
      numWrong += 1; 
      console.log(numWrong)

        setSharkImage(sharkImgEl, numWrong);
      }
      // set wordIsComplete to true if every letter-box is a string
      const isWordComplete = Array.from(document.querySelectorAll(".letter-box")).every((el) => el.innerText !== "",
    )

      if (isWordComplete === true || numWrong >= 5) {
      document.querySelectorAll("button").forEach((btn) => {
        btn.setAttribute("disabled", true) 
      })
      // display message if the user wins or runs out of guesses
      const displayMessage = document.getElementById("game-status");
      if (isWordComplete === true) {
        displayMessage.textContent = "YOU WIN!"
      } else {
        displayMessage.textContent = "YOU WERE EATEN BY SHARKS!"
      }
    };
    }
    
    // selecting our letter-buttons id to listen for handleGuess
    setupGuesses(document.querySelector('#letter-buttons'), handleGuess);
    
  // see if isLetterInWord function works by console logging
  // console.log(isLetterInWord(word[0]), '(should be true)');
  // console.log(isLetterInWord('1'), '(should be false)');
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};



initSharkwords();

