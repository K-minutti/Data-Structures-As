/**
 * Max Heap
 */

class MaxBinaryHeap {
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        let currIdx = this.heap.length -1;
        let element = this.heap[currIdx];
        while(currIdx > 0){
            let parentIdx = Math.floor((currIdx-1)/2);
            let parent = this.heap[parentIdx];
            if(element <= parent) break;
            this.heap[parentIdx] = element;
            this.heap[currIdx] = parent;
            currIdx = parentIdx;
        }   
    }

    extractMax(){
        let maxElement = this.heap[0];
        let lastElement = this.heap.pop();
        if(this.heap.length > 0){
            this.heap[0] = lastElement;
            this.bubbleDown();
        }
        return maxElement;
    }

    bubbleDown(){
        let currIdx = 0;
        const heapLength = this.heap.length;
        const element = this.heap[0];
        while(true){
            let leftChildIdx = 2 * currIdx + 1; // grabbing node child
            let rightChildIdx = 2 * currIdx +2;
            let leftChild, rightChild;
            let swap = null;

            // swap var update logic 
            if(leftChildIdx < heapLength) { //if in bounds
                leftChild = this.heap[leftChildIdx];            
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < heapLength){
                rightChild = this.heap[rightChildIdx];
                if((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            // swap logic && update currIdx to move forward
            this.heap[currIdx] = this.heap[swap];
            this.heap[swap] = element;
            currIdx = swap;//update

        }
    }

    print(){
        console.log(this.heap);
    }

}

const mH = new MaxBinaryHeap();

mH.insert(3)
mH.insert(2)
mH.insert(4)
mH.insert(0)
mH.insert(34)
mH.insert(44)
mH.insert(50)

mH.print();
console.log("MAX",mH.extractMax());
mH.print();