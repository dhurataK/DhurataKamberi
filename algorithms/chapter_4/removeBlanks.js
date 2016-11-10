// Remove blanks
//
// Create a function that, given a string, returns a string without blanks. Given " play that Funky Music ",
// returns a string containing "playthatFunkyMusic".
function removeBlanks(string){
  var result ="";
  var len = string.length;
   for (var i = 0; i < len; i++) {
     if(string[i] !== " ")
     {
       result += string[i];
     }
  }
  return result;
}
var arr = " play that Funky Music ";
console.log(removeBlanks(arr)); // test
