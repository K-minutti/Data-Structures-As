/**
 * Basic hash function for hash table - not optimal
 * @param {string} key
 *  @param {number} arrLength
 */

function hash(key, arrLength){
    let total = 0;
    let prime = 37;
    for(let i = 0; i < Math.min(key.length, 100); ++i){
        let char = key[i];
        let value = char.charCodeAt(0)-96;
        total = (total*prime+value) % arrLength;
    }
    return total;
}


console.log(hash("stock", 23))
console.log(hash("short", 23))
console.log(hash("long", 23))