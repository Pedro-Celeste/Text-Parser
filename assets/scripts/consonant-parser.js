// Use strict mode for this script
"use strict";

// Get all necessary elements in the HTML document
const resultParagraph = document.getElementById("parser-result");
const inputField = document.getElementById("input-field");

// Add event listener for every time the user changes the text field
inputField.addEventListener(
  "input",
  function() {
    reloadElementText(inputField.value, resultParagraph);
  }
);


// --- Helper Functions ---

function howManyConsonants(string) {
  const consonants = [
    "b", "c", "d", "f", "g", "h",
    "j", "k", "l", "m", "n", "p",
    "q","r", "s", "t", "v", "w",
    "x", "y", "z", "ç", "ñ",
  ];
  let counter = 0;
  
  for (let char of string) {
    if (consonants.includes(char.toLowerCase())) counter++;
  }

  return counter;
}


function howManyVowels(string) {
  const consonants = [
    "a", "e", "i", "o", "u",
  ];
  let counter = 0;
  
  for (let char of string) {
    if (consonants.includes(char.toLowerCase())) counter++;
  }

  return counter;
}


function reloadElementText(inputText, paragraphElement) {
  let consonantCounter = howManyConsonants(inputText);
  let vowelCounter = howManyVowels(inputText);
  paragraphElement.innerHTML = `Your text has\
  <strong>${consonantCounter}</strong> consonants\
  and <strong>${vowelCounter}</strong> vowels!`;
}