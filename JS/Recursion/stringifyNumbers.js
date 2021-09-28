/**
 * @param {any} obj
*/

function stringifyNumbers(obj){
    const res = {};

    for(let key in obj){
        if(typeof obj[key] === 'number'){
            res[key] = obj[key].toString();
        // in JS everything is an object so an array would return true with the second condition
        } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            //if encounter obj recurse down obj in same manner 
            res[key] = stringifyNumbers(obj[key]);
        } else {
            // if the value is not a number and not an object simply write it to the new object
            res[key] = obj[key];
        }
    }
    return res;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));







/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

