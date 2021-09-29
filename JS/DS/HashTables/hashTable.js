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
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;// keep it inbounds of the array
        }
        return total;
    }

    set(key, value){
        let mapIndex = this._hash(key);
        //if there is nothing at the index then set it to an array 
        if(!this.keyMap[mapIndex]){
            this.keyMap[mapIndex] = [];
        }
        this.keyMap[mapIndex].push([key,value]);
        // then push into the array handles both cases where null and where 
        // a value has already been set, using separate chaining the value must 
        // be set to an array then we push into that array an array with key,value
    }

    get(key){
        let mapIndex = this._hash(key);
        if(this.keyMap[mapIndex]) { // if they key exists in the table
            for(let i = 0; i < this.keyMap[mapIndex].length; ++i){
                //loop through array to find key match
                if(this.keyMap[mapIndex][i][0] === key){
                    //if found return value
                    let value = this.keyMap[mapIndex][i][1];
                    return value;
                }
            }
        }  
        return undefined;
    }

    keys(){
        let keys = [];
        for(let i = 0; i < this.keyMap.length; ++i){
            if(this.keyMap[i]){
                for(let j = 0; j <this.keyMap[i].length; ++j){
                    if(!keys.includes(this.keyMap[i][j][0])){
                        keys.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keys;
    }

    values(){
        let values = [];
        for(let i = 0; i < this.keyMap.length; ++i){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; ++j){
                    if(!values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1])
                    }
                        
                }
            }
        }
        return values;
    }

    print(){
        console.log(this.keyMap)
    }
}

const hash = new HashTable();

hash.set("Hi", "value 1");
hash.set("How", "value 2");
hash.set("Hello", "value 3");
hash.set("Bonjour", "value 4");
hash.set("Hola", "value 5");
hash.set("Bon giorno", "value 6");

//console.log(hash.get("How"));

console.log(hash.keys());