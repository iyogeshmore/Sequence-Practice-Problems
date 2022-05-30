// 1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

function randomNumber(){
    let random= Math.floor(Math.random()*899+100); // Get 3 digit value 
    return random;
}

var a = randomNumber();
var b = randomNumber();
var c = randomNumber();
var d = randomNumber();
var e = randomNumber();
console.log("Random number's are : "+a,+b,+c,+d,+e);

// maximum value

if ((a>b) && (a>c) && (a>d) && (a>e))
{
 console.log("Maximum number is: "+a);
}
if ((b>a) && (b>c) && (b>d) && (b>e))
{
 console.log("Maximum number is: "+b);
}
if ((c>a) && (c>b) && (c>d) && (c>e))
{
 console.log("Maximum number is: "+c);
}
if ((d>a) && (d>b) && (d>c) && (d>e))
{
 console.log("Maximum number is: "+d);
}
if ((e>a) && (e>b) && (e>c) && (e>d))
{
 console.log("Maximum number is: "+e);
}

// minimum value

if ((a<b) && (a<c) && (a<d) && (a<e))
{
 console.log("Minimum number is: "+a);
}
if ((b<a) && (b<c) && (b<d) && (b<e))
{
 console.log("Minimum number is: "+b);
}
if ((c<a) && (c<b) && (c<d) && (c<e))
{
 console.log("Minimum number is: "+c);
}
if ((d<a) && (d<b) && (d<c) && (d<e))
{
 console.log("Minimum number is: "+d);
}
if ((e<a) && (e<b) && (e<c) && (e<d))
{
 console.log("Minimum number is: "+e);
}