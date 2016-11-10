// Get digits
//
// Create a JavaScript function that, given a string, returns the integer made from the string’s digits.
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
function getDigits(string)
{
  var result = "";
  var nums = [1,2,3,4,5,6,7,8,9,0];
  for (var i = 0; i < string.length; i++) {
    for(var j = 0; j<nums.length;j++){
      if(string[i] == nums[j])
      {
        result += string[i];
      }
    }
  }
  return result;
}
console.log("My version:");
 var str = "0s1a3y5w7h9a2t4?6!8?0";
 console.log(getDigits(str)); // test

 // Todd's version

 function getDigitsT(str){
   var result = "";
   var length = str.length;
   for (var i = 0; i < length; i++) {
     if(str[i] >= 0 && str[i] <= 9){
       result += str[i];
     }
   }
   console.log(result);
   return result;
 }
console.log("Todd's version:");
var str = "0s1a3y5w7h9a2t4?6!8?0";
getDigitsT(str);
