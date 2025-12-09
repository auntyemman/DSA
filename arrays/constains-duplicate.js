/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const freq = {};
    for (const n of nums){
        freq[n] = (freq[n] || 0) + 1;
        if(freq[n] > 1){
            return true;
        }
    }
    return false
};

console.log(containsDuplicate([1,2,3,1])) // true