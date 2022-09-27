const graph = {
    1: ['2'],
    2: ['1'],
    3:[],
    4:['6'],
    5:['6'],
    6:['4','5','7','8'],
    7:['6'],
    8:['6']
}


const conComps = (graph) => {
    const visited = new Set();
    let count = 0;
    for (let node in graph) {   
            if (explore(graph,node,visited)==true) count=count+1; 
    //after finishing a traversal count one, increment to next node and begin loop
    }
    return count; 
}



const explore = (graph,current,visited) => {//traverse connected nodes 
    if(visited.has(current)) return false; 
    //if current node has been traversed,keep count as is , and ++ to next node
    else{
    const queue = [current]; 
    visited.add(current); 
    

    while (queue.length>0){
                const src = queue.shift();

               
                for(let neighbor of graph[src]){
                        if (!visited.has(neighbor)){
                        
                            visited.add(neighbor); 
                            queue.push(neighbor);
                            return true
                        }return false;
                }
            } return true;
    }
}

console.log(conComps(graph));