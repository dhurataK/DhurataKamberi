// Parens Valid
//
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid.
// Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true.
// Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false.

// My version
function parensValid(str){
  var valid = true;
  var openP = 0;
  var closedP = 0
  var len = str.length;

  for (var i = 0; i < len; i++) {
    if(str[i] === "("){
      openP++;
    }
    if(str[i] === ")"){
      closedP++;
    }
    if(openP < closedP ){
      valid = false;
    }
  }
  if(openP != closedP){
    valid = false;
  }
  console.log("Open '(': "+openP+"\nClosed ')': "+closedP);
  return "Valid: "+valid;
}
var str = "N(0)p)3(";
var str1 = "Y(3(p)p(3)r)s";
console.log(parensValid(str1));

// Alan's solution
function valBraces(str){
  var braces = {
    ')':'(',
    ']':'[',
    '}':'{'
  }
  var lastopen = [];
  var len = str.length;
  // loop through string
  for (var i = 0; i < len; i++) {
    if(braces[str[i]]){
      if( !( lastopen.pop() == braces[str[i]] ) ){
        return false;
      }
    } else if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
      lastopen.push(str[i]);
    }else{
      continue;
    }

  }
  return (lastopen.length === 0);
}
console.log(valBraces('abc()[]{}({[]})'));
