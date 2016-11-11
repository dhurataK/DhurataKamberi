// Zip Arrays into Map
//
// Associative arrays (Javascript objects) are sometimes called maps because a key (string) maps to a value.
//Given two arrays, create an associative array (map) containing keys of the first, and values of the second.
//For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.
//
function zipArray(arr1, arr2){
  var map = {};
  if (!(arr1.length == arr2.length)){
    return "Arrays must have same length!"
  }
  else{
    for (var i = 0; i < arr1.length; i++)
    {
      map[arr1[i]] = arr2[i];// 0 ==> map['abc'] = true
                             // 1 ==> map[3] = 34
                             // 2 ==> map[43] = 'wassup'
    }
    return map;
  }
}
var arr1 = ["abc", 3, "yo"];
var arr2 = [42, "wassup", true];
console.log(zipArray(arr1,arr2));
