class Heap {
  constructor(compareFn) {
    this.data = [];
    this.compare = compareFn; 
    // compare(a, b) returns true if a has higher priority than b
  }

  // ---------- Helper index calculations ----------
  parentIndex(i) { return Math.floor((i - 1) / 2); }
  leftChildIndex(i) { return 2 * i + 1; }
  rightChildIndex(i) { return 2 * i + 2; }

  // ---------- Swap two elements ----------
  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  // ---------- Public API ----------
  size() { return this.data.length; }
  isEmpty() { return this.size() === 0; }
  peek() { return this.data[0]; } // Returns top element without removing

  // ---------- Push: Insert element ----------
  push(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // ---------- Pop(or poll): Remove top element ----------
  pop() {
    if (this.isEmpty()) return null;

    this.swap(0, this.size() - 1);
    const removed = this.data.pop();
    this.bubbleDown(0);
    return removed;
  }

  // ---------- Bubble Up (heapify up) ----------
  bubbleUp(index) {
    while (index > 0) {
      let parent = this.parentIndex(index);

      if (this.compare(this.data[index], this.data[parent])) {
        this.swap(index, parent);
        index = parent;
      } else {
        break;
      }
    }
  }

  // ---------- Bubble Down (heapify down) ----------
  bubbleDown(index) {
    const size = this.size();

    while (true) {
      let left = this.leftChildIndex(index);
      let right = this.rightChildIndex(index);
      let smallestOrLargest = index;

      // For MinHeap: compare(left, current) means left < current  
      // For MaxHeap: compare(left, current) means left > current  
      if (left < size && this.compare(this.data[left], this.data[smallestOrLargest])) {
        smallestOrLargest = left;
      }

      if (right < size && this.compare(this.data[right], this.data[smallestOrLargest])) {
        smallestOrLargest = right;
      }

      if (smallestOrLargest !== index) {
        this.swap(index, smallestOrLargest);
        index = smallestOrLargest;
      } else {
        break;
      }
    }
  }
}

//
// -----------------------------
// MinHeap Implementation
// -----------------------------
// compare(a, b) returns true if a < b
// This is the ONLY difference for MinHeap
//
class MinHeap extends Heap {
  constructor() {
    super((a, b) => a < b); // distinguishing logic here
  }
}

//
// -----------------------------
// MaxHeap Implementation
// -----------------------------
// compare(a, b) returns true if a > b
// This is the ONLY difference for MaxHeap
//
class MaxHeap extends Heap {
  constructor() {
    super((a, b) => a > b); // distinguishing logic here
  }
}

// minHeap usage example
const minH = new MinHeap();
minH.push(5);
minH.push(2);
minH.push(8);
minH.push(1);

console.log(minH.pop()); // 1
console.log(minH.pop()); // 2

// maxHeap usage example
const maxH = new MaxHeap();
maxH.push(5);
maxH.push(2);
maxH.push(8);
maxH.push(1);

console.log(maxH.pop()); // 8
console.log(maxH.pop()); // 5

