/**
 * Runtime: 232 ms
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var intTotal = 0;
    var dictNums = {
           'CM': 900,
           'CD': 400,
           'XC': 90,
           'XL': 40,
           'IX': 9,
           'IV': 4,
           'M': 1000,
           'D': 500,
           'C': 100,
           'L': 50,
           'X': 10,
           'V': 5,
           'I': 1
       }
    for (var num in dictNums) {
         s = s.replace(new RegExp(num , 'g'), function(x) {
            intTotal += dictNums[x];
            return '';
        });
    }
    return intTotal;
};

/**
 * Runtime: 200 ms
 * @param {string} s
 * @return {number}
 */
var romanToIntFaster = function(s) {
    var intTotal = 0, letter = '';
    var dictNums = {
           'CM': 900,
           'CD': 400,
           'XC': 90,
           'XL': 40,
           'IX': 9,
           'IV': 4,
           'M': 1000,
           'D': 500,
           'C': 100,
           'L': 50,
           'X': 10,
           'V': 5,
           'I': 1
       }
    s = s.split('')
    while(s.length !== 0) {
        letter = s.shift();
        if (letter === 'C' || letter === 'X' || letter === 'I') {
            if (s[0] && dictNums[(letter + s[0] )]) {
                intTotal += dictNums[(letter + s.shift() )];
                continue;
            }
        }
        intTotal += dictNums[letter]; 
    }
    return intTotal;
};
