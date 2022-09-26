let arr = [1,2,3,4,5,6,7,8,9];
let start = 0;
let end = arr.length -1;
let target = 120;

function binarySearch (arr, start, end, target){
    if(start>end) return console.log(false);
    // if(arr.length == 0) return console.log('stopped');   ----works for splicing approach
    let midIndex = Math.floor(start + (end - start)/2);
    if (arr[midIndex] == target) return console.log(arr[midIndex]);

    if (arr[midIndex] < target) {
        // newArr = arr.splice(start, (midIndex-1));
        binarySearch(arr,midIndex + 1, end, target);
    }
    else {
        // newArr = arr.splice(midIndex-1,end)
        binarySearch(arr,start,midIndex - 1,target);
    } 
    
}

binarySearch(arr,start,end,target);

