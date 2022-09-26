let arr = [2, 4, 10, 10, 10, 18, 20]; 
let start = 0;
let end = arr.length - 1;
let target = 10;
let searchFirst = Boolean;
let result = 0;
let firstIndex= 0;
let lastIndex = 0;
let numOfOccurence = 0;
let storeIndex =0;

function occurence(arr,start,end,target){  ///USING RECURSION binary search checks for first occurence , last occurence and calculates number of occurence
    if (arr==[]) return console.log('Array is empty');
    if (start>end) return console.log('stopped');
    
    let midIndex = Math.floor(start + (end -start)/2);
    if(arr[midIndex] == target) {
        numOfOccurence += 1;
        
        if(numOfOccurence == 1) {
            firstIndex = midIndex; 
            lastIndex = midIndex;
            storeIndex = firstIndex;
        } //we need to check it its the smallest and then swap ----- first occurence
        if(numOfOccurence >1) { // -----lastIndex coubt
            lastIndex = midIndex;
            if(storeIndex>lastIndex) storeIndex = lastIndex; 
        }
        occurence(arr,start, midIndex - 1,target);  //checking leftside side
        occurence(arr,midIndex + 1,end,target);   //checking right side
    }
    else if (arr[midIndex]>target){
        occurence(arr,start, midIndex - 1,target);
        occurence(arr,midIndex + 1,end,target);
     }
    else{
         occurence(arr,midIndex + 1,end,target);
         occurence(arr,start, midIndex - 1,target);
    }

    return console.log(`First occurence of ${target} is at index ${storeIndex}, Number of occurence is ${numOfOccurence} and last occurrence is at index ${lastIndex}`);
}

//occurence(arr,start,end,target);//still O(n) has to be if not sorted --this isnt considered a binary search though



//if sorted then we can take ( last occurence -first occurence +1)

//a more comprehensive shortened way

function findIndex (arr,start,end,target,searchFirst){
    if (arr==[]) return console.log('Array is empty');
    if (start>end) return console.log('stopped');

    let midIndex = Math.floor(start + (end -start)/2);

    if(arr[midIndex] == target) {
        result = midIndex
        if(searchFirst == true )findIndex(arr,start, midIndex-1,target);
        if(searchFirst == false )findIndex(arr, midIndex+1,end,target);
    }
    else if (arr[midIndex]>target){
        findIndex(arr,start,midIndex-1,target)
    }else{
        findIndex(arr, midIndex+1,end,target)
    }

    return result;
}
//findLast(arr,start,end,target)

function findNum (arr,start,end,target){
    if (arr==[]) return console.log('Array is empty');

    firstIndex = findIndex(arr,start,end,target,true);
    lastIndex = findIndex(arr,start,end,target,false);
    return console.log(firstIndex, lastIndex,lastIndex - firstIndex +1)
}

findNum(arr,start,end,target);
