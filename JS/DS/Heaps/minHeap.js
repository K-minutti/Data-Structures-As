/**
 *  Priority Queue from Min Binary Heap
 */

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        let node = new Node(value, priority)
        this.values.push(node);
        this.bubbleUp();
    }

    bubbleUp(){
        let currIdx = this.values.length-1;
        let element = this.values[currIdx];
        while (currIdx > 0){
            let parentIdx  = Math.floor((currIdx-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break; // if its greater than it has a lower priority no need to swap;
            this.values[parentIdx] = element;
            this.values[currIdx] = parent;
            currIdx = parentIdx;
        }
    }

    dequeue(){
        let minElement = this.values[0];
        let lastElement = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = lastElement;
            this.bubbleDown();
        }
        return minElement;
    }

    bubbleDown(){
        let currIdx = 0;
        const valuesLength = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * currIdx+1;
            let rightChildIdx = 2 * currIdx+2;
            let leftChild, rightChild;
            let swap = null;// set to null as nothing has been swapped

            if(leftChildIdx < valuesLength) {
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < valuesLength){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || 
                (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break; // if we haven't swapped any values then we are in the correct place break
            this.values[currIdx] = this.values[swap];
            this.values[swap] = element;
            currIdx = swap;
        }

    }

    print(){
        console.log(this.values);
    }
}

const Op = new PriorityQueue();

Op.enqueue("first", 2);
Op.enqueue("second", 5);
Op.enqueue("third", 0);
Op.enqueue("fourth", 4);
Op.enqueue("fifth", 1);
console.log("============")
console.log(Op.dequeue());
console.log(Op.dequeue());
console.log(Op.dequeue());
Op.print();

 /*
        1
      4   2 
    5  
 
 */