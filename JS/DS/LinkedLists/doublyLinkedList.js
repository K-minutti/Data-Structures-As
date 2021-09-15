/** 
 * class obj
 * 
 * 
*/

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        // create new node
        let node = new Node(value);
        // if list is empty simply set the head and tail to the new node pushed 
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            // not empty
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length+=1;
        return this
    }
}

const list = new DoublyLinkedList();
list.push("N-1");
list.push("N-2");
list.push("N-3");
console.log(list);