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
    insert(value){
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
        this.length +=1;
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
}



const list = new SinglyLinkedList();
list.insert("N-1");
list.insert("N-2")