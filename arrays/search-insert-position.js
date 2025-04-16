function searchInsert(nums, target) {
    let l = 0;
    let r = nums.length;
    while(l<r) {
        const mid = Math.floor((l+r)/2);
        if (target < nums[mid]){
            // Move right pointer to mid to search in the left half
            r = mid;
        } else if(target > nums[mid]){
            // Move left pointer to mid + 1 to search in the right half
            l = mid + 1;
        } else {
            // Move right pointer to mid to find the first occurrence (if duplicates)
            r = mid;
        }
    }
    // At this point, l == r, and it represents the index where target should be inserted
    return l; // so returning left or right is fine
};


console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1], 0))