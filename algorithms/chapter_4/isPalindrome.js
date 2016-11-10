// Create a function that returns a boolean whether the string is a strict palindrome.
// Given 'racecar' return true. Given 'oho!', 'Dud', or 'race car' return false.
// Bonus-level: DO ignore whitespaces.

// With whitespaces version

function isPalindrome(str){
var result = true;
for (var i = 0; i < str.length/2; i++) {
   if(str[i] !== str[str.length-1-i]){
      result = false;
    }
}
console.log(result);
return result;
}
// Testing
var str = "racecar";
console.log(str5);

// Ignore whitespaces
