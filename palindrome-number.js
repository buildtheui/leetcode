/**
 * 332 ms
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var prev = x;
    prev = prev.toString();
    x = x.toString().split('').reverse().join().replace(/,/g,'');
    return prev === x;
};
