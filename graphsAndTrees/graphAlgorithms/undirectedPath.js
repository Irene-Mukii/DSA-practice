const edges = [ //array within arrays??
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n'],
] //moves foward and back, and have cycles, always guard against
    

//marking node as visited 

const undirectedPath = (edges,nodeA,nodeB)=>{
    const graph = buildGraph(edges);
    hasPath(graph, nodeA, nodeB, new Set()) //set is a collection of items can add and check in short time, elements only occur once if equal elements are added only first will appear.
};

const hasPath = (graph, src, dst, visited)=> {
    //console.log(src, dst, visited)
    if (src == dst)return true;
    if (visited.has(src)) return false;

    visited.add(src);
    

     for (let neighbor of graph[src]){
         if (hasPath(graph, neighbor,dst,visited) == true) return true;
     }
     return false;
};

const buildGraph = (edges) => {  //read on adjacency list??
    const graph = {}

    for(let edge of edges){
        const [a,b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}


console.log(undirectedPath(edges,'j','m'));