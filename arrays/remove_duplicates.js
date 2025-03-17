// remove dduplicates from a sorted array

// method 1, stepping back after seeing duplicates
// Time complexity: O(n)
// Space complexity: O(1)
function removeDuplicates(nums) {

    for(let i=0; i<nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i, 1)
            i--;
        }
    }
    return nums.length
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))