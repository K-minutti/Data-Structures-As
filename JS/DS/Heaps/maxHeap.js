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

    print(){
        console.log(this.heap);
    }

}

