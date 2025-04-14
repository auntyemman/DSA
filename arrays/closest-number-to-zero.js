function closestToZero(nums) {
    let closest = nums[0];
    for(let i=1; i<nums.length; i++){
        const absNum = Math.abs(nums[i]);
        const absClosest = Math.abs(closest);
        if(absNum < absClosest) {
            closest = nums[i];
        }
        else if (absNum === absClosest && nums[i] > closest){
            closest = nums[i];
        }
    }
    return closest;
}
console.log(closestToZero([-4,-2,1,4,8]));
console.log(closestToZero([-1000, -1000]));
