/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

function printWordsWhichStartsWithT(wordsArray) {
  let index = 0;
  while (index < wordsArray.length) {
if (wordsArray[index][0] === "T") {
  console.log(wordsArray[index]);
}

index++;

  }

}


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

printWordsWhichStartsWithT(daysOfWeek);