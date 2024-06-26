const dynamicContent = document.getElementById("dynamic-text");
const phrases = ["Fresher  ", "Frontend Developer  ", "Frontend Engineer  "];

let pharseIndex = 0;
let letterIndex = 0;
const typingSpeed = 350;
const erasingSpeed = 50;

function printLetters(phrase) {
    if (letterIndex == phrase.length) {
        clearLetters();
    }
    else if (letterIndex < phrase.length) {
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function () {
            printLetters(phrase)
        }, typingSpeed)
    }
    function clearLetters() {
        if (letterIndex == -1) {
            pharseIndex = (pharseIndex + 1) % phrases.length;
            letterIndex = 0;
            printLetters(phrases[pharseIndex])
        }
        else if (letterIndex > -1) {
            let updatedPhrase = "";
            for (let index = 0; index < letterIndex; index++) {
                updatedPhrase += phrases[pharseIndex].charAt(index);
            }
            dynamicContent.textContent = updatedPhrase;
            letterIndex -= 1;
            setTimeout(clearLetters, erasingSpeed)
        }
    }

}
printLetters(phrases[pharseIndex])
