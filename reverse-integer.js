/**
 * Runtime: 96 ms
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reverse = 0, pop;
    var MAX_INT = Math.pow(2,31) - 1;
    var MIN_INT = -MAX_INT + 1;
    while(x !== 0) {
        pop = x % 10;
        x = parseInt(x / 10);
        if (reverse > MAX_INT / 10 || 
           (reverse === MAX_INT / 10 && pop > 7))
            return 0;
            
        if (reverse < MIN_INT / 10 || 
           (reverse === MIN_INT /10 && pop < -8))
            return 0;          
        reverse = reverse * 10 + pop;
    }
    return reverse;
};
