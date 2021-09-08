/**
 * @param {number} array
 * @return {number[]} 
 */

/*const quickSort = (array) => {
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

}*/

const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
}
// ITERATION - 2
function pivot(array, left=0, right=array.length-1){
   // assume pivot is always the first element 
   let pivotElem = array[left]; //arr[0]
   let swapIdx = left;// 0 
   //0 [1 2 3 9 6 5 8]
   //i                ^
   //sI     ^  
   for(let i = left+1; i<= right;  ++i){ // i - 1
       if(pivotElem > array[i]){ //arr[0] > arr[1]
           swapIdx++; // 0+1 | 
           swap(array, swapIdx, i)
       }
   }

   swap(array, left, swapIdx);
   return swapIdx;
}

function quickSort(array, left=0, right=array.length-1){
    if(left < right){ // while there is a subarray to sort
        let pivotIdx = pivot(array, left, right);
        quickSort(array, left, pivotIdx-1);//left
        quickSort(array, pivotIdx+1, right)//right
    }
    return array;
}

/**
 * create a recursive func that takes in an array , start, end 
 * create a pivotFinder || partitionPivot func that takes in the same args as above
 * then return the pivotIndex and perform quick sort on the left and right subarrays
 * 
 * 
 */


function myQuickSort(array, left=0, right=array.length-1){
    if(left < right){
        // get the pivot index 
        const pivotIndex = partitionAndGetPivotIndex(array, left, right);
        
        // use the pivot index to split the array into left and right subarrays
        myQuickSort(array,left, pivotIndex-1)// left 
        myQuickSort(array, pivotIndex+1, right)//right
    }
    // else the array passed in has been sorted
    return array;
}


function partitionAndGetPivotIndex(array, left=0, right=array.length-1){
    // init pivot  and swapidx
    let pivotElement = array[left] // start 
    let swapIndex = left; // left = 0
    for(let i = left+1; i <= right; ++i) {// right includes an elem we want to check against
        if(pivotElement > array[i]){
            swapIndex++;
            swap(array, swapIndex, i)
        }
    }
    swap(array, left, swapIndex) // [ 3 4 2 1 8 5 7] putting the swapIdx elem where the left is left is our pivot
    // then at the end we will swap the last resting swapIdx with the pivotElem which will 
    // be equal to left

    // return swapIdx to use in caller func to split main array into subarrays
    return swapIndex;

}


// console.log(quickSort([34,8,7,9,6,5,3,69,4,22,]));
// console.log(quickSort([1, -2, -5,5, 80, 10, 34, 3,22,]));
// console.log(quickSort([9, 4,13,8,91,2,4,6,50,3,5,61,67,7]));

console.log(myQuickSort([34,8,7,9,6,5,3,69,4,22,]));
console.log(myQuickSort([1, -2, -5,5, 80, 10, 34, 3,22,]));
console.log(myQuickSort([9, 4,13,8,91,2,4,6,50,3,5,61,67,7]));