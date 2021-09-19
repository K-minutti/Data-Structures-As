/** 
 * class obj
 * 
 * Implement stack using array
*/


class Stack {
    constructor(){
        this.stack = [];
    }

    getSize(){
        return this.stack.length;
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        this.stack.pop();
    }
}

