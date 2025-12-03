import { MaxHeapQ } from './template.js';

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function(stones) {
    let l = stones.length;
    if (l === 1) return 1;
    if (l === 0 ) return 0;

    // push each stones to the max queue
    const maxH = pushToQueue(stones);

   // so far we still have one element in the array
    while(l > 1) {
        let x = maxH.pop(); // biggest
        let y = maxH.pop() // second biggest
        let diff = (x - y);
        // if both values are not the same, push the difference to the max queue
        if (x != y) {
          maxH.push(diff);
        };
        // else just, just update the length with the remaining queue size
        l = maxH.size();
    }
    // if final length is 0 return zero else return the last element
    return l === 0 ? 0: maxH.peek();
};

const pushToQueue = function(stones) {
    const maxH = new MaxHeapQ();
    for (const element of stones){
       maxH.push(element); 
    }
    
    return maxH;
}

console.log(lastStoneWeight([2,7,4,1,8,1])) // 1
console.log(lastStoneWeight([1])) // 1
console.log(lastStoneWeight([3,3])) // 0
console.log(lastStoneWeight([4,3,4,3,2])) // 2



