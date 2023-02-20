// Use strict mode for this script
"use strict";

let message = "Eida is my waifu now.";
let consonantCounter = 0;

// List with all the consonants
let consonantList = [
    "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p",
    "q", "r", "s", "t", "v", "w", "x", "y", "z", "ç"
];

let char;
for (char of message.toLowerCase()) {
    if (consonantList.includes(char)) {consonantCounter++};
    continue;
}

// Print the final result to the console
console.log(`Your message has ${consonantCounter} consonants!`);