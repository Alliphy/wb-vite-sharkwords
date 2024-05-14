let word;

function setupWord(element, initWord) {
     word = initWord;

     word.split("").forEach(() => {
     element.insertAdjacentHTML("beforeend", `<div class="letter-box"></div>`);
    });

}

function isLetterInWord(letter) {
    return word.includes(letter);
}

function revealLetterInWord(letter) {
    // get all elements with class of letter-box
    const letterBoxes = document.querySelectorAll(".letter-box");

    // loop through each letter in word
    word.split("").forEach((wordLetter, index) => {

        if (wordLetter === letter) {
        // access the corresponding letter box element using its index
        letterBoxes[index].textContent = letter;
        }
    });
}


export default setupWord;
export { 
    isLetterInWord,
    revealLetterInWord,

 }

