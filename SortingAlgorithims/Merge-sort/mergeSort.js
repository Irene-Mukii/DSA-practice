function mergeSort(arr){   //recursion
    if(arr.length < 2)return arr;

    const midIndex = Math.floor(arr.length/2);
    const leftArr = arr.slice(0,midIndex);     //slices up until and not including the last val
    const rightArr = arr.slice(midIndex,arr.length)

    return merge(mergeSort(leftArr), mergeSort(rightArr))  //what if we try merge(leftArr,rightArr);
}

function merge (leftArr,rightArr){ //ordered arrays only hence needing to finish mergesort to the end
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex<leftArr.length && rightIndex<rightArr.length){
        if (leftArr[leftIndex]< rightArr[rightIndex]){
            resultArr.push(leftArr[leftIndex]);
            leftIndex += 1;
        }else{
            resultArr.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }

    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex)); //to take the last digit if missing
}