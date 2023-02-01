
function countConstruct (target,wordBank,memo){
    if(target in memo) return memo[target];
    if (target === '') return 1;
    let count =0;
    for (let word of wordBank){
        if(target.startsWith(word)){
            const newTarget = target.slice(word.length);
            const numWaysForRest =  countConstruct(newTarget,wordBank,memo);
            count += numWaysForRest;
        }
    }
    memo[target] = count;
    return count;

}

console.log(countConstruct('purple', ['le','purp','p','ur','purpl'])) //2
console.log(countConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])) //0
console.log(countConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])) //4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','eeeee','eeeeeee','eeeeeeeeeeeee','eeeeeeeeeeeeeeeeeeee'])) //0
