/**
 * @param {string} object
 * 
*/

function collectStrings(obj){
    let strings = []

    function getStrings(obj){
        for(let key in obj){
            if(typeof obj[key] === 'string'){
                strings.push(obj[key]);
            }
            else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
                getStrings(obj[key]);
            }
        } 
    }
    getStrings(obj);

    return strings;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log(collectStrings(obj)) // ["foo", "bar", "baz"])

//Pure Recursion Func
/*
function collectStrings(obj){
    let strings = [];
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            strings.push(obj[key]);
        }  else if (typeof obj[key] === 'object'){
            strings = strings.concat(collectStrings(obj[key]));
        }
    }
    return strings;
}


*/