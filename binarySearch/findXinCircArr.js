let arr = [  18, 21, 3, 6, 7, 8, 9, 12, 14,];
let start = 0;
let end = arr.length - 1;
let target = 21;


function xInCircArr(arr,start,end,target){
    if(start>end) return console.log('stopped')

    let midIndex = Math.floor((end + start)/2);
    
    if(arr[midIndex]==target) return console.log(target + ' is at index ' + midIndex + ' of array') //works

    if(arr[midIndex]<=arr[end]) { //is sorted
        if(target>arr[midIndex] && target<=arr[end]) xInCircArr(arr,midIndex+1,end);
        else xInCircArr(arr,start,midIndex-1);

    } else { //is sorted

        if(target>=arr[start] &&  target<arr[midIndex]) xInCircArr(arr,start,midIndex-1);
        else xInCircArr(arr,midIndex+1,end);
    }     
}

xInCircArr(arr,start,end,target);

//should work not sure whats up