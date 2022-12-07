const gridTraveler = (m,n,memo={}) => { //key is arguments and values is the return value
    const key = m+ ','+n;
    if(key in memo) return memo[key];

    if(m===0|| n===0){
        return 0;
    }
    if (m===1&&n===1){
        return 1;
    }

    memo[key] =  gridTraveler(m-1,n,memo) + gridTraveler(m,n-1,memo);
    return memo[key];
};

console.log(gridTraveler(18,18));


// ****************************************
//Memoization Recipe
// Make it work 
    // visualize problem as tree
    //implement using recursion 
    //test brute force recursion
//Make it efficient 
    //add memo object (keys and values) 
    //add a base case to return memo values 
    //store return values into memo
    