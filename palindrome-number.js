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
