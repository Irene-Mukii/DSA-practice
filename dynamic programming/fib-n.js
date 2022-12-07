const fib = (n,memo={}) => {
    if(n in memo) return memo[n];
    if (n<=2) return 1;
    memo[n] = fib(n-1,memo) + fib(n-2,memo);
    return memo[n];
};

//callstack doesnt remember previous callculations
//memoization is the soln?
//js object, keys=arg and val=return val  ------js objects dont bring new or copy of object so space cpomplexity will be really good

console.log(fib(2));
console.log(fib(50));


