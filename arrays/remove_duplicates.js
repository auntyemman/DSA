// remove dduplicates from a sorted array

// method 1, stepping back after seeing duplicates
// Time complexity: O(n^2)
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

// method 2, replacing elements with its unique value
// Time complexity: O(n)
// Space complexity: O(1)

function removeDuplicates(nums) {
    let k = 1;
    for(let i=1; i<nums.length; i++) {
        // if i is unique from k
         // Compare current element at i, with the last unique element (at k-1)
        if (nums[i] !== nums[k-1]) {
            // make nums to have unique element of k
            nums[k] = nums[i]
            k++;
        }
    }
    return k
}

// method 3, tracks frequency in a map
// Time complexity: O(n)
// Space complexity: O(n)
function removeDuplicates(nums) {
    let tracker = {}
    for(let i=0; i<nums.length; i++){
        tracker[nums[i]] = (tracker[nums[i]] || 0) + 1
    }
    for(let i=0; i<nums.length; i++){
        if (nums[i] === nums[i+1]){
            nums.splice(i, tracker[nums[i]] - 1)
        }
    }
    return nums.length
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))