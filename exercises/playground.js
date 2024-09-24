// FUNCTIONS: Early return
// BEFORE YOU START: please read the /exercises-info/e3.md file.

/**
 * ====================================================
 * Create a function that works as follows:
 * The function name is 'doesArrayIncludeItemsBetweenVals'
 * given an array of numbers. You can use it as the arr for testing purposes
 * The function take an arr (array), val1 (number) and val2 (number) as arguments.
 * The function returns a boolean if array includes an item that is greater than val1 and less than val2
 * The function MUST have 2 return statements: make an early return if the item is found and use the default return otherwise
 * The function MUST be written with NAMED function syntax.
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 3, 5) => true
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 5, 10) => false
 */

// Your code goes here...
function doesArrayIncludeItemsBetweenVals(arr, val1, val2) {
    if (arr.length === 0) return false;

    for (let i = 0; i < arr.length; i++) {
        console.log("i: ", i);
        console.log("arr[i]: ", arr[i]);
        if (arr[i] > val1 && arr[i] < val2) {
            return true;
        } 
    }
    
    return false;
}

// NO VAR
// Use const as much as possible and let when you need to reassign. 
// console.log()

doesArrayIncludeItemsBetweenVals([3,1,5], 2, 4); // => true
// doesArrayIncludeItemsBetweenVals([3,1,5], 5, 7); // => false




