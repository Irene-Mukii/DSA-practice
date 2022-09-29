const graph = {
    0: ['1','5','8'],
    1: ['0'],
    2: ['3','4','6','7'],
    3: ['4','2'],
    4: ['3','2'],
    5: ['0','8'],
    6: ['2'],
    7: ['2'],
    8: ['0','5']
}

const largestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;

    for(let node in graph){
        //traverse it and return count connected nodes(component size)
        const componentSize = traverse(graph,node,visited);
        //check if the size is greater than current largest if so replace largest
        if (largest < componentSize) largest=componentSize;
        //iterate to next node
        
    }return largest;
};


const traverse = (graph,src,visited) => { //recursion depth first 
    if (visited.has(src)) return 0; //check if node has been traversed
    visited.add(src);  //add node to traversed/visited
    
    let size= 1;

    for (let neighbor of graph[src]){
            size += traverse(graph,neighbor,visited);
    }
    return size
};

console.log(largestComponent(graph))