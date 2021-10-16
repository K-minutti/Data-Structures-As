/**
 * Passing in a 2D array print the elements in spiral order
 */

function spiralTraverse(array){
    const result = [];
    traverse(array, 0, array.length-1, 0, array[0].length-1, result);
    return result;
}

function traverse(array, startRow, endRow, startCol, endCol, result){
    if (startRow > endRow || startCol > endCol) return;

    //move from startcol to endCol
    for(let col = startCol; col <= endCol; ++col){
        result.push(array[startRow][col]);
    }
    //move from startrow to endrow
    for(let row = startRow+1; row <= endRow; ++row){
        result.push(array[row][endCol]);
    }
    //move reverse(startcol to endcol)
    for(let col = endCol-1; col >= startCol; --col){
        if(startRow === endRow) break;
        result.push(array[endRow][col]);
    }
    //move reverse(startrow to endrow) 
    for(let row = endRow -1; row >= startRow+1; --row){
        if(startCol === endCol) break;
        result.push(array[row][startCol]);
    }

    traverse(array, startRow+1, endRow-1, startCol+1, endCol-1, result)
}