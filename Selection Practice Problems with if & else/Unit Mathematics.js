//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompts = require("prompt-sync")();
var num;
    num = prompts ("Enter number : " );
 var unit = (num > 1)
  console.log(unit=num%10)  ;
    var tens = (num > 2)
    console.log(tens=num/10)%10; 
    var hundreds = (num > 3)
    console.log(hundreds=num/100)%10; 
    var thosands = (num > 4)
    console.log(thosands=num/1000) ; 
    
    console.log("Thousands: "+thosands+" Hundreds: "+hundreds+" Tens: "+tens+" Units: "+unit); 
 


