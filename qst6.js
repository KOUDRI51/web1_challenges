//Given two arrays of numbers, write a function that returns a new 
//array containing the unique elements from both arrays.


function uniqueElements(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    return [...new Set(combinedArray)];
}
