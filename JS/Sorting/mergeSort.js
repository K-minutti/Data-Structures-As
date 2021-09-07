/**
 * @param {number} array
 * @return {number[]} 
 */


 const mergeSort = (array) => {
    if(array.length <=1) return array;
    let midpoint = Math.floor(array.length/2); // 1
    let left = mergeSort(array.slice(0,midpoint)) // [3]
    let right = mergeSort(array.slice(midpoint)) // [2]
    return merge(left, right);
}


const merge = (arr1, arr2) => {
    let i = 0;
    let j  = 0;
    const result = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j])
        j++;
    }

    return result;
}


console.log(mergeSort([34,8,7,9,6,5,3,69,4,22,]));
console.log(mergeSort([1, -2, -5,5, 80, 10, 34, 3,22,]));
console.log(mergeSort([9, 4,13,8,91,2,4,6,50,3,5,61,67,7]));

