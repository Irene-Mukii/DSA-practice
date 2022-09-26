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
    if(root === null) return Infinity;
    const left = treeMin(root.left);
    const right = treeMin(root.right);
    let currentMin = Math.min(root.val, left , right );
    return currentMin;
}

treeMin(a);