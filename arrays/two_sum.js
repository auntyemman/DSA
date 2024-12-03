// Time O(n) | Space O(n)
// this works for sorted, positive and negative arrays
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        complement = target -  nums[i];
        // checks if the map already contains a complementary element
        if (map.has(complement)) {
            // returns the complement index and the index of the num[i] that completes the complement
            return [map.get(complement), i];
        }
        // set the map index of the current number to the index of the complement
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([-1,-2,-3,-4,-5], -8))