/**
 * @param {number} array
 * @return {number[]} 
 */

const insertionSort = (array) => {
    for(let i = 1; i < array.length; i++){
        let currentValue = array[i];
        let j = i-1;
        while(j>=0 && array[j] > currentValue){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = currentValue;
    }
    return array
}


console.log(insertionSort([34,8,7,9,6,5,3,69,4,22,]));
console.log(insertionSort([1, -2, -5,5, 80, 10, 34, 3,22,]));
console.log(insertionSort([9, 4,13,8,91,2,4,6,50,3,5,61,67,7]));