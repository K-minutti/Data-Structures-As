/** 
 * 
 * Stack implementation using a linked list
 * pushing and popping should be in constant time
*/
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value){
        const node = new Node(value);
        if(this.size === 0){
            this.first = node;
            this.last = node;
        } else {
            // append to the front - first 
            let prevTop = this.first;
            this.first = node;
            this.first.next = prevTop;
        }
        this.size+=1;
        return this.size;
    }

    pop(){
        if(this.size === 0) return undefined;
        let removedNode = this.first;
        if(this.size === 1){
            this.last = null;
        } 
        this.first = this.first.next;
        this.size-=1;
        return removedNode.value;
    }
}