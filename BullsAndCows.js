/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    if (secret === null || guess === null || secret.length !== guess.length) {
            return "";
        }
        
        var countA = 0;
        var countB = 0;
        var count = [];
        for(var i=0;i < 10;i++){
            count[i] = 0;
        }
        secret=secret.split("");
        guess=guess.split("");
        
        for (i = 0; i < secret.length; i++) {
            if (secret[i] === guess[i]) {
                countA++;
            } else {
                count[secret[i] - '0']++;
                if (count[secret[i] - '0'] <= 0) {
                    countB++;
                }

                count[guess[i]- '0']--;
                if (count[guess[i]- '0'] >= 0) {
                    countB++;
                }
            }
        }
        
        return countA+ "A" + countB + "B";
};
