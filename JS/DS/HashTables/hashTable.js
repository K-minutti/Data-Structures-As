/**
 * 
 * Class Hash Table with - Separate Chaining
 * 
*/


class HashTable {
    constructor(size=73){
        this.keyMap = new Array(size);
    }
    //underscore - convention for private class methods the method is still publicly available
    _hash(key){
        let total = 0;
        let prime = 31;
        for(let i = 0; i < Math.min(key.length, 100);++i){
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total * prime+value) % this.keyMap.length;// keep it inbounds of the array
        }
        return total;
    }
}
