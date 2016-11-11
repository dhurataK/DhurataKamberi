// Invert Hash
//
// Associative arrays are also called hashes. Build invertHash(assocArr) to convert hash keys to values, and values to keys.
// Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"},
// return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.
        function invertHash(assocArr){
          for(key in assocArr){
              assocArr[assocArr[key]] = key;
              delete assocArr[key];
          }
          return assocArr;
        }
        var arr = {"name": "Zaphod", "charm": "high", "morals": "dicey"};
        console.log(arr);
        console.log(invertHash(arr));
