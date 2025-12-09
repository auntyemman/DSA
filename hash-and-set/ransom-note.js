/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let freq = {};
    for(const m of magazine){
        freq[m] = (freq[m] || 0) + 1;
    }

    for(const r of ransomNote){
        // if not character of the ransom in the intitially constructed freq object map return false
        if(!freq[r]) return false;
        // use one and reduce the freq to see if all can be used up
        freq[r]--;
    }
    return true;
};