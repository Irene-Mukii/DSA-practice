const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
}

const bfhasPath = (graph,src,dst) => {
    const queue = [src];

    while(queue.length>0){
        const current = queue.shift();
        console.log(current);
        
        if (current==dst)return console.log('path found');

        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
    return false;
}

bfhasPath(graph,'f','h') 

// const dfhasPath = (graph,source,destination)=>{
//     if(source==destination) return true;
//     for(let neighbor of graph[source]){
       
//         if(dfhasPath(graph,neighbor,destination)==true) return console.log('path found')
//     }

//     return false;
// }

