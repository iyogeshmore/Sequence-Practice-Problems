// 2. Read a Number and Display the week day (Sunday, Monday,...)

const prompts = require("prompt-sync")();
var num;
num = prompts("Enter number between 0 to 6 : ");

if (num == 0) {
    console.log("Sunday");
} else if (num == 1) {
    console.log("Monday");
} else if (num == 2) {
    console.log("Tuesday");
} else if (num == 3) {
    console.log("Wednesday");
} else if (num == 4) {
    console.log("Thursday");
} else if (num == 5) {
    console.log("Friday");
} else if (num == 6) {
    console.log("Saturday");
}
else {
    console.log(' Invalid input ! "Please enter number between 0 to 6"');
}