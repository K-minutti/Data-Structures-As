/** 
 * 
 * Binary Search Tree
*/

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node
            return this;
        }
        let current = this.root;
        while(true){
                if (current.value === value) return undefined; //handle duplicates - you can also add a freq count the node 
                if (current.value > value){
                    if(current.left){
                        current = current.left
                    } else {
                        current.left = node;
                        return this;
                    }
                } else if (value > current.value){
                    if(current.right){
                        current = current.right;
                    } else {
                        current.right = node;
                        return this;
                    }
                }
        }
    
    }
}

let t = new BinarySearchTree();

t.insert(10);
t.insert(5);
t.insert(13);
t.insert(11);
t.insert(2);
t.insert(16);
t.insert(7);

console.log(t)