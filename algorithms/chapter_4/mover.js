//	Given a sequence of movements as a string (up: "U", down: "D", right: "R", left: "L") in a 2-D game, find me the current (x,y) position of the player AND how many times each move was performed.  For our purposes, the output will be of the cartesian coordinates and each move will be one unit long.  Example: Given "UULDR", return a tuple (or list): ( [0, 2], { 'U' : 2, 'L' : 1, 'D' : 1, 'R': 1} )




var test_str = "ULRDDDRR"
//Making a function that takes a string as an input.

function mover(movements) {

	var moves = {
		'U' : 0,
		'L' : 0,
		'R' : 0,
		'D' : 0
	}

	for (var i = 0; i < movements.length; i++) {
		moves[ movements[i] ] += 1;
	}

	return [ [ moves['U'] - moves['D'], moves['R'] - moves['L'] ], moves ];


}


var stats = mover(test_str);

console.log(stats[0]);

console.log(stats[1]);


//returns a list containing two things: the end position, and an object containing the numbers of times each move was made.
