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
        if(this.heap.length === 0)return undefined;
        let maxElement = this.heap[0];
        let lastElement = this.heap.pop();
        this.heap[0] = lastElement;
        // while the root is not in its correct place bubble down
        let currIdx = 0; //root
        let heapLen = this.heap.length;
        let element = this.heap[0];
        while(true){
        // swap the root with child nodes
            break;
        }

        //
        return maxElement;
    }

    print(){
        console.log(this.heap);
    }

}

