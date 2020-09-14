// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * let is in different scopes
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter2, because its getting its variable from outside the function
 * 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * when you dont want global variables in your code versus using a global variable in multiple functions.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

const inning = function(){
  let points = Math.round(Math.random() + 3);
  return points;
    

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, num){
let game ={};
  function finalInning(){
  for(i = 0; i <= num; i++){
    game = {
      home: h,
      away: a,
    };
    let h =+ inning;
    let a =+ inning;
    }
    console.log(game);
}
finalScore(inning(), 9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each point in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */
let home = 0;
let away = 0;
function scoreboard(inningNum){
  let count = 0;
    for (let i = 0; i <= inningNum; i++){
      count++;
      console.log(`inning ${count}: ${getInningScore()}`);
}
      console.log (`Final Score: ${home} - ${away}`);
return;
};
}
function getInningScore(){
  let awayTeam = inning();
  let homeTeam = inning();
  home += homeTeam;
  away += awayTeam;
  return `${awayTeam} - ${homeTeam}`;
};
scoreboard(3);