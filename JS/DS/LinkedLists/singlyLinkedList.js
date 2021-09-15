/**
 * class obj
 * 
 */

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length +=1;
        return this// why do we need to return this?
    }

    pop(){
        if(this.length === 0) return undefined;
        if(this.length === 1){
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length -=1;
            return node;
        } else {
        let node = this.head;
        let nextNode = this.head.next;
        while(nextNode.next){
            node = nextNode;
            nextNode = node.next;
        }
        node.next = null;
        this.tail = node;
        this.length -=1;
        return nextNode;
        }
    }

    shift(){
        if (this.length === 0) return undefined;
        let removedHead = this.head;
        this.head = removedHead.next;
        this.length -=1;
        // if tail len is 0 set tail to null again
        return removedHead;
    }

    unshift(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length+=1;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        while(index > 0){
            current = current.next;
            index-=1;
        }
        return current;

    }

    set(index, value){
        let nodeToUpdate = this.get(index);
        if(nodeToUpdate === null) return false;
        nodeToUpdate.value = value;
        return true;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) {
            return !!this.push(value); // !! coersion to boolean
        }
        if(index === 0){
            return !!this.unshift(value);
        } 
        else {
            let newNode = new Node(value);
            let prevNode = this.get(index-1);// node before the node idx you will update
            newNode.next = prevNode.next;
            prevNode.next = newNode;
        
        }
        this.length +=1;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();

        let prevNode = this.get(index-1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length -=1;
        return removedNode;
    }

    reverse(){
    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;

    let nextNode;
    let prevNode = null; // init to null to set new tail next to null

    for(let i = 0; i < this.length; ++i){
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }

    return this; // returning  linked list (reversed)
    }
} 





const list = new SinglyLinkedList();
list.push("N-1");
list.push("N-2")
list.push("N-3");
list.push("N-4")

console.log(list.reverse());

console.log("========");

console.log(list.reverse());