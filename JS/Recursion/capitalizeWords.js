/**
 * Recursive function 
 * @param {string} array
 */


function capitalizeWords(words){
    const res = [];

    function capitalize(array){
        for(let i = 0; i < array.length; ++i){
            res.push(words[i].toUpperCase());
        }
    }

    capitalize(words);

    return res;
}


function capitalizeWordsB(array) {
    if (array.length === 1) {
  return [array[0].toUpperCase()];
}
let res = capitalizeWordsB(array.slice(0, -1));
res.push(array.slice(array.length-1)[0].toUpperCase());
return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWordsB(words));