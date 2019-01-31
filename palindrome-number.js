/**
 * Runtime: 332 ms
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var prev = x;
    prev = prev.toString();
    x = x.toString().split('').reverse().join().replace(/,/g,'');
    return prev === x;
};

/**
 * Runtime: 276 ms
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeFaster = function(x) {
    var defaultValue = x, reverse = 0, pop;
    if( x < 0 ) return false;
    while (x !== 0) {
        pop = x % 10;
        x = parseInt(x / 10);
        reverse = reverse * 10 + pop;           
    }
    return reverse === defaultValue;
};

/**
 * Runtime: 344 ms
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeSlower = function(x) {
    if (x < 0) return false; 
    var defaultValue = x, reverse = 0, pop;
    var numLength = x.toString().length;
    iterLimit = ((numLength & 1) === 0) ? numLength / 2: (numLength + 1) / 2 ;
    for (var i = 0; i< iterLimit; i++) {
        pop = x % 10;
        x = (x / 10) | 0;
        reverse = reverse * 10 + pop;    
    }
    return ((numLength & 1) === 0) ? x === reverse : (x === ((reverse / 10) | 0)) ;
};
