/** 
 * 
 * Queue ds using a linked list approach
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        let node = new Node(value);
        if(this.size === 0){
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size+=1;
        return this.size;
    }

    dequeue(){
        if(this.size === 0) return null;
        let removeNode = this.first;
        if(this.size === 1){
            this.last = null;
        }
        this.first = removeNode.next; // if only one time next is null
        this.size-=1;
        return removedNode.value;
    }
}