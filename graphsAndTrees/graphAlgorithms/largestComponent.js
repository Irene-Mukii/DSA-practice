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
        //check if node has been traversed
        if (visited.has(node)) return largest;
        
        //add node to traversed/visited
        visited.add(node);
        console.log(visited);
        //traverse it and return count connected nodes(component size)
        const componentSize = traverse(graph,node,visited);
        console.log(componentSize);
        //check if the size is greater than current largest if so replace largest
        if (largest < componentSize) largest=componentSize;
        //iterate to next node
        
    }return largest;
}

let size= 0;
const traverse = (graph,src,visited) => { //recursion depth first 
     size+= 1;
    for (let neighbor of graph[src]){
        console.log(visited);
        if(visited.has(neighbor)) return size;
        else {
            visited.add(neighbor);
            traverse(graph,neighbor,visited);
        }
    }
    return size
}

console.log(largestComponent(graph))