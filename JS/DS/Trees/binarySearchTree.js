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


    contains(value){
        if(!this.root) return undefined;
        let current = this.root;
        while(current){
            if (current.value === value) return true;
            if (value < current.value){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    find(value){
        if(!this.root) return undefined;
        let current = this.root;
        let found = false;
        while(current && !found){//while current is valid and the val has not been found
            if(value < current.value){
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                // the values are equal
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    // remove from a bst

    // update from bst
}

let t = new BinarySearchTree();

t.insert(10);
t.insert(5);
t.insert(13);
t.insert(11);
t.insert(2);
t.insert(16);
t.insert(7);

console.log(t.contains(6))
