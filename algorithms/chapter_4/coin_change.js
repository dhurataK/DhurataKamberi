// Coin Change with Object
// Given a number of U.S. cents, return the optimal configuration of coins, in an object.
//
function change(money){
  coin_change = {
    'quarter': 0,
    'dime': 0,
    'nickel': 0,
    'penny' : 0
  }

  while (money > 0) {
    if(money / 25 >= 1){
       money -= 25;
       coin_change['quarter']++;
    }
    else if(money / 10 >= 1){
       money -= 10;
       coin_change['dime']++;
    }
    else if(money / 5 >= 1){
       money -= 5;
       coin_change['nickel']++;
    }
    else if(money > 0){
       money -= 1;
       coin_change['penny']++;
    }
  }
  return coin_change;
}
console.log(change(23));

// Charlie's Version
function makeChange(cents){
  var coinCountObj = {
    quarters: 0,
    nickels: 0,
    dimes: 0,
    pennies: 0
  };
  var coins = {
    quarters: 25,
    nickels: 5,
    dimes: 10,
    pennies: 1
  }
  if ( cents <= 0 ) {
    return coinCountObj;
  }
  // As long as I can strip quarter values out of cents, do so and increment object quarters
  while ( cents > 25 ) {
    cents -= 25;
    coinCountObj.quarters += 1;
  }
  while ( cents > 10 ) {
    cents -= 10;
    coinCountObj.dimes += 1;
  }
  while ( cents > 5 ) {
    cents -= 5;
    coinCountObj.nickels += 1;
  }

  coinCountObj.pennies = cents;

  return coinCountObj;
}
