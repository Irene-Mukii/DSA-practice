const edges = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
];

const createGraph = (edges) => {
    const graph = {};
    for (let edge of edges){
        const [a,b]=edge;
        if(!(a in graph)) graph[a]=[];
        if(!(b in graph)) graph[b]=[];
        graph[a].push(b);
        graph[b].push(a);
    } 
    console.log(graph);
    return graph;
}

const shortestPath = (edges,start,dst) => {
    const graph = createGraph(edges);

    let visited = new  Set([start]);    
    const queue = [[start,0]];

    while(queue.length>0){
        const [node, distance] = queue.shift();
        console.log(node,dst,distance);

        if (node==dst) return distance;
        
        for (let neighbor of graph[node]){
            if(!visited.has(neighbor)){
            visited.add(neighbor);
            queue.push([neighbor,distance+1]); 
            }
        }
    }
    return console.log('No path found');
};

console.log(shortestPath(edges,'w','z'));