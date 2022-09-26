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
    if(src==null) return count ;
    
    count = count + 1;
   
    visited.add(src);

    for (let neighbor of graph[src]){
        for(let parent of graph[neighbor]){ 
            if (visited.has(parent)) return count;
            else if (visited.has(neighbor)) return count;
            else conComps(graph, neighbor, visited);
        }  
    }
    return count;
    
}
console.log(conComps(graph,1, new Set()));