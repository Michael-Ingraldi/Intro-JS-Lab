//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

const myJob = `Clown`;
const myLocation = `Toronto`;
let mySalary = 80000;
const myCompany = `The Circus`;

document.getElementById(`var1`).innerHTML = `You will be ${myJob} in ${myLocation} making $${mySalary} for ${myCompany}.`;

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let currentYear = 2020;
const birthYear = 1991;

document.getElementById(`var2`).innerHTML = `They are ${currentYear - birthYear} years old.`;

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 29;
const maxAge = 94;
let dailyAmount = 50;

let totalAmount = (maxAge - currentAge) * 365 * dailyAmount;

document.getElementById(`var3`).innerHTML = `You will need ${totalAmount} candies to last you to the ripe old age of ${maxAge}.`;

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let circleRadius = 5;
let circleCircumference = 2 * Math.PI * circleRadius;
let circleArea = Math.PI * circleRadius ** 2;

document.getElementById(`var4`).innerHTML = `The circumference is ${circleCircumference}. The area is ${circleArea}.`;


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let tempCelcius = 30;

let tempFarenheit = tempCelcius * (9 / 5) + 32;

document.getElementById(`var5`).innerHTML = `${tempFarenheit}°F is ${tempCelcius}°C.`;





//////////////////////////////////////////////////////////////////





// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
    return num * num;
  }
  
  document.getElementById(`js1`).innerHTML = `The result of squaring the number 3 is ${squareNumber(3)}.`;
  
  
  // EXERCISE 2
  // Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
  
  function halfNumber(num) {
    return num / 2;
  }
  
  document.getElementById(`js2`).innerHTML = `Half of 5 is ${halfNumber(5)}.`;
  
  
  // EXERCISE 3
  // Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
  
  function percentOf(a, b) {
    return (a / b)*100;
  }
  
  document.getElementById(`js3`).innerHTML = `2 is ${percentOf(2,4)}% of 4.`;
  
  // EXERCISE 4
  // Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  //      Bonus: Round the result so there are only two digits after the decimal.
  
  function areaOfCircle(rad) {
    return 2 * Math.PI * rad;
  }
  
  document.getElementById(`js4`).innerHTML = `The area for a circle with radius 2 is ${areaOfCircle(2)}.`
  
  
  // EXERCISE 5
  // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
  //      1. Take half of the number and store the result.
  //      2. Square the result of #1 and store that result. 
  //      3. Calculate the area of a circle with the result of #2 as the radius.   
  //      4. Calculate what percentage that area is of the squared result (#3).
  
  function calculateNumber(num) {
    let halfNum = num / 2;
    let squareNum = halfNum ** 2;
    let circleArea = 2 * Math.PI * squareNum;
    return (circleArea / squareNum) * 100;
  }
  
  document.getElementById(`js5`).innerHTML = `The final number is ${calculateNumber(5)}.`;