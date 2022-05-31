// 3. Write a program that takes a year as input and outputs the Year is a Leap Year
//or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.

//Leap year

var year = 2048;
if((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
{
    console.log(year+ " This is a leap year.")
}
else
{
    console.log(year+ " This is not a leap year.")
}

//Not leap year

var year = 2014;
if ((0 == year % 4)&& (0 != year % 100)|| (0 == year % 400))
{
    console.log(year+" This is an leap year.")
}
else
{
    console.log(year+" Tjis is not an leap year.")
}