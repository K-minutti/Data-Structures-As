/**
 * @param {number} array
 * @return {number[]} 
 */

const quickSort = (array) => {
     quickSortRecursiveFunc(array, 0, array.length-1);
     return array;
}

const quickSortRecursiveFunc = (array, left, right) => {
    if(left < right){
        const pivotRestingPositiion = getPivot(array, left, right);
        quickSortRecursiveFunc(array, left, pivotRestingPositiion-1);
        quickSortRecursiveFunc(array, pivotRestingPositiion+1, right);
    }
}

const getPivot = (array, left=0, right=array.length-1)=> {
    const pivotElem = array[right];

    let p2 = left-1
    for(let p1= left; p1 <right; ++p1){
        if(array[p1] <= pivotElem){
            p2++;
            swap(array, p2, p1);
        }
    }

    swap(array, p2+1, right);
    return p2+1;
}

const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
}

console.log(quickSort([34,8,7,9,6,5,3,69,4,22,]));
console.log(quickSort([1, -2, -5,5, 80, 10, 34, 3,22,]));
console.log(quickSort([9, 4,13,8,91,2,4,6,50,3,5,61,67,7]));