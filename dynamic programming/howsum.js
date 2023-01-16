function howSum (targetSum, numbers, memo ={}){
    if(targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if(targetSum < 0) return null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers,memo);
        if(remainderResult !== null){
            memo[targetSum] = [ ...remainderResult, num]; //syntax copys element into new array and adds to array doesnt create new array 
            return memo[targetSum] //puting numbers that sum up to the target into an array
        }
    }

    memo[targetSum] = null;
    return memo[targetSum];

}

console.log(howSum(7, [2,3]));
console.log(howSum(7,[5,3,4,7]));
console.log(howSum(8, [3,5,2]));
console.log(howSum(300, [7,14]));