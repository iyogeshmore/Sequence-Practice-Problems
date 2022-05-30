// 3. Use REPL – Add two Random Dice Number and Print the Result

Math.random();
dice1=((Math.floor(Math.random() * 6) + 1));
console.log("Roll the dice 1: "+dice1)
dice2=((Math.floor(Math.random() * 6) + 1));
console.log("Roll the dice 2: "+dice2)
sum=((dice1+dice2));
console.log("Addition of two random dice number: "+sum)


/* 

********************************** Output **********************************
PS D:\Web Development\Java Script\Practice program> node "d:\Web Development\Java Script\Practice program\TwoDice.js"
Roll the dice 1: 4
Roll the dice 2: 3
Addition of two random dice number: 7
PS D:\Web Development\Java Script\Practice program> node "d:\Web Development\Java Script\Practice program\TwoDice.js"
Roll the dice 1: 1
Roll the dice 2: 3
Addition of two random dice number: 4 */