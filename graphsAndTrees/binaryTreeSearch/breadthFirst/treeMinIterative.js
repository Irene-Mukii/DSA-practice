class Node {                   //creating a binary tree
    constructor (val){
        this.val=val;
        this.left=null;
        this.right=null;
    };
};
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(15);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMin = (root) => {
    if (root === null) return Infinity;
    let smallest = Infinity;
    const queue = [root];
    while(queue.length > 0){
        
        let current = queue.shift();
        if(current == null) return Infinity;
        if (current.val < smallest) smallest = current.val;
        
        queue.push(current.left);
        queue.push(current.right);

        console.log(smallest);
    }
    return smallest;
}

treeMin(a)