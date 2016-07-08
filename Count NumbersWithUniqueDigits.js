/**
 * Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) return 1;
    var res = 0;
    for (var i = 1; i <= n; ++i) {
        res += count(i);
    }
    return res;
    function count(k) {
        if (k < 1) return 0;
        if (k === 1) return 10;
        var res = 1;
        for (var i = 9; i >= (11 - k); --i) {
            res *= i;
        }
        return res * 9;
    }
};
