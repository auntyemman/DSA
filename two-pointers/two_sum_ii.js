// this is the second two sum required to use Space: O(1) i.e constanst space.
// Hash map cant be used as it will increase the space complexity.

// find the the two numbers that sums up to the target
// the function should return the two indices plus 1
function twoSum2(num, target){
    let l = 0;
    let r = num.length - 1;

    while(l < r) {
        const sum = num[l] + num[r];
        if(sum === target) {
            return [ l+1, r+1 ];
        } else if(sum <= target){
            l++;
        } else {
            r--;
        }
    }
}

console.log(twoSum2([1, 3, 5, 9], 8))
console.log(twoSum2([-1, 0, 3], -1))