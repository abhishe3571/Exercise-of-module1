// If sentences

/* Create an if sentence that will give a user a message based
   on his bank account balance. Use the balance variable and 
   change that.

   . If a user has 0 or less balance log out 'Please deposit some money!'
   . If a user has more than 0 and at most 1000 log out 'Your balance is looking okay'
   . If a user has more than 1000 and at most 3000 log out 'Your balance is looking good'
   . If a user has more than 3000 and at most 10000 log out 'Your balance is fantastic'
   . If a user has more than 10000 log out 'Your balance is AMAZING!'
*/


const balance=1000;


if (balance<=0|| 1000){
    console.log('Please deposit some money!');
}
if (0 < balance <1000){
    console.log('Your balance is looking okay');
}
if (1000 < balance <3000){
    console.log('Your balance is looking good');
}
if (3000 < balance <5000){
    console.log('Your balance is fantastic');
}
if (balance <= 10000){
    console.log( 'Your balance is AMAZING!');
}

//Function

/* Create a function called getCircleArea. It should have the 
   radius of the circle as parameter and return the circle 
   area. What happens if we dont return anything in the function?
*/

function getCircleArea(radius){
    const area = (3.14 * radius * radius);
    console.log("Circle area:", area);   // in square meter
}
getCircleArea(5);


/* Create a function called celciusToFahreneit it should 
   have a parameter called celcius.It should return the
   temperature in fahrenheit.
*/

function celciusToFahreneit(celcius){
    const temperatureInFahreneit = celcius * (9/5) + 32; // in Fahreneit
    console.log("Temperature in Fahreneit:", temperatureInFahreneit);

}
celciusToFahreneit(20);

// For loop

// Simple for loop

/* 
    Create a for loop that logs out the numbers from 74 - 98
*/

for (let i=74; i < 99; i++) {
    console.log(`"the numbers": ${i}`);
}

// For loop in a function
/* Create a function that has two parameters: stringToLog and 
   numberOfTimesToLog
   When calling the function it should log out the stringToLog
   the amount of times specified in numberOfTimesToLog. Use a for loop.
*/


function stringLog(stringToLog, numberOfTimesToLog) {
    for (let i = 1; i < numberOfTimesToLog; i++){
    console.log(stringToLog);
    };
}
stringLog("Welcome", 5);

