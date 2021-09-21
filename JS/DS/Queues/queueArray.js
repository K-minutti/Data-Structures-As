/** 
 * Queue ds using array
*/

class Queue {
    constructor(){
        this.queue = [];
    }

    push(value){
        this.queue.push(value);
        return true;
    }

    pop(){
        //remove from front fifo
        return this.queue.shift();
    }
}