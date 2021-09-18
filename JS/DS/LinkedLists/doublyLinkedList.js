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

    pop(){
        if(this.length === 0) return undefined;
        let removedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length-=1;
        return removedNode;
    }

    shift(){
        if(this.length === 0) return undefined;
        let removedNode = this.head;
        if(this.length === 1 ){
            this.head = null;
            this.tail = null;
        }else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length-=1;
        return removedNode;
    }

    unshift(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
            
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length+=1;
        return this;
    }

    get(index){
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while (count !== index){
                current = current.next;
                count+=1;
            }
        } else {
            count = this.length-1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count-=1;
            }
        }
        return current;
    }

    set(index, value){
        let node =  this.get(index);
        if(node !== null){
            node.value = value;
            return true;
        }
        return false;
    }

}

const list = new DoublyLinkedList();
list.push("N-1");
list.push("N-2");
list.push("N-3");
console.log(list);