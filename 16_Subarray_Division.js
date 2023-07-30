function birthday(s, d, m) {
    // Write your code here
    var countIfSumEquareTo_d = 0;

    if (m === s.length && s[0] === d) {
        countIfSumEquareTo_d++
    }
    
    for (var i = 0; i < s.length-1; i++) {
        console.log("Round of i : " + i);
        console.log("Start With : " + s[i]);
        var sumOfEach = 0;
        for (var j = i; j < m+i; j++) {
            console.log("Round of j : " + j);
            console.log("s[j] : " + s[j]);
            sumOfEach += s[j];
        }
        if (sumOfEach === d) { countIfSumEquareTo_d ++}
    }
    return countIfSumEquareTo_d 
}

s = [2, 2, 1, 3, 2]
d = 4
m = 2
console.log(birthday(s, d, m));

/* var countIfSumEquareTo_d = 0;

function birthday(s, d, m) {
    for (var i = 0; i < s.length-1; i++) {
        if (beforeChaining = s.slice(i, i + m).reduce((a, b) => a + b) === d) {
            countIfSumEquareTo_d++
        }
    }

    return countIfSumEquareTo_d
} */