// 4. Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,then find their sum and the average

function randomNumber(){
let randomNum = Math.floor(Math.random()*89) + 10;
return randomNum;
}

var a = randomNumber();
var b = randomNumber();
var c = randomNumber();
var d = randomNumber();
var e = randomNumber();
console.log("Random numbers are: "+ a, b, c, d, e);

var sum =(a + b + c + d + e) ;
console.log("Sum of above numbers: "+ sum);

var average = ((a + b + c + d + e)/5);
console.log("Average of above numbers: "+ average);