
function mostWater(h){
    let l = 0;
    let r = h.length - 1;
    let maxArea = 0;

    while(l<r){
        // indices width of the container
        let width = r - l;
        // minimum of the height can contain the water, it will spill from the max
        let height = Math.min(h[r], h[l]);
        // current max area
        let currentMax = width * height;

        maxArea = Math.max(maxArea, currentMax);
        // because it is not sorted, move right only when number at rhs is greater
        if(h[r] > h[l]){
            l++;
        } else{
          r--;
        }
    }
    return maxArea;
}

console.log(mostWater([3,4,1,2,2,4,1,3,2]));
console.log(mostWater([1,2,1]));