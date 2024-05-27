/**
 * @param {number[]} arr
 * @return {number}
 */
 //index = 0
 //arr = [3,4,5,1] (4)
 //i = 1
 //arr[index] 3
 //arr[i] 4
 var peakIndexInMountainArray = function(arr) {
    let index = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[index] < arr[i]) index = i
    }
    return index
};
