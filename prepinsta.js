//Arrays

//Q1. Find Largest element in an array
// let array = Array(1,2,3)

// function largestElement(array){

//     // let largest = Number.NEGATIVE_INFINITY;
//     let largest = array[0];

//     for (let i=0; i<array.length; i++){
//         if(array[i] > largest){
//             largest = array[i]
//         }
//     }
//     return largest;
// }

// let nums = [10, 89, 9, 56,  4, 80, 8]
// // nums.sort((a,b)=> a-b)
// console.log(largestElement(nums))


// Q2. Find Smallest Element in an Array
// function smallestArray(array){
//     let smallest = array[0];

//     for (let i=0; i < array.length; i++){
//         if(array[i] < smallest){
//             smallest = array[i]
//         }
//     }

//     return smallest;
// }

// let nums = [10, 89, 9, 56,  4, 80, 8]
// nums.sort((a,b) => a-b)
// console.log(smallestArray(nums))


// Q3. Find the Smallest and largest element in an array
// function smallestLargest(array){
//     let smallest = array[0];
//     let largest = array[0];

//     for (let i=0; i < array.length; i++){
//         if(array[i] < smallest){
//             smallest = array[i]
//         }

//         if(array[i] > largest){
//             largest = array[i]
//         }
//     }

//     return {largest, smallest};
// }

// let nums = [10, 89, 9, 56,  4, 80, 8]
// nums.sort((a,b) => a-b)
// console.log(smallestLargest(nums))

// Q4. Find Second Smallest Element in an Array 
// function secondsmallestArray(array){
//     if (array.length < 2) {
//         return "Array must have at least two elements";
//     }
    
//     let smallest = Number.POSITIVE_INFINITY;
//     let secondSmallest = Number.POSITIVE_INFINITY;
    
//     for (let i=0; i < array.length; i++){
//         if(array[i] < smallest){
//             secondSmallest = smallest
//             smallest = array[i]
//         } 
//         else if(array[i] < secondSmallest && array[i] !== smallest) {
//             secondSmallest = array[i]
//         }
//     }

//     if (secondSmallest === Number.POSITIVE_INFINITY) {
//         return "No second smallest element found";
//     }
//     return secondSmallest;
// }
    
// let nums = [10, 13, 1, 17, 11, 34, 21]
// console.log(secondsmallestArray(nums))


// Q5. Calculate the sum of elements in an array
function SumofArray(arr){
    
}