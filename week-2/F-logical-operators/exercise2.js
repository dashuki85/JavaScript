
function isNegative(num) {

if (num < 0) {

 return true
}

return false;

}

function isBetween5and10 (num) {
if (num > 5 && num < 10) {
return true
}

return false
}


function isShortName(name) {
 if (name.length <= 4) { 

    return true;

 }

 return false;
}

function startsWithD(word) {

if (word.startsWith[0] === "D") {
 
return true
}
return false;

}


console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

