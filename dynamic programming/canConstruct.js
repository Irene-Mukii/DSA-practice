function canConstruct(target, wordBank){
    if(target==='') return true;

   for(let word of wordBank){
     if(target.startsWith(word)){
            const newTarget = target.slice(word.length);
            if (canConstruct(newTarget, wordBank)===true){
                return true
            };
        }
   }
   return false;
        
}


console.log (canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log (canConstruct('skateboard', ['bo','rd','ate', 't', 'ska','sk','boar']))