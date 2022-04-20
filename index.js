const { fifaData } = require('./fifa.js')
// console.log(fifaData);
// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/
const finals2014 = fifaData.filter((key) => {
    return key.Year === 2014 && key.Stage === 'Final'
});
// console.log(finals2014);
//(a) Home Team name for 2014 world cup final
// console.log(finals2014[0]['Home Team Name']);
//(b) Away Team name for 2014 world cup final
// console.log(finals2014[0]['Away Team Name']);
//(c) Home Team goals for 2014 world cup final
// console.log(finals2014[0]['Home Team Goals']);
//(d) Away Team goals for 2014 world cup final
// console.log(finals2014[0]['Away Team Goals']);
//(e) Winner of 2014 world cup final */
// console.log(finals2014[0]['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/
function getFinals(fifArray) {
    const filteredByTeams = fifArray.filter((teams) => {
    return  teams.Stage === 'Final';
  });
  return filteredByTeams;
 }
// console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(fifArray, getFinalsCb) {
    const years = getFinalsCb(fifArray).map(date => date.Year);  
    return years;
}
// console.log(getYears(fifaData, getFinals));
/*returning a copy of the getFinals array from task 2 then passing 
    a function to map simply*/


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(fifArray, getFinalsCb) {
    const winners = getFinalsCb(fifArray).map(wins => wins['Home Team Goals'] > wins['Away Team Goals'] ?
    wins['Home Team Name'] : wins['Away Team Name'])

    return winners;
}
// console.log(getWinners(fifaData, getFinals));
/*CODE BREAKDOWN: first we have our HOF with 2 parameters, one for original object and the other for task 2 callback function.
next we set up our new object called winners. This is equal to our callback function.map and we are mapping what we call wins.
In this situation since our object key is a string with more than one word, we use bracket notation in place of dot notation.
The greater than symbol compares our two object keys. 
The question mark symbol is in place of an if statement. while the colon symbol is in place of an 'else'
It would be similar to saying: if (wins['Home Team Goals'] > wins['Away Team Goals']) {
    return wins['Home Team Name'];
} else {
    return  wins['Away Team Name'];
}
Next we just return our new object called winners 
Remember to get used to using different notation for different situations, not everything takes the same notation*/



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(fifArray, getFinalsCb, getYearsCb ,getWinnersCb) {
    const winnersData = getWinnersCb(fifArray, getFinals);
    const yearsData = getYearsCb(fifArray, getFinals);
    const winnersObject = winnersData.map((winnerName, yearByIndex) => `In ${yearsData[yearByIndex]}, ${winnerName} won the world cup!`);
    return winnersObject;
}
/*CODE BREAKDOWN: First our HOF with 4 paramaters, 3 of wich are CB parameters.
next set up the variables that will be used. The first is declared to pass the test although it is not read
Next we  apply our paramater getWinnersCb which takes the parameters of an array and the function getFinals*/
console.log(getWinnersByYear(fifaData, getFinals, getYears, getWinners));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive a callback function in a parameter that will take getFinals (from task 2) as an argument and ensure you pass in the fifaData as its argument
 
 💡 HINT: Example of invocation: getAverageGoals(getFinals(fifaData));

 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
 how to get the average number... I need to add all the home team goals and away team goals together for every match. then I need to
 divide by the total number of matches and round to the second decimal place.
*/

function getAverageGoals(getFinalsCb) {
    const addData = getFinalsCb.reduce((previousValue, currentvalue) => {
        return previousValue + currentvalue['Home Team Goals'] + currentvalue['Away Team Goals'];
    }, 0);
    return (addData / getFinalsCb.length).toFixed(2);

 }
 /*CODE BREAKDOWN: first step is to set our parameter which needs to be the callback function for getFinals.
 next step is to set our new variable.
 now we can use the reduce method. Remember to pass in our callback parameter before our reduce then set up the reduce method like normal
 Next we have our reduce method setup intially at zero, then we take the previousvalue and add it to the currentvalue of the home team goals
 key value + the away team goals key value.
 Once we have that we can return our new variable with that data in it and divide it by the length of the array giving us the number of
 matches played total.
 The final step is to fix it to two decimal places using the .toFixed method
 Now we can see the average number of goals scored per match! */
//  console.log(getAverageGoals(getFinals(fifaData)))




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
