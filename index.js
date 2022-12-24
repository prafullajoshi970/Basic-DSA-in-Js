// #98 -Generate a random number between 0 and 100 inclusively.

console.log(Math.floor(Math.random() * 100) + 1) ;

//#99- Generate a random number between 50 and 100 inclusively.

console.log(Math.floor((Math.random() * 51) + 50) );

// #100-Generate a random number of 3 digits

console.log(Math.floor(Math.random() * 1000) + 100) ;

// #101 -Generate a random number between 0 and 255 inclusively.

console.log(Math.floor((Math.random() * 256) + 0) );

// #102 -What is the year today?

let currentYear =  new Date().getFullYear();
console.log(currentYear);

//103 What is the month today as a number?
var month  = new Date().getMonth();
console.log(month+1);

//104What is the date today?

 const date = new Date();
console.log(date);

//105 What is the day today as a number?

const dateInNum = new Date();
console.log(dateInNum.toString());

// 106  	What is the hours now?

const hours = new Date().getHours();
console.log(hours);

// 107 	What is the minutes now?
const minutes = new Date().getMinutes();
console.log(minutes);


