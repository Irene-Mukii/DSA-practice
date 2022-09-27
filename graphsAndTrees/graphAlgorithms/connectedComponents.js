const graph = {
    1: [2],
    2: [1],
    3:[],
     4:[6],
     5:[6],
     6:[4,5,7,8],
     7:[6],
     8:[6]
}

let count = 0;
const conComps = (graph,src,visited) => {
    
    for (src=1; src<=8; src++) {
        const queue = [src];  
        if(visited.has(src)) count; //check if current node has been traversed if so keep count as is , and increment to next node

        else { //traverse connevted nodes completely
            while (queue.length>0){
                const current = queue.shift();
                
                for(let neighbor of graph[current]){
                        if (visited.has(neighbor)) count;
                        else{
                            visited.add(neighbor);
                            queue.push(neighbor);
                        }
                }
            }count=count+1;  //after finishing a traversal count one 
        }//increment to next node and begin loop
    }
    return count;
    
}
console.log(conComps(graph,1, new Set()));