/**
 * @param {number} array
 * @return {number[]} 
 */

// TODO: handle negative numbers
 const radixSort = (array) => {
    // steps for radix sort 
    let maxDigitsPlace = getLargestSizeNumber(array);
    for(let k = 0; k < maxDigitsPlace; ++k){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < array.length; ++i){
            let digit =  getDigitAt(array[i],k) // k place within digit
            digitBuckets[digit].push(array[i]);
        }

        array = [].concat(...digitBuckets);
    }
    return array;
 }

// helper method find largest num size 
const getLargestSizeNumber = (array) => {
    let largest = 0;
    array.forEach((e) => {
        largest = Math.max(getDigitCount(e), largest);
    });
    return largest
}

const getDigitCount = (num) => {
    if(num === 0 ) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

// get the digit in i place of num index from right to left [3 2 1 0]
const getDigitAt = (num, digitPlace) => {
    return Math.floor(Math.abs(num) / Math.pow(10,digitPlace)) % 10;
}

// create an array with 10 buckets 
console.log(radixSort([8,7,9,6,5,3,69,4,22,]));
console.log(radixSort([1,-5,5, 80, 10, 34, 3,22,]));
console.log(radixSort([9, 4,13,8,6,50,3,5,61,7]));