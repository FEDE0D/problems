var input = ["tea", "ate", "eat", "apple", "java", "cut", "utc", "vaja"];
var output = [];

function isAnagram1(a, b) {

	if (a.length != b.length) {
		return false;
	}

	var mapA = [];
	for (var i = 0; i < a.length; i++) {
		if (mapA[a[i]]) {
			mapA[a[i]]++;
		} else {
			mapA[a[i]] = 1;
		}
	}

	var mapB = []
	for (var i = 0; i < b.length; i++) {
		if (mapB[b[i]]) {
			mapB[b[i]]++;
		} else {
			mapB[b[i]] = 1;
		}
	}

	for (var item in mapA) {
		if (mapA[item] != mapB[item]) {
			return false;
		}
	}

	return true;
}

function isAnagram2(a, b) {

	if (a.length != b.length) {
		return false;
	}

	var mapA = a.split("").sort();
	var mapB = b.split("").sort();

	for (var i = 0; i < mapA.length; i++) {
		if (mapA[i] != mapB[i]) {
			return false;
		}
	}

	return true;

}


// Quadratic solution
function solution1() {
	for (var i = 0; i < input.length; i++) {
		for (var j = 0; j < input.length; j++) {
			if (i != j) {
				if (isAnagram1(input[i], input[j])) {
					output.push(input[i]);
					break; // we know i is anagram of one of j, break here and check next i
				}
			}
		}
	}
}

// n*log(n) solution
function solution2() {

	var hashMap = [];
	var added = [];
	for (var i = 0; i < input.length; i ++) {
		var sorted = input[i].split("").sort().join(""); // n*log(n)

		if (hashMap[sorted] != undefined) {
			if (!added[hashMap[sorted]]) {
				output.push(input[hashMap[sorted]]);
				added[hashMap[sorted]] = true;
			}
			if (!added[i]) {
				output.push(input[i]);
				added[i] = true;
			}
		}
		hashMap[sorted] = i;
		
	}

}


/**
*	Note: both solutions don't take into account repeated numbers on the input
*/
solution1();
console.log("Input", JSON.stringify(input));
console.log("Output", JSON.stringify(output));
