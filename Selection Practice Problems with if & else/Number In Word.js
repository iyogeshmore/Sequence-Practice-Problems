// 1. Read a single digit number and write the number in word

const prompts = require("prompt-sync")();
var num;
num = prompts("Enter single digit number: ");

if (num == 0) {
    console.log("Zero");
} else if (num == 1) {
    console.log("One");
} else if (num == 2) {
    console.log("Two");
} else if (num == 3) {
    console.log("Three");
} else if (num == 4) {
    console.log("Four");
} else if (num == 5) {
    console.log("Five");
} else if (num == 6) {
    console.log("Six");
} else if (num == 7) {
    console.log("Seven");
} else if (num == 8) {
    console.log("Eight");8
} else if (num == 9) {
    console.log("Nine");
} else {
    console.log("Enter single digit number only.");
}