//conditions are ther are no duplicates and it is a circularly sorted array, rotation to the right
//finding the number of rotations can be equivalent to finding the index of the min element for a sorted array

let arr = [ 2, 3, 5, 8, 11, 12, ]; 
let start = 0;
let end = arr.length - 1;
let midIndex = 0;


function rotatedArr (arr,start,end){
    if (arr==[]) return console.log('Array is empty');
    if(arr[start]<=arr[end]) return console.log('Our array has been rotated ' + start + ' times. This is the best case scenario')
    //if(start>end) return midIndex;  -------array will always have a min element if values are not duplicated which is our condition, hence this part is unnecessary 

    midIndex = Math.floor(start + (end-start)/2);

    if(arr[midIndex]<=arr[midIndex+1] && arr[midIndex]<=arr[midIndex-1]) return console.log('Our array has been rotated ' + midIndex + ' times.')
    else if(arr[midIndex]<=arr[end]) rotatedArr(arr,start,midIndex-1);  //check if current index is less than last index if so that part of the array is sorted so if a lesser value exists its in the left side of the array so we check there
    else if(arr[midIndex]>=arr[start]) rotatedArr(arr,midIndex+1,end);   //we check if current index value is greater than the first element if so tha side is still sorted and if a lesser value exists it is to the right s we chrck there....
    //these conditions make it O(n), always confirm it is reducing search space.
}

rotatedArr(arr,start,end);