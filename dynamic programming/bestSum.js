
let bestSum = function (targetSum, numbers,memo={}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum===0) return [];
    if(targetSum < 0) return null;
    
    let shortestArr = null; // workout why this cant be declared outside?

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, numbers,memo);
        if(remainderResult !== null){
            const arr = [ ...remainderResult, num];
            if(shortestArr === null || arr.length < shortestArr.length)shortestArr = arr;
        }   
    }
    memo[targetSum] = shortestArr;
    return shortestArr;//return value is what we memoize always? 
}

console.log(bestSum(7, [5,4,3,2]));
console.log(bestSum(8, [5,3,2]));
console.log(bestSum(100, [1,2,5,25]));