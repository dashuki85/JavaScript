/*
  Array methods - concat
  ----------------------
  The variable everyone should be an array containing both mentors and students.
*/

const mentors = ["Daniel", "Irina", "Rares"];
const students = ["Rukmini", "Abdul", "Austine", "Swathi"];

const everyone = mentors // complete this statement
   .concat(students)
   .filter((item) => item.startsWith("A"))
   .filter((item) => item.length === 5);



/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(everyone);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Rares", "Rukmini", "Abdul", "Austine", "Swathi"]
*/
